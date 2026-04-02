const { authFromRequest, sbFetch } = require("../_supabase");

module.exports = async (req, res) => {
  try {
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

    const user = await authFromRequest(req);
    const [profile] = await sbFetch(`/profiles?id=eq.${user.id}&select=*`, { prefer: "return=representation" });

    if (!profile) return res.status(404).json({ error: "Profile not found" });
    return res.json(profile);
  } catch (e) {
    const status = e?.status || 401;
    return res.status(status).json({ error: e.message || "Auth failed" });
  }
};

