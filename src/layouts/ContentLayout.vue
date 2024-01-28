<template>
  <div class="container-wp">
    <!-- <HeaderLayout /> -->
    <!-- 슬롯을 사용하여 내용을 삽입 -->
    <div class="content-area" :class="officialStore.pageType">
      <slot></slot>
    </div>
    <FooterLayout />
  </div>
</template>

<script setup>
import { ref } from "vue";
// import HeaderLayout from "./HeaderLayout.vue";
import FooterLayout from "./FooterLayout.vue";

import { useOfficialStore } from "@/stores/official";

const officialStore = useOfficialStore();
</script>

<style scoped></style>
