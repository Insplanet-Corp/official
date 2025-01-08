# insplanet official Front-end Document

## CI/CD
### vercel로 자동 배포
 - 기존 가비아 컨테이너 호스팅을 사용하는 경우, 클라이언트사이드 라우팅에 대한 대응이 되지 않아 404 오류 페이지 발생.
 - 기존 원본 코드와 배포 코드의 저장소가 분리되어 유지보수의 어려움.

## 프로젝트를 시작하기 전에

### 필수 설치 환경

- nodejs [link](https://nodejs.org/en)
- git [link](https://git-scm.com/)

### 추천 에디터, 및 에디터 확장프로그램

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 프로젝트 환경 구성

- 주요 프레임워크 - vue3(3.3.11)
- 모듈번들러 - vite(ver 5.0.10)

vue3 공식 사이트 [link](https://vuejs.org/)

## 프로젝트 폴더 구조

```
 dist // npm run build 시 생성되는 산출물 파일
.github
 └─workflows // git actions 자동배포 쉘스크립트
public // 정적파일
 ├─assets
 │  ├─fonts
 │  │  ├─chillax
 │  └─images
 ├─brochure
 ├─works // 각 works 별 상세이미지
 │  ├─3friends
 │  ├─baasidApp
 │  ├─bizpay
 │  ├─bokjiro
 │  ├─budio
 │  ├─castingn
 │  ├─castingn2
 │  ├─chinchin
 │  ├─cosmo
 │  ├─cosmo2
 │  ├─enTrans
 │  ├─flatApp
 │  ├─heyoung
 │  ├─homeAndShopping
 │  ├─images
 │  ├─iros
 │  ├─jpdc
 │  ├─kbMyData
 │  ├─kia
 │  ├─kmc
 │  ├─lgcns_cloudxper
 │  ├─lgObjet
 │  ├─mentor
 │  ├─mmaa
 │  ├─naverWhale
 │  ├─nb
 │  ├─ourhome
 │  ├─paEnter
 │  ├─penthill
 │  ├─pims
 │  ├─shinhan
 │  ├─shinhanOpenAPI
 │  ├─shinhanPlus
 │  ├─shinhanPlusMain
 │  ├─shinhanWhale
 │  ├─superSol
 │  ├─t4k
 │  ├─taldosa
 │  ├─wanju
 │  └─wMall
 └─worksCards // 각 works 별 main 화면, 상세하단에 노출되는 cards
src // vite 로 컴파일 되는 개발소스
  ├─assets
  │  ├─images
  │  │  └─ico
  │  └─scss
  ├─layouts // layout 관련 vue 파일
  ├─router // router 관련파일
  ├─stores // 상태관리 파일
  ├─views // 페이지 파일
  └─works // work-setting.js 와 연동되어 각 work 별 호출되는 vue 파일
```

## work-setting.js

works 관리 파일, 설정 가능 부분은 다음과 같습니다.
프로젝트 name, 신규 추가 시 name 값에 해당하는 파일이 존재 해야 합니다.

> 예) 새롭게 insplanetProject 라는 work 이 등록되는 경우

1. work-setting.js 에, name 값이 insplanetProject 인 설정구간 추가
2. public/worksCards, public/works 에 필요한 폴더와 이미지 추가
3. works/ 폴더 하위에 insplanetProject.vue 라는 파일 추가
4. 개발환경 이라면 localhost:5173/work/insplanetProject 에서 화면 확인

```javascript
{
    name: "shinhanPlus", // 프로젝트 이름 - url 경로와, works 의 파일 과 같아야 합니다.
    image: "card_shinhanPlus.jpg", // 카드 이미지 명 (public/worksCard 폴더 하위)
    projectNameColor: "light",
    projectType: "공공기관, 업무시스템, APP, 유지운영",
    gradient: "#fff",
    detail: {
      coverPc: "/works/shinhanPlus/cover.jpg",
      coverMobile: "/works/shinhanPlus/cover_m.jpg",
      title:
        "신한플러스<span class='br_pc'></span> 해외주식<span class='br_pc'></span> 소수점투자 UI/UX",
      subtitle: "해외주식 소수점 투자",
      overview:
        "신한금융그룹의 서비스를 한 눈에 확인하고 이용할 수 있는 신한플러스 서비스에 국내 최초로 신한투자증권이 해외주식 소수점투자 서비스를 제공하게 되었습니다. 신한플러스의 가이드를 준수하였으며, 생소한 소수점 주식 거래와 다양한 형태의 투자 방식에 대해 이용의 용이성을 높이고, 거래의 편의성을 중심으로 UI/UX를 구현하였습니다.",
      launch: "Aug, 2022",
      client: "신한은행",
      device: "Mobile Application",
      uiux: "Benchmarking, User Flow, Menu Architecture, Prototyping, Wireframing, UI Design, Figma, Test Scenario",
      viewplatform: "#none",
    },
  },
```

## 쉽게 새로운 프로젝트 추가하는 방법

> 새롭게 myWorks 라는 프로젝트 이력을 추가 하는 방법
>
> ```javascript
> > node create myWorks
> ```

이후, public/works/myWorks 폴더와, public/worksCards 폴더에 필요한 이미지를 추가 하시면 됩니다.
