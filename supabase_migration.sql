-- ============================================================
-- Bender Exports — Supabase Migration v2.0.0
-- Run this entire file in Supabase → SQL Editor → Run
-- ============================================================

-- ── Enable UUID extension ─────────────────────────────────
create extension if not exists "uuid-ossp";

-- ── Profiles (extends Supabase auth.users) ────────────────
-- auth.users is managed by Supabase Auth.
-- We store app-specific fields here and join on id = auth.users.id
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  name        text not null,
  email       text not null,
  role        text not null default 'clerk',
  cws_access  text[] default '{}',
  machine_id  text,
  avatar      text,
  active      boolean default true,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- ── CWS Stations ─────────────────────────────────────────
create table if not exists public.cws (
  id         text primary key,
  name       text not null,
  region     text,
  image      text,
  updated_at timestamptz default now()
);

-- ── Farmers ──────────────────────────────────────────────
create table if not exists public.farmers (
  id         text primary key,
  cws_id     text references public.cws(id),
  name       text not null,
  farmer_id  text,
  grp        text,
  balance    bigint default 0,
  phone      text,
  active     boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ── Seasons ───────────────────────────────────────────────
create table if not exists public.seasons (
  id            text primary key,
  name          text,
  start_date    date,
  end_date      date,
  rate_standard integer,
  rate_flotant  integer,
  status        text default 'active',
  created_by    text,
  notes         text,
  closed_at     timestamptz,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- ── Station Seasons ───────────────────────────────────────
create table if not exists public.station_seasons (
  id         text primary key,
  season_id  text references public.seasons(id),
  cws_id     text references public.cws(id),
  start_date date,
  end_date   date,
  status     text default 'active',
  updated_at timestamptz default now()
);

-- ── Cherry Purchases ──────────────────────────────────────
create table if not exists public.cherry (
  id               text primary key,
  cws_id           text references public.cws(id),
  farmer_id        text references public.farmers(id),
  date             date,
  gnr_number       text unique,
  standard_kg      numeric,
  flotant_kg       numeric,
  total_kg         numeric,
  rate_standard    integer,
  rate_flotant     integer,
  payment_standard bigint,
  payment_flotant  bigint,
  total_paid       bigint,
  avg_rate         numeric,
  payment_method   text,
  status           text default 'pending',
  by_user          text,
  paid_by          text,
  paid_at          timestamptz,
  notes            text,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

-- ── Cashbook ─────────────────────────────────────────────
create table if not exists public.cashbook (
  id          text primary key,
  cws_id      text references public.cws(id),
  date        date,
  type        text,
  category    text,
  description text,
  amount      bigint,
  balance     bigint,
  ref         text,
  by_user     text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- ── Bank Transactions ─────────────────────────────────────
create table if not exists public.bank_transactions (
  id          text primary key,
  cws_id      text references public.cws(id),
  date        date,
  type        text,
  description text,
  amount      bigint,
  balance     bigint,
  ref         text,
  by_user     text,
  updated_at  timestamptz default now()
);

-- ── Expenses ─────────────────────────────────────────────
create table if not exists public.expenses (
  id           text primary key,
  cws_id       text references public.cws(id),
  date         date,
  category     text,
  description  text,
  amount       bigint,
  capitalizable boolean default true,   -- renamed from 'exploitable'
  status       text default 'pending',
  by_user      text,
  updated_at   timestamptz default now()
);

-- ── Debts ────────────────────────────────────────────────
create table if not exists public.debts (
  id          text primary key,
  cws_id      text references public.cws(id),
  date        date,
  type        text,
  party       text,
  description text,
  amount      bigint,
  balance     bigint,
  status      text,
  updated_at  timestamptz default now()
);

-- ── Coffee Stock ──────────────────────────────────────────
create table if not exists public.stock (
  id               text primary key,
  cws_id           text references public.cws(id),
  date             date,
  description      text,
  grade            text,
  tonnes_in        numeric,
  tonnes_out       numeric default 0,
  tonnes_balance   numeric,
  unit_cost        bigint,
  total_value      bigint,
  valuation_method text,
  updated_at       timestamptz default now()
);

-- ── Fund Requests ─────────────────────────────────────────
create table if not exists public.fund_requests (
  id              text primary key,
  cws_id          text references public.cws(id),
  requested_by    text,
  amount          bigint,
  reason          text,
  status          text default 'pending_verification',
  requested_at    timestamptz default now(),
  verified_by     text,
  verified_at     timestamptz,
  approved_by     text,
  approved_at     timestamptz,
  transfer_method text,
  transfer_ref    text,
  notes           text,
  updated_at      timestamptz default now()
);

-- ── Warehouse Stock ───────────────────────────────────────
create table if not exists public.warehouse_stock (
  id                text primary key,
  from_cws_id       text references public.cws(id),
  sent_by           text,
  date              date,
  grade             text,
  tonnes            numeric,
  lot_number        text,
  gnr_refs          text,
  transport_details text,
  status            text default 'pending',
  confirmed_by      text,
  confirmed_at      timestamptz,
  notes             text,
  updated_at        timestamptz default now()
);

-- ── Construction Projects ─────────────────────────────────
create table if not exists public.projects (
  id          text primary key,
  name        text,
  client      text,
  budget      bigint,
  start_date  date,
  end_date    date,
  status      text default 'planning',
  description text,
  created_by  text,
  updated_at  timestamptz default now()
);

create table if not exists public.project_costs (
  id          text primary key,
  project_id  text references public.projects(id),
  date        date,
  category    text,
  description text,
  amount      bigint,
  by_user     text,
  updated_at  timestamptz default now()
);

create table if not exists public.milestones (
  id             text primary key,
  project_id     text references public.projects(id),
  title          text,
  target_date    date,
  completed_date date,
  status         text default 'pending',
  updated_at     timestamptz default now()
);

create table if not exists public.contractors (
  id             text primary key,
  project_id     text references public.projects(id),
  name           text,
  role           text,
  phone          text,
  contract_value bigint,
  status         text default 'active',
  updated_at     timestamptz default now()
);

-- ── Machinery ────────────────────────────────────────────
create table if not exists public.machines (
  id           text primary key,
  name         text,
  type         text,
  plate        text,
  status       text default 'available',
  driver_id    text,
  assistant_id text,
  updated_at   timestamptz default now()
);

create table if not exists public.assistants (
  id         text primary key,
  name       text,
  machine_id text references public.machines(id),
  phone      text,
  updated_at timestamptz default now()
);

create table if not exists public.tasks (
  id          text primary key,
  machine_id  text references public.machines(id),
  customer    text,
  province    text,
  district    text,
  sector      text,
  cell        text,
  village     text,
  start_date  date,
  end_date    date,
  hourly_rate bigint,
  status      text default 'active',
  total_hours numeric default 0,
  notes       text,
  updated_at  timestamptz default now()
);

create table if not exists public.mach_tx (
  id         text primary key,
  machine_id text references public.machines(id),
  date       date,
  type       text,
  category   text,
  amount     bigint,
  description text,
  status     text default 'synced',
  updated_at timestamptz default now()
);

create table if not exists public.driver_logs (
  id            text primary key,
  driver_id     text,
  machine_id    text references public.machines(id),
  date          date,
  hours         numeric,
  fuel_received numeric,
  task_location text,
  condition     text,
  comments      text,
  status        text default 'submitted',
  updated_at    timestamptz default now()
);

create table if not exists public.leaves (
  id        text primary key,
  driver_id text,
  type      text,
  date      date,
  reason    text,
  status    text default 'pending',
  updated_at timestamptz default now()
);

-- ── System Config ─────────────────────────────────────────
create table if not exists public.system_config (
  key        text primary key,
  value      text,
  updated_at timestamptz default now()
);

-- ── Audit Log ────────────────────────────────────────────
create table if not exists public.audit_log (
  id         bigint generated always as identity primary key,
  user_id    uuid,
  action     text,
  table_name text,
  record_id  text,
  payload    jsonb,
  created_at timestamptz default now()
);

-- ── updated_at trigger (apply to all tables) ─────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

do $$ declare t text;
begin for t in select unnest(array[
  'profiles','cws','farmers','seasons','station_seasons','cherry',
  'cashbook','bank_transactions','expenses','debts','stock',
  'fund_requests','warehouse_stock','projects','project_costs',
  'milestones','contractors','machines','assistants','tasks',
  'mach_tx','driver_logs','leaves','system_config'
]) loop
  execute format($f$
    drop trigger if exists set_updated_at on public.%I;
    create trigger set_updated_at before update on public.%I
    for each row execute procedure public.set_updated_at();
  $f$, t, t);
end loop; end $$;

-- ── Row Level Security ────────────────────────────────────
-- Enable RLS on every table. The server uses the service-role key
-- which bypasses RLS. The frontend uses the anon key with RLS enforced.

alter table public.profiles         enable row level security;
alter table public.cws              enable row level security;
alter table public.farmers          enable row level security;
alter table public.seasons          enable row level security;
alter table public.station_seasons  enable row level security;
alter table public.cherry           enable row level security;
alter table public.cashbook         enable row level security;
alter table public.bank_transactions enable row level security;
alter table public.expenses         enable row level security;
alter table public.debts            enable row level security;
alter table public.stock            enable row level security;
alter table public.fund_requests    enable row level security;
alter table public.warehouse_stock  enable row level security;
alter table public.projects         enable row level security;
alter table public.project_costs    enable row level security;
alter table public.milestones       enable row level security;
alter table public.contractors      enable row level security;
alter table public.machines         enable row level security;
alter table public.assistants       enable row level security;
alter table public.tasks            enable row level security;
alter table public.mach_tx          enable row level security;
alter table public.driver_logs      enable row level security;
alter table public.leaves           enable row level security;
alter table public.system_config    enable row level security;
alter table public.audit_log        enable row level security;

-- Authenticated users can read all operational tables
-- (your server enforces role-based logic on top of this)
create policy "authenticated_read" on public.cws              for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.farmers          for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.seasons          for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.station_seasons  for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.cherry           for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.cashbook         for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.bank_transactions for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.expenses         for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.debts            for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.stock            for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.fund_requests    for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.warehouse_stock  for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.projects         for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.project_costs    for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.milestones       for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.contractors      for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.machines         for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.assistants       for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.tasks            for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.mach_tx          for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.driver_logs      for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.leaves           for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.system_config    for select using (auth.role() = 'authenticated');
-- Profiles: users can read their own, admins can read all
create policy "own_profile_read" on public.profiles for select using (auth.uid() = id);

-- ── Realtime ─────────────────────────────────────────────
-- Enable realtime publication for live sync (replaces offline queue polling)
-- Run after creating tables:
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime for table
    public.cherry, public.cashbook, public.fund_requests,
    public.warehouse_stock, public.farmers, public.machines,
    public.driver_logs, public.leaves, public.mach_tx,
    public.expenses, public.debts, public.stock;
commit;
