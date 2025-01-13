<template>
  <div class="work-container jpdc">
    <!-- 공통 상단 영역 시작 -->
    <WorkContentCommon />
    <!-- 공통 상단 영역 종료 -->
    <div class="works-content">
      <img src="/works/jpdc/image_pc_01.jpg" class="only-pc" />
      <img src="/works/jpdc/image_mobile_01.jpg" class="only-mobile" />
    </div>
    <div class="works-content section02">
      <img src="/works/jpdc/image_pc_02.png" />
    </div>
    <div class="works-content section03">
      <img src="/works/jpdc/image_pc_03.png" />
    </div>
    <div class="works-content section04">
      <div class="imagebox">
        <img src="/works/jpdc/image_pc_04.png" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, defineProps } from "vue";

import WorkContentCommon from "@/views/WorkContentCommon.vue";
</script>
<style lang="scss">
@import "../assets/scss/response.scss";
.jpdc {
  .section02 {
    padding: 104px 0 112px;
    background-color: #0c0c0c;
    img {
      display: block;
      max-width: 960px;
      margin: 0 auto;
    }
  }
  .section03 {
  }
  .section04 {
    height: 970px;
    background-color: #eff0f1;
    overflow: hidden;
    position: relative;
    .imagebox {
      width: 1628px;
      height: 1181.33px;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}

@include for-size-max("small") {
  .jpdc {
    .section02 {
      padding: 40px 20px;
    }
    .section04 {
      height: 500px;
      .imagebox {
        transform: scale(0.5);
        transform-origin: -15% 0;
      }
    }
  }
}
</style>
