# Bender Exports — Full System Guide (v2.0.0)

## What's in this folder

```
bender-exports/
├── public/                  ← Frontend (served as static files by Express)
│   ├── index.html           ← App entry point + Supabase client bootstrap
│   ├── app.js               ← Full React PWA — mobile-responsive
│   ├── sw.js                ← Service worker — offline cache + queue flush
│   ├── manifest.json        ← PWA manifest
│   └── icons/
│       ├── icon-192.svg
│       └── icon-512.svg
├── server/
│   └── index.js             ← Express API — proxies Supabase with service key
├── supabase_migration.sql   ← Run ONCE in Supabase SQL Editor
├── package.json
├── .env.example             ← Copy to .env and fill in
├── .gitignore
└── README.md
```

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 (no build step — CDN UMD) + Recharts |
| Backend | Node.js + Express |
| Database | Supabase PostgreSQL (hosted, AES-256 encrypted at rest) |
| Auth | Supabase Auth (email/password, JWT) |
| Realtime | Supabase Realtime (WebSocket) |
| Offline | Service Worker + IndexedDB queue |
| Deploy | Any Node host — Railway, Render, Fly.io, VPS |

---

## First-time setup — 5 steps

### Step 1 — Create a Supabase project
1. Go to [supabase.com](https://supabase.com) → New Project
2. Note your **Project URL**, **anon key**, and **service_role key**
   (Dashboard → Project Settings → API)

### Step 2 — Run the database migration
1. Open Supabase Dashboard → **SQL Editor**
2. Paste the entire contents of `supabase_migration.sql`
3. Click **Run** — this creates all 24 tables, RLS policies, Realtime, and triggers

### Step 3 — Configure environment
```bash
cp .env.example .env
# Open .env and fill in SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_KEY
```

### Step 4 — Point the frontend at Supabase
Open `public/index.html` and replace these two lines:
```js
window.__SUPABASE_URL  = "REPLACE_WITH_YOUR_SUPABASE_URL";
window.__SUPABASE_ANON = "REPLACE_WITH_YOUR_SUPABASE_ANON_KEY";
```
with your actual values. These are the **anon** (public) key — safe in the browser.

### Step 5 — Install & start
```bash
npm install
node server/index.js
# Open http://localhost:3001
```

---

## Seed initial data
On first login, the app automatically seeds initial CWS stations, farmers,
demo users, and sample transactions from the hardcoded `INIT_*` arrays in
`app.js`. This only runs once (tracked by `db:seeded` in browser storage).

To re-seed: open browser DevTools → Application → Storage → Clear All, then reload.

---

## Running in production

### Using PM2 (recommended)
```bash
npm install -g pm2
pm2 start server/index.js --name bender
pm2 save
pm2 startup   # auto-start on reboot
```

### Using systemd
```ini
# /etc/systemd/system/bender.service
[Unit]
Description=Bender Exports
After=network.target

[Service]
WorkingDirectory=/opt/bender-exports
ExecStart=/usr/bin/node server/index.js
Restart=always
EnvironmentFile=/opt/bender-exports/.env

[Install]
WantedBy=multi-user.target
```
```bash
systemctl enable bender && systemctl start bender
```

---

## HTTPS (required for PWA install on mobile)

### Nginx reverse proxy
```nginx
server {
    listen 443 ssl;
    server_name yourdomain.com;
    ssl_certificate     /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com
```

---

## Cloud deploy (zero-config)

### Railway
1. Push this folder to a GitHub repo
2. railway.app → New Project → Deploy from GitHub
3. Add env vars in Railway dashboard
4. Done — Railway detects Node.js and runs `npm start`

### Render
1. Push to GitHub
2. render.com → New Web Service → Connect repo
3. Build: `npm install` · Start: `node server/index.js`
4. Add env vars

---

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | No | Server port (default 3001) |
| `SUPABASE_URL` | **Yes** | Your Supabase project URL |
| `SUPABASE_ANON_KEY` | **Yes** | Public key — also used in browser |
| `SUPABASE_SERVICE_KEY` | **Yes** | Secret key — server only, bypasses RLS |
| `NODE_ENV` | No | Set to `production` on server |

---

## Security model

| Concern | Solution |
|---------|---------|
| Data encryption at rest | Supabase AES-256 (automatic) |
| Data encryption in transit | TLS (Supabase enforces HTTPS) |
| Passwords | Managed by Supabase Auth — never stored in your code |
| Row-level access | RLS policies on every table |
| Server API auth | Supabase JWT validated on every request |
| Service key exposure | Server-side only — never sent to browser |
| Rate limiting | express-rate-limit on `/api/auth` (20 req/15min) |

---

## API reference

All endpoints require `Authorization: Bearer <supabase_token>` except:
- `POST /api/auth/login`
- `POST /api/auth/signup`
- `GET  /api/health`

### Auth
| Method | Path | Body | Returns |
|--------|------|------|---------|
| POST | `/api/auth/login` | `{email, password}` | `{token, refresh_token, user}` |
| POST | `/api/auth/signup` | `{name, email, password, role?, cwsAccess?}` | `{ok, id}` |
| GET  | `/api/auth/me` | — | user profile |
| POST | `/api/auth/refresh` | `{refresh_token}` | `{token, refresh_token}` |

### Sync
| Method | Path | Body | Returns |
|--------|------|------|---------|
| POST | `/api/sync` | `{operations: [{table, method, id, data}]}` | `{ok, synced, results}` |
| GET  | `/api/pull?since=ISO` | — | `{delta: {table: rows[]}}` |

### Resources (all support GET / GET :id / POST / PUT :id / DELETE :id)
`/api/cws` · `/api/farmers` · `/api/seasons` · `/api/station-seasons`
`/api/cherry` · `/api/cashbook` · `/api/bank-transactions` · `/api/expenses`
`/api/debts` · `/api/stock` · `/api/fund-requests` · `/api/warehouse-stock`
`/api/projects` · `/api/project-costs` · `/api/milestones` · `/api/contractors`
`/api/machines` · `/api/assistants` · `/api/tasks` · `/api/mach-tx`
`/api/driver-logs` · `/api/leaves`

### Admin
| Method | Path | Notes |
|--------|------|-------|
| GET/POST | `/api/users` | POST requires sudo/admin/md role |
| PUT | `/api/users/:id` | Self or admin |
| GET/PUT | `/api/system` | PUT requires sudo |
| GET | `/api/audit` | Requires sudo/md/admin |
| GET | `/api/health` | Public |

---

## PWA features
- Installs to home screen (Android / iOS / Desktop)
- Works fully offline after first load
- All data entries while offline are queued in IndexedDB
- Auth token passed to service worker on login for authenticated queue replay
- Auto-syncs to Supabase when connection returns
- Supabase Realtime broadcasts changes to all connected clients instantly

---

## User roles

| Role | Access |
|------|--------|
| `sudo` | Full system access + system config |
| `md` | Managing Director — approve fund requests, all reports |
| `admin` | HQ admin — manage users, all data |
| `hq_finance` | HQ finance — bank transactions, fund transfers |
| `hq_accountant` | HQ accountant — all reports, read-only most data |
| `hq_ops` | HQ operations — verify fund requests, warehouse |
| `station_manager` | Station manager — full access to their CWS |
| `cashier` | Cashier — confirm GNR payments, cashbook |
| `clerk` | Field clerk — cherry entry only |
| `driver` | Driver — daily logs, leave requests |
