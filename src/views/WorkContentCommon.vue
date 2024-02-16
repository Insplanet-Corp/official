<template>
  <div class="works-image">
    <img :src="detail.coverPc" class="only-pc" />
    <img :src="detail.coverMobile" class="only-mobile" />
  </div>
  <div class="works-section works-slide-show" data-aos="fade-up">
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
            <div class="sub-text" v-html="detail.client"></div>
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
</template>

<script setup>
import { defineProps, onMounted } from "vue";
import AOS from "aos";
const props = defineProps({
  detail: Object,
});
const detail = props.detail;

onMounted(() => {
  AOS.init({
    duration: 1200,
    delay: 500,
    offset: 400,
  });
});
</script>
