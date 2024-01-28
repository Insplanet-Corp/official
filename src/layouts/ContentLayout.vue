<template>
  <div class="container-wp">
    <!-- <HeaderLayout /> -->
    <!-- 슬롯을 사용하여 내용을 삽입 -->
    <div class="content-area">
      <slot></slot>
    </div>
    <FooterLayout />
  </div>
</template>

<script setup>
// import HeaderLayout from "./HeaderLayout.vue";
import FooterLayout from "./FooterLayout.vue";
</script>

<style scoped></style>
