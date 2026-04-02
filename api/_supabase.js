const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY; // server only
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

function mustEnv(name, value) {
  if (!value) {
    const msg = `[server] Missing required env var: ${name}`;
    // eslint-disable-next-line no-console
    console.error(msg);
    throw new Error(msg);
  }
  return value;
}

mustEnv("SUPABASE_URL", SUPABASE_URL);
mustEnv("SUPABASE_SERVICE_KEY", SUPABASE_SERVICE_KEY);
mustEnv("SUPABASE_ANON_KEY", SUPABASE_ANON_KEY);

const TABLES = [
  "cws",
  "farmers",
  "seasons",
  "station_seasons",
  "cherry",
  "cashbook",
  "bank_transactions",
  "expenses",
  "debts",
  "stock",
  "fund_requests",
  "warehouse_stock",
  "projects",
  "project_costs",
  "milestones",
  "contractors",
  "machines",
  "assistants",
  "tasks",
  "mach_tx",
  "driver_logs",
  "leaves"
];

async function sbFetch(path, opts = {}) {
  const url = `${SUPABASE_URL}/rest/v1${path}`;
  const res = await fetch(url, {
    method: opts.method || "GET",
    ...opts,
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      Prefer: opts.prefer || "return=representation",
      ...(opts.headers || {})
    }
  });

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }
  if (!res.ok) throw new Error(JSON.stringify({ status: res.status, message: data }));
  return data;
}

async function authFromRequest(req) {
  const h = req.headers?.authorization || "";
  if (!h || !h.startsWith("Bearer ")) {
    const err = new Error("No token");
    err.status = 401;
    throw err;
  }
  const token = h.slice(7);

  const sbUserRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${token}`
    }
  });
  const sbUserText = await sbUserRes.text();
  let sbUser;
  try {
    sbUser = JSON.parse(sbUserText);
  } catch {
    sbUser = null;
  }
  if (!sbUser?.id) {
    const err = new Error("Invalid or expired token");
    err.status = 401;
    throw err;
  }

  return {
    id: sbUser.id,
    role: sbUser.user_metadata?.role || "clerk",
    email: sbUser.email,
    raw: sbUser
  };
}

async function logAudit(userId, action, table, recordId, payload) {
  try {
    await sbFetch("/audit_log", {
      method: "POST",
      prefer: "return=minimal",
      body: JSON.stringify({
        user_id: userId,
        action,
        table_name: table,
        record_id: recordId,
        payload: payload ? JSON.stringify(payload) : null
      })
    });
  } catch (e) {
    // audit failures must not break main request
  }
}

module.exports = {
  TABLES,
  sbFetch,
  authFromRequest,
  logAudit
};

