-- ============================================================
-- 브로셔 교체 이력(brochure_history) 테이블 + RLS 정책
-- 실제 PDF 파일은 Storage에 1개만 덮어쓰기로 유지하고,
-- 교체될 때마다 메타데이터(파일명/크기/교체일시)만 이 테이블에 기록한다.
-- Supabase 대시보드 > SQL Editor 에 붙여넣고 실행하세요.
-- ============================================================

create table if not exists public.brochure_history (
  id          bigint generated always as identity primary key,
  file_name   text not null,
  size        bigint,                                  -- 바이트
  uploaded_at timestamptz not null default now()
);

create index if not exists brochure_history_uploaded_at_idx
  on public.brochure_history (uploaded_at desc);

-- RLS 활성화 (어드민 전용 — 공개 사이트는 접근 불필요)
alter table public.brochure_history enable row level security;

drop policy if exists "authenticated can select brochure_history" on public.brochure_history;
create policy "authenticated can select brochure_history"
  on public.brochure_history
  for select
  to authenticated
  using (true);

drop policy if exists "authenticated can insert brochure_history" on public.brochure_history;
create policy "authenticated can insert brochure_history"
  on public.brochure_history
  for insert
  to authenticated
  with check (true);

drop policy if exists "authenticated can delete brochure_history" on public.brochure_history;
create policy "authenticated can delete brochure_history"
  on public.brochure_history
  for delete
  to authenticated
  using (true);
