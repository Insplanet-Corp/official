-- ============================================================
-- 내부(사무실) IP 목록 — 방문자 분석에서 제외할 IP
-- 어드민(/admin/analytics)에서 직접 추가/삭제합니다.
-- Edge Function('track')이 이 목록을 읽어 해당 IP 는 기록하지 않습니다.
-- ============================================================

create table if not exists public.internal_ips (
  id         bigint generated always as identity primary key,
  ip         text not null unique,
  label      text,                 -- 예: "본사 사무실"
  created_at timestamptz not null default now()
);

alter table public.internal_ips enable row level security;

-- 어드민(로그인 사용자)만 조회/추가/삭제 가능
drop policy if exists "authenticated can select internal_ips" on public.internal_ips;
create policy "authenticated can select internal_ips"
  on public.internal_ips for select to authenticated using (true);

drop policy if exists "authenticated can insert internal_ips" on public.internal_ips;
create policy "authenticated can insert internal_ips"
  on public.internal_ips for insert to authenticated with check (true);

drop policy if exists "authenticated can delete internal_ips" on public.internal_ips;
create policy "authenticated can delete internal_ips"
  on public.internal_ips for delete to authenticated using (true);
