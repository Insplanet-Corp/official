<template>
  <section class="works-image">
    <img :src="detail.coverPc" class="only-pc" />
    <img :src="detail.coverMobile" class="only-mobile" />
  </section>
  <section class="works-content">
    <div class="works-section works-slide-show">
      <div class="works-inner">
        <section class="works-box">
          <h3 class="work-title" v-html="detail.title"></h3>
          <p class="work-subtitle" v-html="detail.subtitle"></p>
          <div class="btn-wrap">
            <!-- <a :href="detail.viewplatform" class="btn-view">View Platform<i class="ico-view"></i></a> -->
          </div>
        </section>
        <section class="works-box">
          <b class="work-description-key">Overview</b>
          <p class="work-description-value" v-html="detail.overview"></p>
          <div class="sub-wrap">
            <div v-for="(value, key) in subDetails" :key="key" class="sub-box">
              <em class="work-description-key">{{ key }}</em>
              <span class="work-description-value" v-html="value"></span>
            </div>
            <div style="width: 100%">
              <em class="work-description-key">UIUX</em>
              <span class="work-description-value" v-html="detail.uiux"></span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineProps, onMounted, watch } from "vue";
import { useOfficialStore } from "@/stores/official";

const officialStore = useOfficialStore();
const workData = officialStore.workPageDetail;
const detail = ref(workData.detail);

const subDetails = ref({
  Launch: detail.value.launch,
  Client: detail.value.client,
  Device: detail.value.device,
});

watch(
  () => officialStore.workPageDetail,
  (newVal) => {
    detail.value = newVal.detail;
    subDetails.value = {
      Launch: detail.value.launch,
      Client: detail.value.client,
      Device: detail.value.device,
    };
  }
);

onMounted(() => {});
</script>
