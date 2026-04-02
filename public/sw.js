/**
 * Bender Exports — Service Worker v2.0.0 (Supabase Edition)
 *
 * What changed from v1:
 * - Offline mutation queue now stores ops with the Supabase JWT so they
 *   can be replayed directly against the server API when connectivity returns.
 * - Realtime sync is handled by the Supabase JS client in app.js, not here.
 *   The SW focuses on: caching, offline asset serving, and queue flush.
 * - Auth tokens are stored securely — never logged or exposed.
 */
const VERSION      = "v2.0.0";
const STATIC_CACHE = "bender-static-" + VERSION;
const CDN_CACHE    = "bender-cdn-"    + VERSION;
const API_CACHE    = "bender-api-"    + VERSION;
const QUEUE_DB     = "bender-queue-v2";

const STATIC = ["/", "/index.html", "/app.js", "/manifest.json",
  "/icons/icon-192.svg", "/icons/icon-512.svg"];

const CDN_ORIGINS = ["unpkg.com", "cdn.jsdelivr.net", "cdnjs.cloudflare.com",
  "fonts.googleapis.com", "fonts.gstatic.com"];

// ── Install ───────────────────────────────────────────────────────────
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(STATIC_CACHE)
      .then(c => c.addAll(STATIC).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

// ── Activate ──────────────────────────────────────────────────────────
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => ![STATIC_CACHE, CDN_CACHE, API_CACHE].includes(k))
            .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch ─────────────────────────────────────────────────────────────
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;

  if (CDN_ORIGINS.some(o => url.hostname.includes(o))) {
    e.respondWith(cacheFirst(e.request, CDN_CACHE));
    return;
  }
  if (url.pathname.startsWith("/api/")) {
    e.respondWith(networkFirst(e.request, API_CACHE));
    return;
  }
  e.respondWith(cacheFirst(e.request, STATIC_CACHE));
});

// ── Background Sync ───────────────────────────────────────────────────
self.addEventListener("sync", e => {
  if (e.tag === "bender-sync") e.waitUntil(flushQueue());
});

self.addEventListener("message", async e => {
  if (e.data?.type === "FLUSH_QUEUE") {
    const flushed = await flushQueue();
    const clients = await self.clients.matchAll();
    clients.forEach(c => c.postMessage({ type: "QUEUE_FLUSHED", flushed }));
  }
  // Store the current auth token for use in flush (sent from app.js on login)
  if (e.data?.type === "SET_TOKEN") {
    const db = await openDB();
    const tx  = db.transaction("meta", "readwrite");
    tx.objectStore("meta").put({ key: "token", value: e.data.token });
  }
});

// ── Cache helpers ─────────────────────────────────────────────────────
async function cacheFirst(req, name) {
  const cached = await caches.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res.ok) (await caches.open(name)).put(req, res.clone());
    return res;
  } catch {
    return new Response("Offline", { status: 503 });
  }
}

async function networkFirst(req, name) {
  try {
    const res = await fetch(req.clone());
    if (res.ok) (await caches.open(name)).put(req, res.clone());
    return res;
  } catch {
    const cached = await caches.match(req);
    return cached || new Response(
      JSON.stringify({ error: "Offline — no cached data" }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }
}

// ── Offline Queue (IndexedDB) ─────────────────────────────────────────
function openDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(QUEUE_DB, 2);
    r.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("ops"))
        db.createObjectStore("ops", { keyPath: "id", autoIncrement: true });
      if (!db.objectStoreNames.contains("meta"))
        db.createObjectStore("meta", { keyPath: "key" });
    };
    r.onsuccess = e => res(e.target.result);
    r.onerror   = e => rej(e.target.error);
  });
}

async function getToken(db) {
  return new Promise(res => {
    const tx = db.transaction("meta", "readonly");
    const r  = tx.objectStore("meta").get("token");
    r.onsuccess = e => res(e.target.result?.value || null);
    r.onerror   = () => res(null);
  });
}

async function flushQueue() {
  const db    = await openDB();
  const token = await getToken(db);
  if (!token) return 0;

  const ops = await new Promise((res, rej) => {
    const tx = db.transaction("ops", "readonly");
    const r  = tx.objectStore("ops").getAll();
    r.onsuccess = e => res(e.target.result);
    r.onerror   = e => rej(e.target.error);
  });

  if (!ops.length) return 0;

  // Send all queued ops to the batch sync endpoint
  try {
    const r = await fetch("/api/sync", {
      method:  "POST",
      headers: {
        "Content-Type":  "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ operations: ops.map(o => o.op) }),
    });
    if (r.ok) {
      const { results } = await r.json();
      const tx = db.transaction("ops", "readwrite");
      const store = tx.objectStore("ops");
      // Only delete successfully synced ops
      ops.forEach((o, i) => { if (results?.[i]?.ok) store.delete(o.id); });
      return results?.filter(r => r.ok).length || 0;
    }
  } catch {}
  return 0;
}
