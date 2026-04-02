const { authFromRequest, sbFetch } = require("./_supabase");

module.exports = async (req, res) => {
  try {
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

    await authFromRequest(req);

    const rows = await sbFetch(
      "/profiles?select=id,name,email,role,cws_access,machine_id,avatar,active,created_at,updated_at&order=name",
      { prefer: "return=representation" }
    );
    return res.json(rows);
  } catch (e) {
    const status = e?.status || 401;
    return res.status(status).json({ error: e.message || "Failed" });
  }
};

