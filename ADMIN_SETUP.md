# 어드민 설정 가이드

Supabase 기반의 간단한 문의(Contact) 관리 어드민입니다.

## 1. Supabase 프로젝트 준비

1. [supabase.com](https://supabase.com) 에서 프로젝트 생성
2. **Project Settings > API** 에서 다음 두 값을 복사
   - `Project URL`
   - `anon public` key

## 2. 환경변수 설정

프로젝트 루트에 `.env` 파일 생성 (`.env.example` 참고):

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

> `.env` 는 `.gitignore` 에 의해 커밋되지 않습니다.

## 3. 데이터베이스 테이블 생성

Supabase 대시보드 **SQL Editor** 에 [`supabase/contacts.sql`](supabase/contacts.sql) 내용을
붙여넣고 실행합니다. `contacts` 테이블과 RLS 정책이 생성됩니다.

- 공개(anon): 문의 **등록(insert)** 만 가능
- 로그인 사용자: **조회/수정/삭제** 가능

## 4. Storage 버킷 생성 (브로셔 교체용)

[`supabase/storage.sql`](supabase/storage.sql) 내용을 SQL Editor 에서 실행합니다.
공개 `assets` 버킷과 정책이 생성됩니다.

- 공개(anon): 다운로드/조회만 가능
- 로그인 사용자(어드민): 업로드/교체/삭제 가능

> 어드민의 **브로셔 교체** 페이지에서 PDF를 올리면 `assets/brochure/insplanet_brief.pdf`
> 로 저장되고, 사이트의 "회사 브로슈어 다운로드" 버튼이 자동으로 이 파일을 받습니다.
> Storage 에 파일이 없으면 번들된 기본 PDF(`public/brochure/insplanet_brief.pdf`)로 폴백합니다.

## 4-1. 방문자 분석 (선택)

페이지뷰/순방문자/일별 추이/인기 페이지/유입경로를 어드민(`/admin/analytics`)에서
봅니다. **IP 등 개인정보는 저장하지 않습니다**(익명 식별자만).

### (1) 테이블 생성

SQL Editor 에서 실행:
- [`supabase/pageviews.sql`](supabase/pageviews.sql) — 페이지뷰 테이블
- [`supabase/downloads.sql`](supabase/downloads.sql) — 다운로드(브로슈어) 기록 테이블
- [`supabase/internal_ips.sql`](supabase/internal_ips.sql) — 내부(사무실) IP 목록

기록(insert)은 아래 Edge Function 이 service_role 로 수행하므로, 테이블에는
어드민 조회/관리 정책만 둡니다(직접 삽입·스팸 차단).

### (2) Edge Function 배포

기록은 [`supabase/functions/track`](supabase/functions/track/index.ts) 함수를
통해서만 이뤄지고, 이 함수가 **요청 IP 가 내부 IP 면 기록하지 않습니다**
(IP 는 비교에만 쓰고 저장하지 않음).

```bash
# Supabase CLI 설치 후
supabase login
supabase link --project-ref gepphbqhnuufnincxmor

# 함수 배포 (공개 호출이므로 JWT 검증 끔)
supabase functions deploy track --no-verify-jwt
```

> `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` 는 함수에 자동 주입되어 별도 설정 불필요.
> 대시보드의 **Edge Functions** 메뉴에서 코드 붙여넣기로 배포할 수도 있습니다.

### (3) 사무실 IP 등록 — 어드민에서 직접

`/admin/analytics` 의 **"사무실(내부) IP 관리"** 에서 사무실 네트워크로 접속해
**"현재 내 IP"** 버튼을 누르고 추가하면 됩니다. (CLI/시크릿 불필요, 반영 최대 1분)

### 내부자 제외 동작 정리

- **등록한 사무실 IP** → 기기와 무관하게 자동 제외 (어드민에서 관리)
- **어드민 로그인 브라우저** → 자동 제외
- **재택/외부** → `?internal=1` 한 번 접속으로 그 브라우저 제외 (`?internal=0` 해제)

## 5. 어드민 계정 만들기

Supabase 대시보드 **Authentication > Users > Add user** 에서
이메일/비밀번호로 계정을 생성합니다. (**Auto Confirm User** 체크 → 이메일 인증 없이 바로 로그인)

## 6. 실행

```
npm install
npm run dev
```

- 로그인: `http://localhost:5173/admin/login`
- 문의 목록: `http://localhost:5173/admin`
- 브로셔 교체: `http://localhost:5173/admin/brochure`

## 공개 문의 폼

`/contact` 경로에 개인정보 수집·이용 동의를 포함한 문의 폼이 있습니다
([src/views/ContactView.vue](src/views/ContactView.vue)).

- 작품 상세 페이지의 **"프로젝트 문의 > Let's Talk"** 버튼이 이 폼으로 연결됩니다.
- 동의 체크 없이는 전송이 막히며, 동의 시각이 `privacy_agreed_at` 컬럼에 함께 저장됩니다.
- 어드민 목록에서 행을 펼치면 동의 여부/시각을 확인할 수 있습니다.
