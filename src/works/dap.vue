<template>
  <div class="work-container">
    <!-- 공통 상단 영역 시작 -->
    <WorkContentCommon />

    <section class="works-content section01">
      <div class="section-inner">
        <div class="section-header">
          <p class="section-title">DAP GenAI Platform</p>
          <p class="section-description">
            DAP GenAI Platform은 기업특화 생성형 AI 플랫폼으로, 기업고객은
            온프레미스, 클라우드 등 보유중인 인프라에 설치해 비즈니스에 필요한
            생성형 AI 서비스를 빠르게 만들어 즉각적인 가치 창출을 할 수
            있습니다.
          </p>
        </div>
      </div>
    </section>

    <section class="works-content section02">
      <div class="section-inner">
        <div class="section-header">
          <p class="section-title">Visual Image</p>
          <p class="section-description">
            AI 오로라 컨셉에 맍게 미래지향적이고 고차원 세계적인 비주얼을
            표현하였습니다.
          </p>
        </div>
      </div>
    </section>

    <section class="works-content section03">
      <div class="section-header">
        <p class="section-title">Unified Design</p>
        <p class="section-description">
          DAP GenAI Text, Image, KL 하나의 디자인 시스템을 활용해 일관되고
          통일된 Design을 진행하였습니다.
        </p>
      </div>

      <div>
        <figure></figure>
        <b>GenAI Text</b>
        <p>
          비즈니스에 특화된 언어 생성형 AI서비스와 초거대 언어모델(LLM) 구현
        </p>
      </div>
      <div>
        <figure></figure>
        <b>GenAI KL</b>
        <p>사내 다양한 문서를 지식화하며 필요한 지식을 찾고 활용</p>
      </div>
      <div>
        <figure></figure>
        <b>GenAI Image</b>
        <p>
          정교한 이미지를 생성하고 맞춤형 초거대 비전모델(LVM)도 손쉽게 제작
        </p>
      </div>
    </section>

    <section class="works-content section01">
      <div class="section-inner">
        <div class="section-texts">
          <img src="/works/onedoctor/section01_icon.png" alt="" />
          <p class="section-title">채팅 UI를 활용한 친근감 형성</p>
          <p class="section-description">
            사용자가 건강기록을 입력하면 의료 전문가와 직접 상담하는듯한 답변이
            제공됩니다.<br />
            버튼을 선택함으로써 사용자가 번거로운 타이핑 작업을 하지 않아도
            자연스러운 플로우가 진행됩니다.
          </p>
        </div>
        <div class="section-images">
          <img src="/works/onedoctor/section01_image01.png" />
          <img src="/works/onedoctor/section01_image02.png" />
          <img src="/works/onedoctor/section01_image03.png" />
          <img src="/works/onedoctor/section01_image04.png" />
        </div>
      </div>
    </section>
    <section class="works-content section02">
      <div class="section-inner">
        <div class="section-texts">
          <img src="/works/onedoctor/section02_icon.png" alt="" />
          <p class="section-title">등록된 디바이스와의 자동 호환</p>
          <p class="section-description">
            사용자가 현재 사용하고 있는 혈압계 · 혈당계를 원닥터 앱과 동기화시켜
            직접 입력할 필요 없이 블루투스를 이용한 자동 전송 기능을 활용하여
            누구나 쉽게 건강기록 관리가 가능합니다.
          </p>
        </div>
        <div class="section-images">
          <img src="/works/onedoctor/section02_image01.png" />
          <img src="/works/onedoctor/section02_image02.png" />
        </div>
      </div>
    </section>
    <section class="works-content section03">
      <div class="section-inner">
        <div class="section-texts">
          <img src="/works/onedoctor/section03_icon.png" alt="" />
          <p class="section-title">친절하고 따뜻한 UX라이팅</p>
          <p class="section-description">
            의사선생님과 직접 소통하는듯이 친절하고 따뜻한 말투의 통일된 UX
            라이팅을 용하여 사용자에게 친근감있게 다가갑니다.
          </p>
        </div>
        <div class="section-images">
          <div class="section-circles">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img src="/works/onedoctor/section03_image01.png" />
          <img src="/works/onedoctor/section03_image02.png" />
          <img src="/works/onedoctor/section03_image03.png" />
          <img src="/works/onedoctor/section03_image04.png" />
          <img src="/works/onedoctor/section03_image05.png" />
        </div>
      </div>
    </section>
    <!-- 공통 상단 영역 종료 -->
  </div>
</template>
<script setup>
import { onMounted, defineProps } from "vue";
import WorkContentCommon from "@/views/WorkContentCommon.vue";
</script>
<style lang="scss">
@import "../assets/scss/response.scss";
// 공통
.section-inner {
  gap: 196px;

  max-width: 1096px;
  margin: 0 auto;
  padding: 120px 0;

  position: relative;
}
.section-icon {
}
.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.section-title {
  font-size: 50px;
  line-height: 60px;
  font-weight: bold;
  color: #000;
  word-break: keep-all;

  opacity: 0;
  transform: scale(1) translateY(200px);
  transition: all ease-out 0.8s;
  transition-delay: var(--delayImg);
}
.section-description {
  font-size: 16px;
  line-height: 24px;
  color: #000;

  opacity: 0;
  transform: scale(1) translateY(200px);
  transition: all ease-out 0.8s;
  transition-delay: var(--delayImg);
}

//
.section01 {
  padding: 160px 0;
  background-color: rgba(28, 7, 45, 1);
}
.section02 {
  padding: 100px 0;
  background-color: #000;
}
.section03 {
  padding: 200px 0;
  background-color: rgba(21, 7, 40, 1);
}
//

.section01 {
  border-radius: 16px 16px 0 0 !important;
  .section-inner {
    .section-texts {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 420px;
      gap: 24px;

      img {
        width: 54px;
      }
    }
    .section-images {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 480px;
      position: relative;

      img:nth-of-type(1) {
        max-width: 360px;
        text-align: center;
      }
      img:nth-of-type(2) {
        max-width: 132px;
        position: absolute;
        bottom: 188px;
        right: 90px;
      }
      img:nth-of-type(3) {
        max-width: 280px;
        position: absolute;
        bottom: 28px;
        left: 0;
      }
      img:nth-of-type(4) {
        max-width: 280px;
        position: absolute;
        bottom: -36px;
        left: 0;
      }
    }
  }
}

.section02 {
  margin-top: 0 !important;
  border-radius: 0 !important;
  .section-inner {
    flex-direction: row-reverse;

    .section-texts {
      display: flex;
      flex-direction: column;
      width: 420px;
      gap: 24px;

      img {
        width: 39px;
      }
    }
    .section-images {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 480px;
      position: relative;

      img:nth-of-type(1) {
        max-width: 360px;
        text-align: center;
      }
      img:nth-of-type(2) {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 24px;
      }
    }
  }
}

.section03 {
  margin-top: 0 !important;
  padding-bottom: 120px;
  border-radius: 0 0 16px 16px !important;
  .section-inner {
    align-items: flex-start;
    max-width: 1200px;
    gap: 0;

    .section-texts {
      display: flex;
      flex-direction: column;
      min-width: 420px;
      gap: 24px;

      img {
        width: 50px;
      }
    }
    .section-images {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 938px;
      height: 938px;
      position: relative;
      z-index: 1;

      img {
        width: auto;
        height: 113.7px;
      }

      img:nth-of-type(1) {
        max-width: 360px;
        height: fit-content;
        text-align: center;
      }
      img:nth-of-type(2) {
        position: absolute;
        top: 228px;
        right: 50.45px;
      }
      img:nth-of-type(3) {
        position: absolute;
        top: 467px;
        left: -64px;
      }
      img:nth-of-type(4) {
        position: absolute;
        bottom: 77.35px;
        right: 58px;
      }
      img:nth-of-type(5) {
        position: absolute;
        bottom: -14px;
        left: 39px;
      }
    }

    .section-circles {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;

      div {
        border-radius: 50%;
        box-sizing: border-box;
        position: absolute;

        transition: all 0.4s ease;
        transform: scale(0);
      }
      div:nth-of-type(1) {
        // 534px
        width: 56%;
        padding-top: 56%;
        background-color: rgba(34, 185, 159, 0.07);
      }
      div:nth-of-type(2) {
        // 734px
        width: 78%;
        padding-top: 78%;
        background-color: rgba(34, 185, 159, 0.07);
      }
      div:nth-of-type(3) {
        width: 100%;
        padding-top: 100%;
        border: 1px solid rgba(34, 185, 159, 0.3);
      }
    }
  }
}

.works-content.show {
  .section-texts {
    .section-icon {
      opacity: 1;
      transform: translateY(0);
      --delayImg: 0.25s;
    }
    .section-title {
      opacity: 1;
      transform: translateY(0);
      --delayImg: 0.5s;
    }
    .section-description {
      opacity: 1;
      transform: translateY(0);
      --delayImg: 0.75s;
    }
  }
  .section-images {
    img {
      opacity: 1;
      transform: translateY(0);
      --delayImg: 1.25s;
    }
    img:nth-of-type(1) {
    }
    img:nth-of-type(2) {
      --delayImg: 1.5s;
    }
    img:nth-of-type(3) {
      --delayImg: 1.75s;
    }
    img:nth-of-type(4) {
      --delayImg: 2s;
    }
  }
  &.section03 {
    .section-circles {
      div {
        transform: scale(1);
      }
      div:nth-of-type(1) {
        transition-delay: 1.5s;
      }
      div:nth-of-type(2) {
        transition-delay: 2s;
      }
      div:nth-of-type(3) {
        transition-delay: 2.5s;
      }
    }
    .section-images {
      img:nth-of-type(1) {
      }
      img:nth-of-type(2) {
        --delayImg: 2.75s;
      }
      img:nth-of-type(3) {
        --delayImg: 3s;
      }
      img:nth-of-type(4) {
        --delayImg: 3.25s;
      }
      img:nth-of-type(5) {
        --delayImg: 3.5s;
      }
    }
  }
}

@include for-size-max("xlarge") {
  .section-title {
    font-size: 24px;
    line-height: 30px;
  }
  .section-description {
    font-size: 14px;
    line-height: 18px;
  }
  .section-inner {
    flex-direction: column !important;
    gap: 32px;
  }
  .section03 .section-inner {
    align-items: center;
    gap: 32px;
    .section-texts {
      max-width: 420px;
      min-width: auto;
    }
    .section-images {
      min-width: 95%;
      height: auto;
      img:nth-of-type(2) {
        top: 20%;
        right: 5%;
      }
      img:nth-of-type(3) {
        max-width: 280px;
        top: 40%;
        left: 5%;
      }
      img:nth-of-type(4) {
        bottom: 20%;
        right: 2.5%;
      }
      img:nth-of-type(5) {
        bottom: 10%;
        left: 2.5%;
      }
    }
  }
}
</style>
