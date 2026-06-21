-- ============================================================
-- 방문자 분석(pageviews) 테이블 + RLS
-- Supabase 대시보드 > SQL Editor 에 붙여넣고 실행하세요.
-- 개인정보(IP 등)는 저장하지 않습니다. visitor_id 는 브라우저에
-- 무작위로 생성/저장되는 익명 식별자입니다.
-- ============================================================

create table if not exists public.pageviews (
  id            bigint generated always as identity primary key,
  path          text not null,
  referrer      text,           -- 외부 유입 referrer (사이트 내부 이동은 제외)
  referrer_host text,           -- referrer 의 호스트만 (집계용)
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  visitor_id    text,           -- 익명 방문자 식별자 (localStorage)
  created_at    timestamptz not null default now()
);

create index if not exists pageviews_created_at_idx on public.pageviews (created_at desc);
create index if not exists pageviews_path_idx on public.pageviews (path);

alter table public.pageviews enable row level security;

-- 기록(insert)은 Edge Function('track')이 service_role 로 수행하므로
-- anon/authenticated 용 insert 정책은 두지 않는다(직접 삽입·스팸 차단).
-- 혹시 이전에 만들어 둔 anon insert 정책이 있으면 제거.
drop policy if exists "anyone can insert pageviews" on public.pageviews;

-- 어드민(로그인 사용자)만 조회 가능
drop policy if exists "authenticated can select pageviews" on public.pageviews;
create policy "authenticated can select pageviews"
  on public.pageviews
  for select
  to authenticated
  using (true);
