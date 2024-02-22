<template>
  <div class="page-wp work">
    <div class="page-hero-title">
      <p>
        All projects
        <span>{{ workList.length }}</span>
      </p>
    </div>
    <div class="page-content all-project" ref="pageContent">
      <ul>
        <li v-for="(work, index) in workListPerCount">
          <div class="projectName">{{ work.projectName }}</div>
          <div class="projectClient">{{ work.projectClient }}</div>
          <div class="projectType">{{ work.projectType }}</div>
          <div class="projectYear">{{ work.projectYear }}</div>
          <div class="projectLink">
            <RouterLink :to="work.link" class="btn-projectLink" v-if="work.link"
              ><p>상세보기</p>
              <span><img src="/assets/images/project_arrow.svg" /></span
            ></RouterLink>
          </div>
        </li>
        <!-- <li><RouterLink to="/work/shinhan">shinhan</RouterLink></li>
        <li><RouterLink to="/work/kb">kb</RouterLink></li>
        <li><RouterLink to="/work/woori">woori</RouterLink></li> -->
      </ul>
    </div>
    <div class="content-footer">
      <button @click="moreProjects" class="more-projects">
        more ({{ workList.length - workListPerCount.length }})
      </button>
    </div>

    <!-- infiniti scroll 더보기 기능 추가 -->
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from "vue";
import worksSetting from "@/works-setting";
const { worksSettingList } = worksSetting;
const perCount = 10;
const nowCount = ref(perCount);
const workList = ref(worksSettingList.filter((e) => e.use));
const pageContent = ref(null);
// const workListPerCount = ref(worksSettingList.slice(0, 21));
const workListPerCount = computed(() =>
  workList.value.slice(0, nowCount.value)
);

const moreProjects = () => {
  nowCount.value += perCount;
  nextTick(() => {
    window.scrollTo({ top: 9999, behavior: "smooth" });
  });
};
</script>

<style lang="scss" scoped></style>
