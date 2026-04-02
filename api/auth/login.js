const { sbFetch } = require("../_supabase");

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

    const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return res.status(500).json({ error: "Missing env vars" });

    const body = await readJson(req);
    const { email, password } = body || {};
    if (!email || !password) return res.status(400).json({ error: "Email and password required" });

    // Supabase Auth token exchange (anon key)
    const r = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: { apikey: SUPABASE_ANON_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await r.json().catch(() => ({}));
    if (!r.ok || data.error) {
      return res.status(401).json({ error: data.error_description || data.error || "Login failed" });
    }

    // Load profile row
    const userId = data?.user?.id;
    if (!userId) return res.status(401).json({ error: "Login failed" });
    const [profile] = await sbFetch(`/profiles?id=eq.${userId}&select=*`, { prefer: "return=representation" }).catch(() => [null]);

    return res.json({
      token: data.access_token,
      refresh_token: data.refresh_token,
      expires_in: data.expires_in,
      user: { ...(data.user || {}), ...(profile || {}) }
    });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Login failed" });
  }
};

