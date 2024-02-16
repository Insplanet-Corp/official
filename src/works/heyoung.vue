<template>
  <div class="work-container">
    <!-- 공통 상단 영역 시작 -->
    <WorkContentCommon />
    <!-- 공통 상단 영역 종료 -->
    <div class="works-content">
      <img src="/works/heyoung/image_pc_01.png" class="only-pc" />
      <img src="/works/heyoung/image_mobile_01.png" class="only-mobile" />
    </div>
    <div class="works-content">
      <img src="/works/heyoung/image_pc_02.png" class="only-pc" />
      <img src="/works/heyoung/image_mobile_02.png" class="only-mobile" />
    </div>
    <div class="works-content">
      <img src="/works/heyoung/image_pc_03.png" class="only-pc" />
      <img src="/works/heyoung/image_mobile_03.png" class="only-mobile" />
    </div>
    <div class="works-content">
      <img src="/works/heyoung/image_pc_04.png" class="only-pc" />
      <img src="/works/heyoung/image_mobile_04.png" class="only-mobile" />
    </div>
    <div class="works-content">
      <img src="/works/heyoung/image_pc_05.png" class="only-pc" />
      <img src="/works/heyoung/image_mobile_05.png" class="only-mobile" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, defineProps } from "vue";
import WorkContentCommon from "@/views/WorkContentCommon.vue";
</script>
<style lang="scss"></style>
