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

    const {
      SUPABASE_URL,
      SUPABASE_SERVICE_KEY,
    } = process.env;
    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) return res.status(500).json({ error: "Missing env vars" });

    const body = await readJson(req);
    const {
      name,
      email,
      password,
      role = "clerk",
      cwsAccess = [],
      avatar,
      machineId
    } = body || {};

    if (!name || !email || !password) return res.status(400).json({ error: "name, email, password required" });

    // Create auth user via Supabase Admin API (service-role)
    const authUserRes = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        email_confirm: true,
        user_metadata: {
          name,
          role,
          avatar: avatar || name.slice(0, 2).toUpperCase()
        }
      })
    });

    const authUser = await authUserRes.json().catch(() => ({}));
    if (!authUserRes.ok) return res.status(400).json({ error: authUser?.message || authUser?.msg || authUserRes.statusText || "Signup failed" });
    if (!authUser?.id) return res.status(400).json({ error: "Auth user creation failed" });

    // Insert profile row
    await sbFetch("/profiles", {
      method: "POST",
      body: JSON.stringify({
        id: authUser.id,
        name,
        email,
        role,
        cws_access: cwsAccess || [],
        machine_id: machineId || null,
        avatar: avatar || name.slice(0, 2).toUpperCase(),
        active: true
      }),
      prefer: "return=representation"
    }).catch((e) => {
      // Profile might already exist; surface as 200 for demo flow.
      // eslint-disable-next-line no-console
      console.warn("[signup] profile insert failed:", e?.message || e);
    });

    return res.status(201).json({ ok: true, id: authUser.id });
  } catch (e) {
    return res.status(500).json({ error: e?.message || "Signup failed" });
  }
};

