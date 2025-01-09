<template>
  <div class="work-container">
    <!-- 공통 상단 영역 시작 -->
    <WorkContentCommon />
    <!-- 공통 상단 영역 종료 -->
    <!-- 모바일 퍼스트 Mobile First -->
    <div class="works-content">
      <div class="works-section theme-darkblue section01">
        <div class="works-desc">
          <h3 class="works-desc-title">
            모바일 퍼스트 <br class="only-mobile" />
            Mobile First
          </h3>
          <p class="works-desc-text" style="--delay: 1s">
            신한투자증권에서 제공하는 정보를 디바이스와 해상도의 제약없이 빠르게
            제공받을 수 있도록 반응형 그리드 시스템을 활용하여 모바일에 최적화된
            디자인을 적용하였습니다.<br /><br />신한투자증권 모바일 웹사이트
            개편은 디지털 홍보채널의 역할에 포커스를 두었으며, 비 로그인 상태인
            신규 고객이 신한금융투자 콘텐츠를 소비하고 공유하는것에 대한 모든
            장벽을 없애고, 유용한 투자정보를 다양한 채널로 공유하여 잠재고객의
            유입기반을 마련하였습니다.
          </p>
        </div>
        <figure class="works-figure">
          <img
            src="/works/shinhan/img_pc_mobile_first.png"
            class="only-pc"
            style="--delayImg: 1s"
          />
          <img
            src="/works/shinhan/img_mobile_mobile_first.png"
            class="only-mobile"
          />
          <dl class="blind">
            <dt>모바일 홍보채널 강화</dt>
            <dd>모바일 퍼스트</dd>
            <dd>모바일 콘텐츠 증가</dd>
            <dd>투자연령층 다양화</dd>
            <dd>개인투자자 증가</dd>
          </dl>
        </figure>
      </div>
    </div>
    <!--// 모바일 퍼스트 Mobile First -->

    <!-- 모바일 대세 소형+세로형 콘텐츠 -->
    <div class="works-content">
      <div class="works-section section02">
        <figure class="works-figure">
          <ul class="works-figure-content">
            <li class="only-pc">
              <img
                src="/works/shinhan/img_pc_content01.png"
                alt=""
                style="--delayImg: 0.75s"
              />
            </li>
            <li class="only-pc">
              <img
                src="/works/shinhan/img_pc_content02.png"
                alt=""
                style="--delayImg: 0.5s"
              />
            </li>
            <li class="only-pc">
              <img
                src="/works/shinhan/img_pc_content03.png"
                alt=""
                style="--delayImg: 1s"
              />
            </li>
            <li class="only-mobile">
              <img
                src="/works/shinhan/img_mobile_content.png"
                alt=""
                style="--delayImg: 0.75s"
              />
            </li>
          </ul>
        </figure>
        <!-- <img src="/works/shinhan/image_pc_01.jpg" class="only-pc" />
        <img src="/works/shinhan/image_mobile_01.jpg" class="only-mobile" /> -->
      </div>
    </div>
    <!--// 모바일 대세 소형+세로형 콘텐츠 -->

    <!-- 콘텐츠관리시스템 (CMS) 도입 -->
    <div class="works-content">
      <div class="works-section theme-blue section03">
        <div class="works-desc" :class="{ horizontal: !isPotable }">
          <h3 class="works-desc-title">콘텐츠관리시스템<br />(CMS) 도입</h3>
          <p class="works-desc-text">
            콘텐츠관리시스템(CMS)을 도입으로 금융상품, 투자정보, 트레이딩 등
            유용한 투자정보를 효율적으로 관리하고 배포할 수 있습니다.
          </p>
        </div>
        <figure class="works-figure">
          <ul class="works-figure-content">
            <li class="figure-cms01">
              <img
                src="/works/shinhan/img_pc_cms01.png"
                alt=""
                class="only-pc"
                style="--delayImg: 0.75s"
              />
              <img
                src="/works/shinhan/img_mobile_cms01.png"
                alt=""
                class="only-mobile"
                style="--delayImg: 0.75s"
              />
            </li>
            <li class="figure-cms02">
              <img
                src="/works/shinhan/img_pc_cms02.png"
                alt=""
                class="only-pc"
                style="--delayImg: 0.5s"
              />
              <img
                src="/works/shinhan/img_mobile_cms02.png"
                alt=""
                class="only-mobile"
                style="--delayImg: 0.75s"
              />
            </li>
            <li class="figure-cms03">
              <img
                src="/works/shinhan/img_pc_cms03.png"
                alt=""
                class="only-pc"
                style="--delayImg: 1s"
              />
              <img
                src="/works/shinhan/img_mobile_cms03.png"
                alt=""
                class="only-mobile"
                style="--delayImg: 0.75s"
              />
            </li>
          </ul>
        </figure>
      </div>
    </div>
    <!--// 콘텐츠관리시스템 (CMS) 도입 -->

    <!-- 누구나 모바일 콘텐츠를 소비하는 시대 -->
    <div class="works-content">
      <div class="works-section theme-gradient section04">
        <div class="works-desc">
          <h3 class="works-desc-title">
            누구나 모바일 콘텐츠를 <br class="only-mobile" />
            소비하는 시대
          </h3>
          <p class="works-desc-text">
            누구나 맘에 드는 콘텐츠를 지인에 공유할 수 있도록<span
              class="br_pc"
            ></span>
            디바이스 OS 별 모바일웹 공유기능을 구현했습니다.
          </p>
        </div>
        <div class="works-figure">
          <img
            src="/works/shinhan/img_pc_anyone.png"
            alt=""
            class="only-pc"
            style="--delayImg: 0.75s"
          />
          <img
            src="/works/shinhan/img_mobile_anyone.png"
            alt=""
            class="only-mobile"
            style="--delayImg: 0.75s"
          />
        </div>
      </div>
    </div>
    <!--// 누구나 모바일 콘텐츠를 소비하는 시대 -->

    <!-- 신한투자증권 디지털 홍보채널 -->
    <div class="works-content">
      <div class="works-section theme-darkblue section05">
        <div class="works-desc" :class="{ horizontal: !isPotable }">
          <h3 class="works-desc-title">
            신한투자증권 <br class="only-mobile" />
            디지털 홍보채널
          </h3>
          <p class="works-desc-text">
            원페이지 스크롤링 형식의 카드형 UI로 신규고객을 위한 다양한
            금융이벤트를 집중도 있게 전달합니다. 디지털 홍보의 특성에 맞는
            다양한 컬러와 이미지로 시각적 임팩트를 높이고, 캐주얼한 톤앤매너로
            밝은 이미지를 구축하였습니다.
          </p>
        </div>
        <div class="works-figure">
          <img
            src="/works/shinhan/img_pc_channel.png"
            alt=""
            class="only-pc"
            style="--delayImg: 0.75s"
          />
          <img
            src="/works/shinhan/img_mobile_channel.png"
            alt=""
            class="only-mobile"
            style="--delayImg: 0.75s"
          />
        </div>
      </div>
    </div>
    <!--// 신한투자증권 디지털 홍보채널 -->

    <!-- 신한투자증권 브랜드 아이덴티티 -->
    <div class="works-content">
      <div class="works-section section06">
        <div class="works-figure" v-if="!isPotable">
          <img
            src="/works/shinhan/img_pc_bi01.png"
            alt=""
            class="only-pc"
            style="--delayImg: 0.75s"
          />
        </div>
        <div class="works-desc" :class="{ horizontal: !isPotable }">
          <h3 class="works-desc-title">
            신한투자증권 <br class="only-mobile" />브랜드 아이덴티티
          </h3>
          <p class="works-desc-text">
            브랜드 아이덴티티에 집중한 디자인으로 브랜드 톤 앤 매너의 통일성을
            유지하며 밝고 생생한 <br />컬러와 3D 요소로 친근한 이미지를
            부여했다.
          </p>
        </div>
        <div class="works-figure">
          <ul class="works-figure-content" v-if="!isPotable">
            <li>
              <img
                src="/works/shinhan/img_pc_bi0201.png"
                alt=""
                class="only-pc"
                style="--delayImg: 0.75s"
              />
            </li>
            <li>
              <img
                src="/works/shinhan/img_pc_bi0202.png"
                alt=""
                class="only-pc"
                style="--delayImg: 0.5s"
              />
            </li>
          </ul>
          <ul class="works-figure-content" v-if="isPotable">
            <li>
              <img
                src="/works/shinhan/img_mobile_bi01.png"
                alt=""
                style="--delayImg: 0.5s"
              />
            </li>
            <li>
              <img
                src="/works/shinhan/img_mobile_bi02.png"
                alt=""
                style="--delayImg: 0.65s"
              />
            </li>
            <li>
              <img
                src="/works/shinhan/img_mobile_bi03.png"
                alt=""
                style="--delayImg: 0.8s"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--// 신한투자증권 브랜드 아이덴티티 -->

    <!-- 검색엔진 최적화(SEO) -->
    <div class="works-content">
      <div class="works-section section07">
        <div class="works-desc" :class="{ horizontal: !isPotable }">
          <h3 class="works-desc-title">검색엔진 최적화(SEO)</h3>
          <p class="works-desc-text">
            검색엔진 최적화(SEO)를 통해 네이버, 구글 등 검색 사이트에서
            검색결과에 콘텐츠가 <br />잘 노출되도록 하고, 해당 콘텐츠 페이지로
            바로 진입시켜 잠재고객 내재화 및 <br />고객의 빠른 주식 거래 여정을
            지원한다.
          </p>
        </div>
        <div class="works-figure">
          <img
            src="/works/shinhan/img_pc_seo.png"
            alt=""
            class="only-pc"
            style="--delayImg: 0.75s"
          />
          <img
            src="/works/shinhan/img_mobile_seo.png"
            alt=""
            class="only-mobile"
            style="--delayImg: 0.75s"
          />
          <div class="blind">
            <h3>길을 잃을 염려가 없는 순환구조의 서비스</h3>
            <dl>
              <dt>인지</dt>
              <dd>광고, 소셜미디어, 검색 등을 통해 고객이 제품/서비스 발견</dd>
            </dl>
            <dl>
              <dt>탐색</dt>
              <dd>제품/서비스를 자세히 보기 위해 검색 또는 웹사이트 방문</dd>
            </dl>
            <dl>
              <dt>결정</dt>
              <dd>가격/기능/특징 등을 고려하며 구매의사 결정</dd>
            </dl>
            <dl>
              <dt>구매</dt>
              <dd>쉽고 빠르게 구매할 수 있는 프로세스 제공</dd>
            </dl>
            <dl>
              <dt>사용</dt>
              <dd>만족도가 높은 사용자경험을 위한 UI/UX</dd>
            </dl>
            <dl>
              <dt>추천</dt>
              <dd>UI/UX 만족도가 높은 고객의 추천 및 신규 고객 유입</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <!--// 검색엔진 최적화(SEO) -->

    <!-- 신한카드 UX Writing 가이드 -->
    <div class="works-content">
      <div class="works-section section08">
        <div class="works-figure">
          <img
            src="/works/shinhan/img_pc_ux01.png"
            alt=""
            class="only-pc ux-icon"
            style="--delayImg: 0.5s"
          />
          <div class="works-desc">
            <h3 class="works-desc-title">
              신한카드 <br class="only-mobile" />UX Writing 가이드
            </h3>
            <p class="works-desc-text">
              투자 콘텐츠에 대한 이해도를 높이고 고객과 '통’ 하는 글쓰기를
              위해<br class="only-pc" />
              신한카드 UX Writing 가이드 를 준수하였습니다.<br
                class="only-pc"
              />
              한눈에 알 수 있는 표시, 직접적이고 구체적인 표현을 사용하였으며
              <br class="only-pc" />
              문장 톤앤매너를 통일성 있게 유지하였습니다.
            </p>
          </div>
          <img
            src="/works/shinhan/img_mobile_ux01.png"
            alt=""
            class="only-mobile ux-icon"
            style="--delayImg: 0.5s"
          />
          <img
            src="/works/shinhan/img_pc_ux02.png"
            alt=""
            class="only-pc ux-device"
            style="--delayImg: 0.75s"
          />
          <img
            src="/works/shinhan/img_mobile_ux02.png"
            alt=""
            class="only-mobile ux-device"
            style="--delayImg: 0.75s"
          />
          <div class="device-text">
            <ul class="left">
              <li class="device-text-uno">
                <img
                  :src="`${!isPotable ? '/works/shinhan/img_pc_ux0301.png' : '/works/shinhan/img_mobile_ux0301.png'}`"
                  alt=""
                  style="--delayImg: 1s"
                />
              </li>
              <li class="device-text-dos">
                <img
                  :src="`${!isPotable ? '/works/shinhan/img_pc_ux0302.png' : '/works/shinhan/img_mobile_ux0302.png'}`"
                  src="/works/shinhan/img_pc_ux0302.png"
                  alt=""
                  style="--delayImg: 1.05s"
                />
              </li>
              <li class="device-text-tres">
                <img
                  :src="`${!isPotable ? '/works/shinhan/img_pc_ux0303.png' : '/works/shinhan/img_mobile_ux0303.png'}`"
                  src="/works/shinhan/img_pc_ux0303.png"
                  alt=""
                  style="--delayImg: 1.15s"
                />
              </li>
            </ul>
            <ul class="right">
              <li class="device-text-uno">
                <img
                  :src="`${!isPotable ? '/works/shinhan/img_pc_ux0401.png' : '/works/shinhan/img_mobile_ux0401.png'}`"
                  alt=""
                  style="--delayImg: 1s"
                />
              </li>
              <li class="device-text-dos">
                <img
                  :src="`${!isPotable ? '/works/shinhan/img_pc_ux0402.png' : '/works/shinhan/img_mobile_ux0402.png'}`"
                  alt=""
                  style="--delayImg: 1.05s"
                />
              </li>
              <li class="device-text-tres">
                <img
                  :src="`${!isPotable ? '/works/shinhan/img_pc_ux0403.png' : '/works/shinhan/img_mobile_ux0403.png'}`"
                  alt=""
                  style="--delayImg: 1.15s"
                />
              </li>
              <li class="device-text-quatro">
                <img
                  src="/works/shinhan/img_pc_ux0404.png"
                  class="only-pc"
                  alt=""
                  style="--delayImg: 1.3s"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--// 신한카드 UX Writing 가이드 -->
  </div>
</template>
<script setup>
import { onMounted, defineProps } from "vue";
import MobileDetect from "mobile-detect";

import WorkContentCommon from "@/views/WorkContentCommon.vue";
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();
const isTablet = mobileDetect.tablet();
const isPotable = isMobile || isTablet;

console.debug("isPotable", isMobile, isTablet, isPotable);
</script>
<style lang="scss">
@import "../assets/scss/response.scss";
.section01 {
  .works-figure {
    margin: 128px auto 0;
    max-width: 1183px;
    @include for-size-max("extra-small") {
      margin-top: 40px;
      max-width: 238px;
    }
  }
}
.section02 {
  .works-figure {
    margin-top: 40px;
    @include for-size-min("extra-small") {
      margin-top: 142px;
      &-content {
        max-width: 1302px;
        gap: 16px;

        li:first-of-type {
          margin-top: 93px;
        }
        li:last-of-type {
          margin-top: 34px;
        }
      }
    }
  }
}
.section01 {
  .works-desc {
    .works-desc-title {
      margin-bottom: 24px;
    }
  }
}
.section03 {
  .works-desc {
    gap: 137px;
    .works-desc-title {
      min-width: 222px;
    }
    .works-desc-text {
      margin-right: 80px;
    }
  }
  .works-figure {
    @include for-size-min("extra-small") {
      margin: 128px auto 0;
      opacity: 0;
      transform: translateY(200px);
      transition:
        transform 0.5s ease-in-out,
        opacity 0.5s ease-in-out;
      &-content {
        max-width: 1158px;
        gap: 24px;
        li {
          transition: transform 0.75s ease-in-out;
          transition-delay: 0.5s;
          img {
            transition: unset;
          }
        }
        .figure-cms01 {
          transform: translateX(394px);
        }
        .figure-cms03 {
          transform: translateX(-394px);
        }
      }
    }
    @include for-size-max("extra-small") {
      --sliderPos: 66.666;
      --sliderCnt: 3;
      margin: 40px 0 0;
      justify-content: flex-start;
      width: 300vw;
      &-content {
        position: relative;
        gap: 16px;
        animation: 9s slider infinite;
        animation-play-state: paused;
        &:hover {
          animation-play-state: paused;
        }
        li {
          img {
            width: 66.66667vw;
          }
        }
      }
      @keyframes slider {
        0% {
          left: 0;
        }
        30% {
          left: 0;
        }
        33% {
          left: calc(var(--sliderPos) * -1vw);
        }
        63% {
          left: calc(var(--sliderPos) * -1vw);
        }
        66% {
          left: calc(var(--sliderPos) * -2vw);
        }
        95% {
          left: calc(var(--sliderPos) * -2vw);
        }
        100% {
          left: 0;
        }
      }
    }
  }
}
.section04 {
  position: relative;
  overflow: hidden;
  .works-desc {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  &.theme-gradient {
    background: linear-gradient(
        180deg,
        rgba(246, 248, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 0.01%,
        rgba(211, 243, 255, 0.4) 45%,
        rgba(198, 200, 255, 0.4) 80.5%
      ),
      #fff;
  }
  @include for-size-min("extra-small") {
    .works-figure {
      position: absolute;
      max-width: 400px;
      bottom: 0;
      right: calc(50vw - 768px + 85px);
      img {
        border-radius: 16px 16px 0 0;
      }
    }
  }
  @include for-size-max("extra-small") {
    padding-bottom: 0;
    .works-figure {
      margin-top: 40px;
      img {
        max-width: 73.333vw;
        border-radius: 16px 16px 0 0;
      }
    }
  }
}
.section05 {
  background-image: url("/works/shinhan/bg_section_channel.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  @include for-size-max("extra-small") {
    background-image: url("/works/shinhan/bg_section_channel_mo.png");
    background-size: cover;
  }

  .works-desc {
    gap: 75px;
    .works-desc-title {
      width: -webkit-fill-available;
    }
    .works-desc-text {
    }
  }
  .works-figure {
    margin-top: 128px;

    @include for-size-max("extra-small") {
      margin: 40px -24px 0;
    }
    img {
      max-width: 1589px;
    }
  }
}
.section06 {
  .works-figure {
    max-width: 1140px;
    margin: 0 auto;
    .works-figure-content {
      gap: 110px;
      @include for-size-max("extra-small") {
        margin-top: 40px;
        flex-direction: column;
        gap: 0;
        li:nth-child(2) {
          margin: 48px 0 24px;
        }
      }
    }
  }
  .works-desc {
    margin: 128px auto;
    @include for-size-max("extra-small") {
      margin: auto;
    }
  }
}
.section07 {
  background-color: rgba(11, 23, 96, 1);
  color: #fff;
  .works-figure {
    img {
      margin-top: 128px;
      max-width: 1142px;
      @include for-size-max("extra-small") {
        margin-top: 40px;
      }
    }
  }
}
.section08 {
  position: relative;
  background-color: #f5f5f5;
  @include for-size-max("extra-small") {
    overflow: hidden;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 304px;
    display: block;
    border-radius: 50%;
    width: 71.25vw;
    height: 71.25vw;
    max-width: 1140px;
    max-height: 1140px;
    margin: auto;
    background-color: #2a3fec;
    z-index: -1;
    transform: scale(0);
    transition: transform 0.75s;
    @include for-size-max("extra-small") {
      top: 380px;
      transform-origin: center 70px;
    }
  }
  .works-desc {
    margin: 16px 0 65px;
    &-title,
    &-text {
      text-align: center;
      color: #fff;
      @include for-size-max("extra-small") {
        color: var(--baseBlack);
        text-align: left;
      }
    }
    @include for-size-max("extra-small") {
      margin-bottom: 32px;
      &-text {
        margin-top: 32px;
      }
    }
  }
  .works-figure {
    flex-direction: column;
    align-items: center;
    .ux-icon {
      position: relative;
      z-index: 10;
      max-width: 318px;
      animation: uxIcons 1s ease-in-out 0.75s infinite alternate;
      @include for-size-max("extra-small") {
        max-width: 150px;
      }
    }
    .ux-device {
      max-width: 535px;
      @include for-size-max("extra-small") {
        margin-top: -20px;
        max-width: 220px;
      }
    }
  }
  .device-text {
    position: absolute;
    top: 304px;
    width: 1140px;
    height: 1140px;
    @include for-size-max("extra-small") {
      top: 280px;
      width: 300px;
      height: 600px;
    }
    li {
      position: absolute;
    }
    @include for-size-min("extra-small") {
      .left {
        .device-text-uno {
          top: 518px;
          left: -54px;
          width: 282px;
          height: 54px;
        }
        .device-text-dos {
          top: 381px;
          left: 159px;
          width: 198px;
          height: 44px;
        }
        .device-text-tres {
          top: 743px;
          left: 176px;
          width: 141px;
          height: 36px;
        }
      }
      .right {
        .device-text-uno {
          right: -54px;
          top: 497px;
          width: 243px;
          height: 54px;
        }
        .device-text-dos {
          right: 24px;
          top: 280px;
          width: 193px;
          height: 54px;
        }
        .device-text-tres {
          right: 151px;
          top: 411px;
          width: 151px;
          height: 36px;
        }
        .device-text-quatro {
          right: 123px;
          top: 640px;
          width: 206px;
          height: 54px;
        }
      }
    }
    @include for-size-max("extra-small") {
      .left {
        .device-text-uno {
          top: 305px;
          left: 0;
          width: 100px;
          height: 27px;
        }
        .device-text-dos {
          top: 74px;
          left: 0;
          width: 96px;
          height: 22px;
        }
        .device-text-tres {
          top: 500px;
          left: 35px;
          width: 68px;
          height: 18px;
        }
      }
      .right {
        .device-text-uno {
          right: 17px;
          top: 312px;
          width: 93px;
          height: 27px;
        }
        .device-text-dos {
          right: 17px;
          top: 262px;
          width: 99px;
          height: 24px;
        }
        .device-text-tres {
          right: 31px;
          top: 421px;
          width: 74px;
          height: 18px;
        }
        .device-text-quatro {
          right: 123px;
          top: 640px;
          width: 206px;
          height: 54px;
        }
      }
    }
  }
}
.works-content.show {
  .section03 {
    .works-figure {
      opacity: 1;
      transform: translateY(0);
      &-content {
        .figure-cms01,
        .figure-cms03 {
          transform: translateX(0);
        }
        @include for-size-max("extra-small") {
          animation-play-state: running;
        }
      }
    }
  }
  .section08 {
    &::after {
      transform: scale(1);
      @include for-size-max("extra-small") {
        transform: scale(1.5);
      }
    }
  }
}

@keyframes uxIcons {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(-5px);
  }
}

@include for-size-max("small") {
  // 몰라
  .work-container .works-content {
    margin-top: 0;
  }
  .work-container {
    .works-desc {
      .works-desc-title {
        font-size: 24px;
        line-height: 30px;
      }
      .works-desc-text {
        font-size: 14px;
        line-height: 18px;
      }
    }

    .section01 {
      padding: 48px 32px;
    }

    .section03 {
      .works-desc {
        max-width: 80%;
        margin: 0 auto;
        gap: 32px;

        flex-direction: column;

        .works-desc-title {
          width: 100%;
          text-align: center;
        }
        .works-desc-text {
          margin-right: 0;
        }
      }
    }
    .section04 {
      padding: 48px 32px;
      .works-desc {
        gap: 32px;
        display: flex;
        flex-direction: column;
      }
    }
    .section05 {
      padding: 48px 32px;
      .works-desc {
        gap: 32px;
        display: flex;
        flex-direction: column;
      }
    }
    .section06 {
      padding: 48px 32px;
      .works-desc {
        gap: 32px;
        display: flex;
        flex-direction: column;
      }
    }
    .section07 {
      padding: 48px 32px;
      .works-desc {
        gap: 32px;
        display: flex;
        flex-direction: column;
      }
    }
    .section08 {
      margin-block: 0;
      padding: 48px 32px;
      .works-desc {
        gap: 32px;
        display: flex;
        flex-direction: column;
        .works-desc-text {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
