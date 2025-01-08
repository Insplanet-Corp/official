<template>
  <div class="work-container dap">
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
        <div class="section-images">
          <div class="works-content">
            <img src="/works/dap/section01_img01.png" class="only-pc" />
            <img
              src="/works/dap/section01_img01_mobile.png"
              class="only-mobile"
            />
          </div>
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
        <ul class="section-images">
          <li>
            <img src="/works/dap/section02_img01.png" />
            <span>Data Source</span>
          </li>
          <li>
            <img src="/works/dap/section02_img02.png" />
            <span>Chunking</span>
          </li>
          <li>
            <img src="/works/dap/section02_img03.png" />
            <span>Parsing</span>
          </li>
          <li>
            <img src="/works/dap/section02_img04.png" />
            <span>Embedding</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="works-content section03">
      <div class="section-header">
        <p class="section-title">Unified Design</p>
        <p class="section-description">
          하나의 디자인 시스템을 활용해 일관되고 통일된 Design을 진행하였습니다.
        </p>
      </div>

      <ul class="section-images">
        <li class="works-content-item">
          <span>Text</span>
          <img src="/works/dap/section03_img01.png" alt="" />
          <div>
            <b>GenAI Text</b>
            <p>
              비즈니스에 특화된 언어 생성형 AI서비스와 초거대 언어모델(LLM) 구현
            </p>
          </div>
        </li>
        <li class="works-content-item">
          <span>KL</span>
          <img src="/works/dap/section03_img02.png" alt="" />
          <div>
            <b>GenAI KL</b>
            <p>사내 다양한 문서를 지식화하며 필요한 지식을 찾고 활용</p>
          </div>
        </li>
        <li class="works-content-item">
          <span>Image</span>
          <img src="/works/dap/section03_img03.png" alt="" />
          <div>
            <b>GenAI Image</b>
            <p>
              정교한 이미지를 생성하고 맞춤형 초거대 비전모델(LVM)도 손쉽게 제작
            </p>
          </div>
        </li>
      </ul>
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

// .animation-fadeup {
//   opacity: 0;
//   transform: translateY(200px);
//   transition: all ease-out 0.8s;
//   transition-delay: 0.25s;
// }
// .show .animation-fadeup {
//   opacity: 1;
//   transform: translateY(0);
// }

// 공통
.section-inner {
  gap: 196px;

  margin: 0 auto;

  position: relative;
}
.section-icon {
}
.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  gap: 24px;
  text-align: center;
  .section-title {
    font-size: 40px;
    line-height: 64px;
    font-weight: bold;
    color: #fff;
    word-break: keep-all;

    opacity: 0;
    transform: translateY(200px);
    transition: all ease-out 0.8s;
    transition-delay: 0.25s;
  }
  .section-description {
    font-size: 20px;
    line-height: 32px;
    color: #fff;

    opacity: 0;
    transform: translateY(200px);
    transition: all ease-out 0.8s;
    transition-delay: 0.5s;
  }
}

.section01 {
  padding: 160px 0;
  background-color: rgba(28, 7, 45, 1);

  .section-images {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 160px 32px 0;
  }
}
.section02 {
  padding: 100px 0;
  background: url("/works/dap/section02_bg.png") no-repeat center center #000;
  background-size: cover;

  .section-images {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 160px 0 0;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      width: 50%;
      padding: 74px 0;

      opacity: 0;
      transform: translateX(200px) translateY(-50%);
      transition: all ease-out 0.8s;

      img {
        width: 216px;

        transition: none;
      }
      span {
        color: rgba(255, 255, 255, 0.6);
      }
    }
    li:nth-of-type(1),
    li:nth-of-type(2) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    li:nth-of-type(2),
    li:nth-of-type(4) {
      border-left: 1px solid rgba(255, 255, 255, 0.1);
    }

    li:nth-of-type(1) {
      transition-delay: 0.75s;
    }
    li:nth-of-type(2) {
      transition-delay: 1s;
    }
    li:nth-of-type(3) {
      transition-delay: 1.25s;
    }
    li:nth-of-type(4) {
      transition-delay: 1.5s;
    }
  }
}
.section03 {
  padding: 200px 0;
  background-color: rgba(21, 7, 40, 1);

  .section-images {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 200px 0 0;
    gap: 360px;
    li {
      display: flex;
      align-items: flex-end;
      gap: 60px;
      position: relative;
      span {
        font-size: 300px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.04);
        position: absolute;
        top: 50%;

        opacity: 0;
        transform: translateX(200px) translateY(-50%);
        transition: all ease-out 0.8s;
        transition-delay: 0.25s;
      }
      img {
        box-shadow: 28px 28px 56px rgba(0, 0, 0, 0.25);

        opacity: 0;
        transform: translateX(200px);
        transition: all ease-out 0.8s;
        transition-delay: 1.25s;
      }
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 280px;
        margin-bottom: 20px;
        gap: 8px;

        opacity: 0;
        transform: translateX(200px);
        transition: all ease-out 0.8s;
        transition-delay: 0.75s;
        b {
          font-weight: bold;
        }
        p {
        }
      }
    }
    li:nth-of-type(odd) {
      flex-direction: row-reverse;
      span {
        left: 10%;
        transform: translateX(200px) translateY(-50%);
      }
      img {
        margin-right: -28%;
        transform: translateX(200px);
      }
      div {
        transform: translateX(200px);
      }
    }
    li:nth-of-type(even) {
      span {
        right: 10%;
        transform: translateX(-200px) translateY(-50%);
      }
      img {
        margin-left: -28%;
        transform: translateX(-200px);
      }
      div {
        transform: translateX(-200px);
      }
    }
  }
}

.works-content.show {
  .section-header {
    .section-title {
      opacity: 1;
      transform: translateY(0);
    }
    .section-description {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.section02.show {
  .section-images {
    li {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.works-content-item.show {
  span {
    opacity: 1 !important;
    transform: translateX(0) translateY(-50%) !important;
  }
  img {
    opacity: 1 !important;
    transform: translateX(0) !important;
  }
  div {
    opacity: 1 !important;
    transform: translateX(0) !important;
  }
}

@include for-size-max("xlarge") {
  .section-header {
    align-items: flex-start;
    padding: 0 32px;
    gap: 32px;

    text-align: left;

    .section-title {
      font-size: 24px;
      line-height: 30px;
    }
    .section-description {
      font-size: 14px;
      line-height: 18px;
    }
  }
  .section01 {
    padding: 48px 0;
  }

  .section02 {
    .section-images {
      flex-direction: column;
      padding: 64px 0 0;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        width: 50%;
        margin: 0 auto;
        padding: 64px 0;
        img {
          width: 216px;
        }
        span {
          color: rgba(255, 255, 255, 0.6);
        }
      }
      li + li {
        border-bottom: 0;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
      li:nth-of-type(2),
      li:nth-of-type(4) {
        border-left: 0;
      }
    }
  }

  .section03 {
    padding: 48px 0;

    .section-images {
      padding: 64px 0;
      gap: 32px;
      li {
        flex-direction: column !important;
        align-items: center;
        gap: 24px;
        img {
          width: 93%;
        }
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 280px;
          gap: 8px;

          text-align: center;
        }
      }
      li:nth-of-type(odd) {
        flex-direction: row-reverse;
        img {
          margin-right: 0;
        }
      }
      li:nth-of-type(even) {
        img {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
