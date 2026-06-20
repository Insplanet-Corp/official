-- ============================================================
-- Storage: 브로셔(및 기타 공개 에셋) 버킷 + 정책
-- Supabase 대시보드 > SQL Editor 에 붙여넣고 실행하세요.
-- ============================================================

-- 1) 공개(public) 버킷 'assets' 생성 (이미 있으면 public 으로 보정)
insert into storage.buckets (id, name, public)
values ('assets', 'assets', true)
on conflict (id) do update set public = true;

-- 2) 누구나 다운로드/조회 가능 (공개 버킷)
drop policy if exists "public read assets" on storage.objects;
create policy "public read assets"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'assets');

-- 3) 로그인한 어드민만 업로드/교체/삭제 가능
drop policy if exists "authenticated insert assets" on storage.objects;
create policy "authenticated insert assets"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'assets');

drop policy if exists "authenticated update assets" on storage.objects;
create policy "authenticated update assets"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'assets')
  with check (bucket_id = 'assets');

drop policy if exists "authenticated delete assets" on storage.objects;
create policy "authenticated delete assets"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'assets');
