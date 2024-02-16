<template>
  <div class="work-container">
    <!-- 공통 상단 영역 시작 -->
    <WorkContentCommon />
    <!-- 공통 상단 영역 종료 -->
    <div class="works-content" data-aos="fade-up">
      <img src="/works/shinhan/image_pc_01.png" class="only-pc" />
      <img src="/works/shinhan/image_mobile_01.png" class="only-mobile" />
    </div>
    <div class="works-content" data-aos="fade-up">
      <img src="/works/shinhan/image_pc_02.png" class="only-pc" />
      <img src="/works/shinhan/image_mobile_02.png" class="only-mobile" />
    </div>
    <div class="works-content" data-aos="fade-up">
      <img src="/works/shinhan/image_pc_03.png" class="only-pc" />
      <img src="/works/shinhan/image_mobile_03.png" class="only-mobile" />
    </div>
    <div class="works-content" data-aos="fade-up">
      <img src="/works/shinhan/image_pc_04.png" class="only-pc" />
      <img src="/works/shinhan/image_mobile_04.png" class="only-mobile" />
    </div>
    <div class="works-content" data-aos="fade-up">
      <img src="/works/shinhan/image_pc_05.png" class="only-pc" />
      <img src="/works/shinhan/image_mobile_05.png" class="only-mobile" />
    </div>
    <div class="works-content" data-aos="fade-up">
      <img src="/works/shinhan/image_pc_06.png" class="only-pc" />
      <img src="/works/shinhan/image_mobile_06.png" class="only-mobile" />
    </div>
    <div class="works-content" data-aos="fade-up">
      <img src="/works/shinhan/image_pc_07.png" class="only-pc" />
      <img src="/works/shinhan/image_mobile_07.png" class="only-mobile" />
    </div>
    <div class="works-content" data-aos="fade-up">
      <img src="/works/shinhan/image_pc_08.png" class="only-pc" />
      <img src="/works/shinhan/image_mobile_08.png" class="only-mobile" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, defineProps } from "vue";
import AOS from "aos";
import WorkContentCommon from "@/views/WorkContentCommon.vue";

onMounted(() => {
  AOS.init({
    duration: 1200,
    delay: 500,
  });
});
</script>
<style lang="scss"></style>
