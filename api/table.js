const { TABLES, authFromRequest, sbFetch } = require("./_supabase");

module.exports = async (req, res) => {
  try {
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

    await authFromRequest(req);

    const table = req.query?.table;
    const since = req.query?.since;
    if (!table || typeof table !== "string") return res.status(400).json({ error: "table query param required" });
    if (!TABLES.includes(table)) return res.status(400).json({ error: "Unknown table" });

    const filter = since ? `&updated_at=gte.${encodeURIComponent(since)}` : "";
    const rows = await sbFetch(`/${table}?order=updated_at${filter}`, { prefer: "return=representation" });
    return res.json(rows);
  } catch (e) {
    const status = e?.status || 401;
    return res.status(status).json({ error: e?.message || "Failed" });
  }
};

