const { authFromRequest, sbFetch } = require("./_supabase");

async function readJson(req) {
  if (req.body && typeof req.body === "object") return req.body;
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

module.exports = async (req, res) => {
  try {
    if (req.method !== "GET" && req.method !== "PUT") return res.status(405).json({ error: "Method not allowed" });

    const user = await authFromRequest(req);

    if (req.method === "GET") {
      const rows = await sbFetch("/system_config?select=key,value", { prefer: "return=representation" });
      const cfg = {};
      rows.forEach((r) => {
        try {
          cfg[r.key] = JSON.parse(r.value);
        } catch {
          cfg[r.key] = r.value;
        }
      });
      return res.json(cfg);
    }

    // PUT
    if (!["sudo"].includes(user.role)) return res.status(403).json({ error: "Forbidden" });

    const body = await readJson(req);
    const entries = Object.entries(body || {});
    const rows = entries.map(([key, value]) => ({
      key,
      value: JSON.stringify(value),
      updated_at: new Date().toISOString()
    }));

    await sbFetch("/system_config", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body: JSON.stringify(rows)
    });

    return res.json({ ok: true });
  } catch (e) {
    const status = e?.status || 500;
    return res.status(status).json({ error: e.message || "System error" });
  }
};

