-- ============================================================
-- 다운로드 기록(downloads) 테이블 + RLS
-- 브로슈어 등 파일 다운로드 클릭을 기록합니다.
-- 기록(insert)은 Edge Function('track')이 service_role 로 수행하며,
-- 내부(사무실) IP 는 페이지뷰와 동일하게 제외됩니다. IP 는 저장하지 않습니다.
-- ============================================================

create table if not exists public.downloads (
  id            bigint generated always as identity primary key,
  item          text not null,   -- 예: "brochure"
  path          text,            -- 다운로드가 일어난 페이지 경로
  referrer_host text,
  visitor_id    text,
  created_at    timestamptz not null default now()
);

create index if not exists downloads_created_at_idx on public.downloads (created_at desc);
create index if not exists downloads_item_idx on public.downloads (item);

alter table public.downloads enable row level security;

-- 어드민(로그인 사용자)만 조회 가능 (insert 는 함수의 service_role)
drop policy if exists "authenticated can select downloads" on public.downloads;
create policy "authenticated can select downloads"
  on public.downloads for select to authenticated using (true);
