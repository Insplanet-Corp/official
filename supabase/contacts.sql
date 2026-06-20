-- ============================================================
-- 문의(contacts) 테이블 + RLS 정책
-- Supabase 대시보드 > SQL Editor 에 붙여넣고 실행하세요.
-- ============================================================

create table if not exists public.contacts (
  id          bigint generated always as identity primary key,
  name        text not null,
  email       text,
  phone       text,
  company     text,
  message     text not null,
  status      text not null default 'new', -- new | done | spam
  privacy_agreed_at timestamptz,           -- 개인정보 수집·이용 동의 시각
  created_at  timestamptz not null default now()
);

create index if not exists contacts_created_at_idx on public.contacts (created_at desc);

-- RLS 활성화
alter table public.contacts enable row level security;

-- 1) 공개 문의 폼: 누구나(anon) INSERT 가능
drop policy if exists "anyone can insert contacts" on public.contacts;
create policy "anyone can insert contacts"
  on public.contacts
  for insert
  to anon, authenticated
  with check (true);

-- 2) 어드민(로그인한 사용자)만 조회/수정/삭제 가능
drop policy if exists "authenticated can select contacts" on public.contacts;
create policy "authenticated can select contacts"
  on public.contacts
  for select
  to authenticated
  using (true);

drop policy if exists "authenticated can update contacts" on public.contacts;
create policy "authenticated can update contacts"
  on public.contacts
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "authenticated can delete contacts" on public.contacts;
create policy "authenticated can delete contacts"
  on public.contacts
  for delete
  to authenticated
  using (true);

-- ============================================================
-- 어드민 계정 생성:
-- Supabase 대시보드 > Authentication > Users > Add user 에서
-- 이메일/비밀번호로 직접 만들고, "Auto Confirm User"를 체크하세요.
-- (이메일 인증 절차 없이 바로 로그인 가능)
-- ============================================================
