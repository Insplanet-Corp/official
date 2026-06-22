<script setup>
// 문의/방문자 분석/브로셔 교체를 한 페이지에 섹션으로 통합 전시.
// 각 컴포넌트는 독립적으로(onMounted) 데이터를 로드한다.
import AdminContacts from "./AdminContacts.vue";
import AdminAnalytics from "./AdminAnalytics.vue";
import AdminBrochure from "./AdminBrochure.vue";
</script>

<template>
  <div class="admin-dashboard">
    <section id="contacts" class="admin-section">
      <AdminContacts />
    </section>
    <section id="analytics" class="admin-section">
      <AdminAnalytics />
    </section>
    <section id="brochure" class="admin-section">
      <AdminBrochure />
    </section>
  </div>
</template>

<style scoped>
.admin-section {
  /* 헤더가 sticky 가 아니어도 앵커 점프 시 약간의 여유 */
  scroll-margin-top: 80px;
}
.admin-section + .admin-section {
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid #e5e6eb;
}
</style>
