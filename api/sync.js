const { TABLES, authFromRequest, sbFetch, logAudit } = require("./_supabase");

async function readJson(req) {
  if (req.body && typeof req.body === "object") return req.body;
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const user = await authFromRequest(req);
    const body = await readJson(req);
    const operations = body?.operations;
    if (!Array.isArray(operations)) return res.status(400).json({ error: "operations[] required" });

    const results = [];
    for (const op of operations) {
      const { table, method, id, data } = op || {};

      if (!TABLES.includes(table)) {
        results.push({ id, ok: false, error: "Unknown table" });
        continue;
      }

      try {
        if (method === "DELETE") {
          await sbFetch(`/${table}?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" });
          await logAudit(user.id, method, table, id, null);
          results.push({ id, ok: true });
          continue;
        }

        const now = new Date().toISOString();
        const payload = { ...(data || {}), updated_at: now };
        await sbFetch(`/${table}`, {
          method: "POST",
          prefer: "resolution=merge-duplicates,return=minimal",
          body: JSON.stringify(payload)
        });
        await logAudit(user.id, method, table, id, data || null);
        results.push({ id, ok: true });
      } catch (e) {
        results.push({ id, ok: false, error: e?.message || String(e) });
      }
    }

    const synced = results.filter((r) => r.ok).length;
    return res.json({ ok: true, synced, results });
  } catch (e) {
    const status = e?.status || 500;
    return res.status(status).json({ error: e?.message || "Sync error" });
  }
};

