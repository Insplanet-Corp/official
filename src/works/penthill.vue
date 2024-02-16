<template>
  <div class="work-container">
    <!-- 공통 상단 영역 시작 -->
    <WorkContentCommon />
    <!-- 공통 상단 영역 종료 -->
    <div class="works-content">
      <img src="/works/penthill/image_pc_01.png" class="only-pc" />
      <img src="/works/penthill/image_mobile_01.png" class="only-mobile" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, defineProps } from "vue";
import WorkContentCommon from "@/views/WorkContentCommon.vue";
</script>
<style lang="scss"></style>
