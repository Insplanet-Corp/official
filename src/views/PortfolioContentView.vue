<template>
  <div>
    <div>Portfolio</div>
    <div v-html="externalHtml" class="externalHtml"></div>

    <div class="lets-work">Let’s work together</div>
    <div class="more-project">more projects</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const router = useRoute()
const externalHtml = ref('portfolio')

const portfolioId = ref(router.params.portfolioId)

const getPortfolioContent = async (value) => {
  const response = await axios.get(`/portfolios/${value}.html`)
  externalHtml.value = response.data
}

watch(router.params.portfolioId, async (value) => {
  getPortfolioContent(value)
})

onMounted(async () => {
  getPortfolioContent(portfolioId.value)
})
</script>

<style>
img {
  max-width: 100%;
}
.externalHtml {
  min-height: 500px;
  background: rgb(255, 228, 232);
}
.lets-work {
  height: 200px;
  border: 1px solid green;
}
.more-project {
  height: 200px;
  border: 1px solid green;
}
</style>
