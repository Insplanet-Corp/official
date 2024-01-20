<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
    </nav>
  </header>

  <div class="wp-router">
    <RouterView v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" class="container" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
let transitionName = ref('none')
let isGoBack = false
const route = useRoute()
// window.addEventlistener('popstate', () => {
//   isGoBack = true
// })

watch(
  () => route.name,
  (to, from) => {
    // 우선 효과 없는 상태로 초기화
    transitionName.value = 'none'
    if (isGoBack) {
      // 뒤로가기
      transitionName.value = 'slide-left'
      isGoBack = false
    } else {
      // 페이지 이동
      if (from === undefined) return // 새로고침인 경우
      transitionName.value = 'slide-right'
    }
  }
)
</script>

<style></style>
