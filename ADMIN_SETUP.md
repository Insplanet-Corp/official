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

## 4. 어드민 계정 만들기

Supabase 대시보드 **Authentication > Users > Add user** 에서
이메일/비밀번호로 계정을 생성합니다. (**Auto Confirm User** 체크 → 이메일 인증 없이 바로 로그인)

## 5. 실행

```
npm install
npm run dev
```

- 로그인: `http://localhost:5173/admin/login`
- 문의 목록: `http://localhost:5173/admin`

## 공개 문의 폼

`/contact` 경로에 개인정보 수집·이용 동의를 포함한 문의 폼이 있습니다
([src/views/ContactView.vue](src/views/ContactView.vue)).

- 작품 상세 페이지의 **"프로젝트 문의 > Let's Talk"** 버튼이 이 폼으로 연결됩니다.
- 동의 체크 없이는 전송이 막히며, 동의 시각이 `privacy_agreed_at` 컬럼에 함께 저장됩니다.
- 어드민 목록에서 행을 펼치면 동의 여부/시각을 확인할 수 있습니다.
