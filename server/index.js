/**
 * Bender Exports Ltd. — Production Server (Supabase Edition)
 *
 * Auth   → Supabase Auth (email/password, JWT issued by Supabase)
 * DB     → Supabase PostgreSQL (via REST API — no native driver needed)
 * Sync   → Supabase Realtime (replaces offline queue)
 * Files  → Supabase Storage  (replaces local icon serving)
 *
 * Setup:
 *   npm install
 *   cp .env.example .env   ← fill in your Supabase credentials
 *   node server/index.js
 */
"use strict";

require("dotenv").config();
const express   = require("express");
const cors      = require("cors");
const path      = require("path");

let helmet, compression, rateLimit;
try { helmet      = require("helmet");             } catch {}
try { compression = require("compression");        } catch {}
try { rateLimit   = require("express-rate-limit"); } catch {}

// ── Config ────────────────────────────────────────────────────────────
const PORT           = process.env.PORT            || 3001;
const PUBLIC_DIR     = path.join(__dirname, "..", "public");
const SUPABASE_URL   = process.env.SUPABASE_URL;
const SUPABASE_KEY   = process.env.SUPABASE_SERVICE_KEY; // service-role key (server only)
const ANON_KEY       = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("[ERROR] SUPABASE_URL and SUPABASE_SERVICE_KEY are required.");
  process.exit(1);
}

// ── Supabase helpers ──────────────────────────────────────────────────
// We call Supabase REST directly — no SDK needed on the server.
// The service-role key bypasses Row Level Security for server-side ops.

async function sbFetch(path, opts = {}) {
  const url = `${SUPABASE_URL}/rest/v1${path}`;
  const res  = await fetch(url, {
    ...opts,
    headers: {
      "apikey":        SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type":  "application/json",
      "Prefer":        opts.prefer || "return=representation",
      ...(opts.headers || {}),
    },
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  if (!res.ok) throw { status: res.status, message: data?.message || data };
  return data;
}

// Supabase Auth Admin API
async function sbAuth(path, body, method = "POST") {
  const res = await fetch(`${SUPABASE_URL}/auth/v1${path}`, {
    method,
    headers: {
      "apikey":        SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type":  "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw { status: res.status, message: data?.msg || data?.message || "Auth error" };
  return data;
}

// ── Express ───────────────────────────────────────────────────────────
const app = express();
if (compression) app.use(compression());
if (helmet)      app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json({ limit: "10mb" }));

if (rateLimit) {
  app.use("/api/auth", rateLimit({
    windowMs: 15 * 60 * 1000, max: 20,
    message: { error: "Too many attempts, try again in 15 minutes" },
  }));
}

// ── Auth Middleware ───────────────────────────────────────────────────
// Verifies the Supabase JWT and attaches user metadata to req.user.
// The token is issued by Supabase on login — we validate it by calling
// /auth/v1/user which requires a valid Bearer token.
async function auth(req, res, next) {
  const h = req.headers.authorization;
  if (!h?.startsWith("Bearer ")) return res.status(401).json({ error: "No token" });
  const token = h.slice(7);
  try {
    const sbUser = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: {
        "apikey":        ANON_KEY,
        "Authorization": `Bearer ${token}`,
      },
    }).then(r => r.json());
    if (!sbUser?.id) return res.status(401).json({ error: "Invalid or expired token" });
    // Attach Supabase auth user + our app metadata stored in user_metadata
    req.user = {
      id:   sbUser.id,
      role: sbUser.user_metadata?.role || "clerk",
      email: sbUser.email,
    };
    next();
  } catch {
    res.status(401).json({ error: "Token validation failed" });
  }
}

function requireRoles(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user?.role))
      return res.status(403).json({ error: "Forbidden" });
    next();
  };
}

// ── Auth Routes ───────────────────────────────────────────────────────

// Login — delegates entirely to Supabase Auth
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password)
    return res.status(400).json({ error: "Email and password required" });
  try {
    const data = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: { "apikey": ANON_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then(r => r.json());

    if (data.error) return res.status(401).json({ error: data.error_description || data.error });

    // Fetch the full user profile from our profiles table
    const [profile] = await sbFetch(`/profiles?id=eq.${data.user.id}&select=*`);
    res.json({
      token:         data.access_token,
      refresh_token: data.refresh_token,
      expires_in:    data.expires_in,
      user:          { ...data.user, ...profile },
    });
  } catch (e) {
    res.status(500).json({ error: e.message || "Login failed" });
  }
});

// Signup — creates Supabase auth user + profile row
app.post("/api/auth/signup", async (req, res) => {
  const { name, email, password, role = "clerk", cwsAccess = [], avatar, machineId } = req.body || {};
  if (!name || !email || !password)
    return res.status(400).json({ error: "name, email, password required" });
  try {
    // Create auth user via Admin API (sets metadata for role)
    const authUser = await sbAuth("/admin/users", {
      email,
      password,
      email_confirm: true,
      user_metadata: { name, role, avatar: avatar || name.slice(0, 2).toUpperCase() },
    });
    // Insert profile row
    await sbFetch("/profiles", {
      method: "POST",
      body: JSON.stringify({
        id:         authUser.id,
        name,
        email,
        role,
        cws_access: cwsAccess,
        machine_id: machineId || null,
        avatar:     avatar || name.slice(0, 2).toUpperCase(),
        active:     true,
      }),
    });
    res.status(201).json({ ok: true, id: authUser.id });
  } catch (e) {
    res.status(400).json({ error: e.message || "Signup failed" });
  }
});

// Get current user
app.get("/api/auth/me", auth, async (req, res) => {
  try {
    const [profile] = await sbFetch(`/profiles?id=eq.${req.user.id}&select=*`);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Refresh token — client sends refresh_token, we get a new access_token
app.post("/api/auth/refresh", async (req, res) => {
  const { refresh_token } = req.body || {};
  if (!refresh_token) return res.status(400).json({ error: "refresh_token required" });
  try {
    const data = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
      method: "POST",
      headers: { "apikey": ANON_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token }),
    }).then(r => r.json());
    if (data.error) return res.status(401).json({ error: data.error_description });
    res.json({ token: data.access_token, refresh_token: data.refresh_token, expires_in: data.expires_in });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── Users ─────────────────────────────────────────────────────────────
app.get("/api/users", auth, async (req, res) => {
  try {
    const rows = await sbFetch("/profiles?select=id,name,email,role,cws_access,machine_id,avatar,created_at,updated_at,active&order=name");
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post("/api/users", auth, requireRoles("sudo","admin","md"), async (req, res) => {
  const { name, email, password, role, cwsAccess, machineId, avatar } = req.body || {};
  try {
    const authUser = await sbAuth("/admin/users", {
      email, password: password || "changeme123",
      email_confirm: true,
      user_metadata: { name, role, avatar: avatar || (name||"?").slice(0,2).toUpperCase() },
    });
    await sbFetch("/profiles", {
      method: "POST",
      body: JSON.stringify({
        id: authUser.id, name, email, role: role || "clerk",
        cws_access: cwsAccess || [], machine_id: machineId || null,
        avatar: avatar || (name||"?").slice(0,2).toUpperCase(), active: true,
      }),
    });
    res.json({ ok: true, id: authUser.id });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

app.put("/api/users/:id", auth, async (req, res) => {
  if (req.user.id !== req.params.id && !["sudo","admin","md"].includes(req.user.role))
    return res.status(403).json({ error: "Forbidden" });
  const { name, role, cwsAccess, machineId, avatar, active } = req.body || {};
  try {
    await sbFetch(`/profiles?id=eq.${req.params.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...(name       != null && { name }),
        ...(role       != null && { role }),
        ...(cwsAccess  != null && { cws_access: cwsAccess }),
        ...(machineId  != null && { machine_id: machineId }),
        ...(avatar     != null && { avatar }),
        ...(active     != null && { active }),
        updated_at: new Date().toISOString(),
      }),
    });
    res.json({ ok: true });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

// ── Generic CRUD (all 20+ resource tables) ────────────────────────────
// Each table maps directly to a Supabase table. We proxy the request
// so the frontend doesn't need the service-role key.
const TABLES = [
  "cws","farmers","seasons","station_seasons","cherry","cashbook",
  "bank_transactions","expenses","debts","stock","fund_requests",
  "warehouse_stock","projects","project_costs","milestones","contractors",
  "machines","assistants","tasks","mach_tx","driver_logs","leaves",
];

// ── Generic table loader (for Vercel /api/table) ─────────────────────
// Frontend uses this endpoint to load all rows for a given table.
app.get("/api/table", auth, async (req, res) => {
  try {
    const { table, since } = req.query || {};
    if (!TABLES.includes(table)) return res.status(400).json({ error: "Unknown table" });
    const filter = since ? `&updated_at=gte.${encodeURIComponent(since)}` : "";
    const rows = await sbFetch(`/${table}?order=updated_at${filter}`);
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

TABLES.forEach(table => {
  const route = `/api/${table.replace(/_/g, "-")}`;

  // GET all (with optional ?since= delta filter)
  app.get(route, auth, async (req, res) => {
    try {
      const { since } = req.query;
      const filter = since ? `&updated_at=gte.${encodeURIComponent(since)}` : "";
      const rows = await sbFetch(`/${table}?order=updated_at${filter}`);
      res.json(rows);
    } catch (e) { res.status(500).json({ error: e.message }); }
  });

  // GET by id
  app.get(`${route}/:id`, auth, async (req, res) => {
    try {
      const rows = await sbFetch(`/${table}?id=eq.${req.params.id}`);
      if (!rows.length) return res.status(404).json({ error: "Not found" });
      res.json(rows[0]);
    } catch (e) { res.status(500).json({ error: e.message }); }
  });

  // POST (upsert)
  app.post(route, auth, async (req, res) => {
    try {
      const data = { ...req.body, updated_at: new Date().toISOString() };
      if (!data.id) return res.status(400).json({ error: "id required" });
      await sbFetch(`/${table}`, {
        method:  "POST",
        prefer:  "resolution=merge-duplicates,return=minimal",
        body:    JSON.stringify(data),
      });
      await logAudit(req.user.id, "SAVE", table, data.id, data);
      res.json({ ok: true, id: data.id });
    } catch (e) { res.status(400).json({ error: e.message }); }
  });

  // PATCH
  app.put(`${route}/:id`, auth, async (req, res) => {
    try {
      const data = { ...req.body, updated_at: new Date().toISOString() };
      delete data.id;
      await sbFetch(`/${table}?id=eq.${req.params.id}`, {
        method: "PATCH",
        body:   JSON.stringify(data),
      });
      await logAudit(req.user.id, "UPDATE", table, req.params.id, data);
      res.json({ ok: true });
    } catch (e) { res.status(400).json({ error: e.message }); }
  });

  // DELETE
  app.delete(`${route}/:id`, auth, async (req, res) => {
    try {
      await sbFetch(`/${table}?id=eq.${req.params.id}`, { method: "DELETE" });
      await logAudit(req.user.id, "DELETE", table, req.params.id, null);
      res.json({ ok: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
  });
});

// ── Batch Sync (offline mutations) ───────────────────────────────────
// Replaces the old SQLite transaction. Each op is upserted into Supabase.
// Supabase Realtime will broadcast the changes to other connected clients.
app.post("/api/sync", auth, async (req, res) => {
  const { operations } = req.body || {};
  if (!Array.isArray(operations))
    return res.status(400).json({ error: "operations[] required" });

  const results = [];
  for (const op of operations) {
    const { table, method, id, data } = op;
    if (!TABLES.includes(table)) {
      results.push({ id, ok: false, error: "Unknown table" });
      continue;
    }
    try {
      if (method === "DELETE") {
        await sbFetch(`/${table}?id=eq.${id}`, { method: "DELETE" });
      } else {
        await sbFetch(`/${table}`, {
          method:  "POST",
          prefer:  "resolution=merge-duplicates,return=minimal",
          body:    JSON.stringify({ ...data, updated_at: new Date().toISOString() }),
        });
      }
      await logAudit(req.user.id, method, table, id, data);
      results.push({ id, ok: true });
    } catch (e) {
      results.push({ id, ok: false, error: e.message || String(e) });
    }
  }
  res.json({ ok: true, synced: results.filter(r => r.ok).length, results });
});

// ── Delta Pull ────────────────────────────────────────────────────────
app.get("/api/pull", auth, async (req, res) => {
  const since  = req.query.since || "1970-01-01T00:00:00.000Z";
  const delta  = {};
  await Promise.all(TABLES.map(async t => {
    try {
      delta[t] = await sbFetch(`/${t}?updated_at=gte.${encodeURIComponent(since)}&order=updated_at`);
    } catch { delta[t] = []; }
  }));
  res.json({ since, pulledAt: new Date().toISOString(), delta });
});

// ── System Config ─────────────────────────────────────────────────────
app.get("/api/system", auth, async (req, res) => {
  try {
    const rows = await sbFetch("/system_config?select=key,value");
    const cfg  = {};
    rows.forEach(r => { try { cfg[r.key] = JSON.parse(r.value); } catch { cfg[r.key] = r.value; } });
    res.json(cfg);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put("/api/system", auth, requireRoles("sudo"), async (req, res) => {
  try {
    const rows = Object.entries(req.body).map(([key, value]) => ({
      key, value: JSON.stringify(value), updated_at: new Date().toISOString(),
    }));
    await sbFetch("/system_config", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body:   JSON.stringify(rows),
    });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ── Audit Log ─────────────────────────────────────────────────────────
app.get("/api/audit", auth, requireRoles("sudo","md","admin"), async (req, res) => {
  try {
    const { table, limit = 500 } = req.query;
    const filter = table ? `&table_name=eq.${table}` : "";
    const rows = await sbFetch(`/audit_log?order=created_at.desc&limit=${limit}${filter}`);
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

async function logAudit(userId, action, table, recordId, payload) {
  try {
    await sbFetch("/audit_log", {
      method:  "POST",
      prefer:  "return=minimal",
      body:    JSON.stringify({ user_id: userId, action, table_name: table, record_id: recordId, payload: payload ? JSON.stringify(payload) : null }),
    });
  } catch {}
}

// ── Health ────────────────────────────────────────────────────────────
app.get("/api/health", (_, res) => res.json({ ok: true, version: "2.0.0", db: "supabase", time: new Date().toISOString() }));

// ── Serve PWA static files ────────────────────────────────────────────
app.use(express.static(PUBLIC_DIR, {
  setHeaders(res, filePath) {
    if (filePath.endsWith("sw.js") || filePath.endsWith("manifest.json")) {
      res.setHeader("Cache-Control", "no-cache");
      if (filePath.endsWith("sw.js")) res.setHeader("Service-Worker-Allowed", "/");
    } else if (filePath.endsWith(".js")) {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    }
  }
}));

app.get("*", (_, res) => res.sendFile(path.join(PUBLIC_DIR, "index.html")));

// ── Start ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  ╔═══════════════════════════════════╗`);
  console.log(`  ║  Bender Exports — Supabase Ready  ║`);
  console.log(`  ╠═══════════════════════════════════╣`);
  console.log(`  ║  http://localhost:${PORT}             ║`);
  console.log(`  ║  DB: Supabase PostgreSQL           ║`);
  console.log(`  ║  Auth: Supabase Auth               ║`);
  console.log(`  ╚═══════════════════════════════════╝\n`);
});
