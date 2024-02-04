<template>
  <div class="work-container">
    <!-- 공통 상단 영역 시작 -->
    <WorkContentCommon :detail="detail" />
    <!-- 공통 상단 영역 종료 -->
  </div>
</template>
<script setup>
import { onMounted, defineProps } from "vue";
import WorkContentCommon from "@/views/WorkContentCommon.vue";

const props = defineProps({
  workData: Object,
});
const detail = props.workData.detail;
</script>
<style lang="scss"></style>
