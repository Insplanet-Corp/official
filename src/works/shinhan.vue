<template>
  <div class="work-container">
    <!-- 공통 상단 영역 시작 -->
    <div class="works-image">
      <img :src="detail.coverPc" class="only-pc" />
      <img :src="detail.coverMobile" class="only-mobile" />
    </div>
    <div class="works-section">
      <div class="works-inner">
        <div class="works-box">
          <h3 class="project-title" v-html="detail.title"></h3>
          <div class="project-text" v-html="detail.subtitle"></div>
          <div class="btn-wrap">
            <a :href="detail.viewplatform" class="btn-view"
              >View Platform<i class="ico-view"></i
            ></a>
          </div>
          <div class="btn-wrap">
            <a href="#" class="btn-copy">Copy URL <i class="ico-link"></i></a>
          </div>
        </div>
        <div class="works-box">
          <strong class="sub-title">Overview</strong>
          <div class="sub-text" v-html="detail.overview"></div>
          <div class="sub-wrap">
            <div class="sub-box">
              <em class="sub-title">Launch</em>
              <div class="sub-text" v-html="detail.launch"></div>
            </div>
            <div class="sub-box">
              <em class="sub-title">Client</em>
              <div clas="sub-text" v-html="detail.client"></div>
            </div>
            <div class="sub-box">
              <em class="sub-title">Device</em>
              <div class="sub-text" v-html="detail.device"></div>
            </div>
          </div>
          <div class="mt-30">
            <em class="sub-title">UIUX</em>
            <div class="sub-text" v-html="detail.uiux"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 공통 상단 영역 종료 -->
    <div class="works-content">
      <img src="/works/shinhan/image_pc_01.png" class="only-pc" />
      <img src="/works/shinhan/image_mobile_01.png" class="only-mobile" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, defineProps } from "vue";

const props = defineProps({
  workData: Object,
});
const detail = props.workData.detail;
</script>
<style lang="scss">
.work-container {
  img {
    width: 100%;
  }
}
.only-pc {
  display: none;
}
@media (min-width: 768px) {
  .only-mobile {
    display: none;
  }
  .only-pc {
    display: block;
  }
}

.works-content {
  margin-top: 32px;
}

.works-section {
  margin-top: 12px;
  background: #fff;
  border-radius: 16px;
  padding: 48px 24px;
  color: #0c0c0c;
}
.project-title {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
}
.project-text {
  margin-top: 16px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
}

.sub-title {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 128.571% */
}

.sub-text {
  margin-top: 8px;
  margin-bottom: 24px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
}

@media (min-width: 768px) {
  .works-section {
    margin-top: 32px;
    padding: 176px 24px;
    .works-inner {
      display: flex;
      justify-content: center;
      max-width: 1120px;
      margin: auto;
    }
    .works-box {
      width: 50%;
    }
    .project-title {
      font-family: "Pretendard";
      font-size: 64px;
      font-style: normal;
      font-weight: 900;
      line-height: 78px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .project-text {
      margin-top: 32px;
      font-size: 36px;
      line-height: 46px;
    }
    .btn-wrap {
      margin-top: 46px;
      & + .btn-wrap {
        margin-top: 16px;
      }
      .btn-view {
        display: inline-block;
        border: 1px solid #0c0c0c;
        background: #0c0c0c;
        border-radius: 32px;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        height: 40px;
        line-height: 40px;
        width: 175px;
        font-family: "Chillax-Variable";
        padding-left: 19px;
      }
      .btn-copy {
        display: inline-block;
        border: 1px solid #0c0c0c;
        background: #fff;
        border-radius: 32px;
        font-size: 14px;
        font-weight: 700;
        color: #0c0c0c;
        height: 40px;
        line-height: 40px;
        width: 140px;
        font-family: "Chillax-Variable";
        padding-left: 19px;
      }
      .ico-view {
        display: inline-block;
        width: 24px;
        height: 24px;
        background: url("../assets/images/ico/ico-view.png") no-repeat 0 0;
        vertical-align: -8px;
        margin-left: 10px;
      }
      .ico-link {
        display: inline-block;
        width: 24px;
        height: 24px;
        background: url("../assets/images/ico/ico-link.png") no-repeat 0 0;
        vertical-align: -6px;
        margin-left: 10px;
      }
    }
    .sub-wrap {
      display: flex;
      margin-top: 104px;
      .sub-box {
        flex: 1;
      }
    }
    .sub-title {
      display: block;
      font-family: "Pretendard";
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
    }
    .sub-text {
      display: block;
      margin-top: 8px;
      font-family: "Pretendard";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
    .mt-30 {
      margin-top: 30px;
    }
    .br_pc {
      display: block;
    }
  }
}

@media (max-width: 768px) {
  .works-content {
    width: 100%;
  }
  .br_pc {
    display: block;
  }
}
</style>
