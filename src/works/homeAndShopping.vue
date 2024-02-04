<template>
  <div class="work-container">
    <!-- 공통 상단 영역 시작 -->
    <div class="works-image">
      <img :src="detail.coverPc" class="only-pc" />
      <img :src="detail.coverMobile" class="only-mobile" />
    </div>
    <div class="works-section works-slide-show">
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
      <img src="/works/homeAndShopping/image_pc_01.png" class="only-pc" />
      <img
        src="/works/homeAndShopping/image_mobile_01.png"
        class="only-mobile"
      />
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
<style lang="scss"></style>
