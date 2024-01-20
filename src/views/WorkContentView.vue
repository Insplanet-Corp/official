<template>
  <div v-html="externalHtml" class="externalHtml"></div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const router = useRoute();
const externalHtml = ref("work");

const workId = ref(router.params.workId);

const getWorkContent = async (value) => {
  const response = await axios.get(`/works/${value}.html`);
  externalHtml.value = response.data;
};

watch(router.params.workId, async (value) => {
  getWorkContent(value);
});

onMounted(async () => {
  getWorkContent(workId.value);
});
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
