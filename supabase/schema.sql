-- Matchy: listas de espera
-- Rode este arquivo no SQL Editor do Supabase (Database > SQL Editor > New query).

create extension if not exists "pgcrypto";

-- MARCAS ---------------------------------------------------------------
create table if not exists public.waitlist_brands (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  brand_name    text not null check (char_length(brand_name) between 2 and 120),
  brand_site    text not null check (char_length(brand_site) between 3 and 200),
  contact_name  text not null check (char_length(contact_name) between 2 and 120),
  contact_role  text not null check (char_length(contact_role) between 2 and 120),
  email         text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 200),
  whatsapp      text check (whatsapp is null or whatsapp ~ '^[0-9]{10,13}$'),
  segment       text not null check (segment in ('maquiagem','skincare','cabelo','perfumaria','outro')),
  plan_interest text not null check (plan_interest in ('essencial','crescimento','escala','indefinido')),
  ugc_volume    text not null check (ugc_volume in ('1-5','6-15','16-30','31-60','60+')),
  consent       boolean not null check (consent = true),
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  landing_page  text,
  source_page   text,
  user_agent    text
);

create unique index if not exists waitlist_brands_email_key on public.waitlist_brands (lower(email));

-- CRIADORAS ------------------------------------------------------------
create table if not exists public.waitlist_creators (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  name            text not null check (char_length(name) between 2 and 120),
  email           text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 200),
  instagram       text not null check (instagram ~ '^[A-Za-z0-9._]{1,30}$'),
  tiktok          text check (tiktok is null or tiktok ~ '^[A-Za-z0-9._]{1,30}$'),
  niche           text not null check (niche in ('maquiagem','skincare','cabelo','lifestyle','outro')),
  followers_range text not null check (followers_range in ('ate-1k','1k-10k','10k-50k','50k-100k','100k+')),
  city            text not null check (char_length(city) between 2 and 120),
  state           char(2) not null,
  consent         boolean not null check (consent = true),
  utm_source      text,
  utm_medium      text,
  utm_campaign    text,
  landing_page    text,
  source_page     text,
  user_agent      text
);

create unique index if not exists waitlist_creators_email_key on public.waitlist_creators (lower(email));

-- RLS: o público só pode inserir. Ninguém lê, edita ou apaga com a chave anon.
-- Para consultar os cadastros, use o Table Editor do painel ou a service role.
alter table public.waitlist_brands enable row level security;
alter table public.waitlist_creators enable row level security;

drop policy if exists "insert publico" on public.waitlist_brands;
create policy "insert publico" on public.waitlist_brands
  for insert to anon, authenticated
  with check (true);

drop policy if exists "insert publico" on public.waitlist_creators;
create policy "insert publico" on public.waitlist_creators
  for insert to anon, authenticated
  with check (true);

-- Garante que a chave anon não tenha nenhum outro privilégio nas tabelas
revoke all on public.waitlist_brands from anon, authenticated;
revoke all on public.waitlist_creators from anon, authenticated;
grant insert on public.waitlist_brands to anon, authenticated;
grant insert on public.waitlist_creators to anon, authenticated;
