<template>
  <div class="router-wp">
    <ContentLayout>
      <RouterView v-slot="{ Component }">
        <div :class="transitionClass">
          <Transition
            :name="transitionName"
            @before-enter="onBeforeEnter"
            @after-enter="onAfterEnter"
          >
            <component :is="Component" class="container" />
          </Transition>
        </div>
      </RouterView>
    </ContentLayout>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import ContentLayout from "./layouts/ContentLayout.vue";
// import { useOfficialStore } from "@/stores/official";

const transitionName = ref("none");
const transitionClass = ref("transition-wp");
let isGoBack = false;

const route = useRoute();
// const officialStore = useOfficialStore();

watch(
  () => route.name,
  (to, from) => {
    transitionName.value = "none";
    if (isGoBack) {
      transitionName.value = "slide-left";
      isGoBack = false;
    } else {
      if (from === undefined) return;
      transitionName.value = "slide-right";
    }
  }
);

const onBeforeEnter = () => {
  transitionClass.value = "transition-wp onSlide";
};

const onAfterEnter = () => {
  transitionClass.value = "transition-wp";
};
</script>

<style></style>
