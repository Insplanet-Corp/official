<script setup>
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { supabase } from "@/lib/supabase";

const SYSTEM_TYPES = [
  "전체",
  "웹사이트",
  "앱",
  "AI",
  "CMS",
  "시스템",
  "플랫폼개발",
  "이커머스",
  "브랜딩",
  "연간 유지보수",
  "기타",
];
const DEV_TYPES = ["신규", "리뉴얼", "부분개편", "컨설팅", "기타"];

const form = reactive({
  name: "",
  email: "",
  phone: "",
  company: "",
  systemTypes: [],
  devType: "",
  message: "",
});
const agreed = ref(false);
const submitting = ref(false);
const done = ref(false);

const submit = async () => {
  if (!form.name.trim() || !form.message.trim()) {
    ElMessage.warning("이름과 문의 내용을 입력해 주세요.");
    return;
  }
  if (!form.email.trim() && !form.phone.trim()) {
    ElMessage.warning("이메일 또는 연락처 중 하나는 입력해 주세요.");
    return;
  }
  if (!agreed.value) {
    ElMessage.warning("개인정보 수집·이용에 동의해 주세요.");
    return;
  }

  submitting.value = true;
  const { error } = await supabase.from("contacts").insert({
    name: form.name.trim(),
    email: form.email.trim() || null,
    phone: form.phone.trim() || null,
    company: form.company.trim() || null,
    system_types: form.systemTypes.length ? form.systemTypes : null,
    dev_type: form.devType || null,
    message: form.message.trim(),
    privacy_agreed_at: new Date().toISOString(),
  });
  submitting.value = false;

  if (error) {
    ElMessage.error("문의 접수에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    return;
  }
  done.value = true;
};
</script>

<template>
  <section class="contact-page">
    <div class="contact-inner">
      <div class="contact-head">
        <p class="contact-eyebrow">CONTACT</p>
        <h1 class="contact-title">프로젝트 문의</h1>
        <p class="contact-desc">
          궁금한 점이나 함께하고 싶은 프로젝트가 있다면 남겨주세요.<span class="br_pc"></span>
          확인 후 빠르게 회신드리겠습니다.
        </p>
      </div>

      <div v-if="done" class="contact-done">
        <h2>문의가 접수되었습니다.</h2>
        <p>소중한 문의 감사합니다. 입력하신 연락처로 회신드리겠습니다.</p>
      </div>

      <el-form v-else class="contact-form" label-position="top" @submit.prevent="submit">
        <el-form-item label="이름 / 담당자명" required>
          <el-input v-model="form.name" size="large" placeholder="홍길동" />
        </el-form-item>

        <div class="contact-row">
          <el-form-item label="이메일">
            <el-input
              v-model="form.email"
              size="large"
              type="email"
              placeholder="name@example.com"
            />
          </el-form-item>
          <el-form-item label="연락처">
            <el-input v-model="form.phone" size="large" placeholder="010-0000-0000" />
          </el-form-item>
        </div>

        <el-form-item label="회사 / 소속">
          <el-input v-model="form.company" size="large" placeholder="(선택)" />
        </el-form-item>

        <el-form-item label="시스템 종류 (중복 선택 가능)">
          <el-checkbox-group v-model="form.systemTypes" class="toggle-group">
            <el-checkbox-button v-for="opt in SYSTEM_TYPES" :key="opt" :label="opt">
              {{ opt }}
            </el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="개발 구분">
          <el-radio-group v-model="form.devType" class="toggle-group">
            <el-radio-button v-for="opt in DEV_TYPES" :key="opt" :label="opt">
              {{ opt }}
            </el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="문의 내용" required>
          <el-input
            v-model="form.message"
            type="textarea"
            :rows="6"
            placeholder="프로젝트 개요, 일정, 예산 등을 자유롭게 작성해 주세요."
          />
        </el-form-item>

        <div class="contact-consent">
          <p class="consent-title">개인정보 수집·이용 동의</p>
          <div class="consent-box">
            <table class="consent-table">
              <tbody>
                <tr>
                  <th>수집 항목</th>
                  <td>이름, 이메일, 연락처, 회사/소속, 문의 내용</td>
                </tr>
                <tr>
                  <th>수집 목적</th>
                  <td>문의 접수 및 답변, 상담 진행</td>
                </tr>
                <tr>
                  <th>보유 기간</th>
                  <td>문의 처리 완료 후 3년간 보관 후 파기</td>
                </tr>
              </tbody>
            </table>
            <p class="consent-note">
              ※ 위 개인정보 수집·이용에 동의하지 않으실 수 있으며, 동의하지 않을 경우
              문의 접수가 제한됩니다.
            </p>
          </div>
          <el-checkbox v-model="agreed" size="large">
            개인정보 수집·이용에 동의합니다. (필수)
          </el-checkbox>
        </div>

        <el-button
          type="primary"
          size="large"
          class="contact-submit"
          :loading="submitting"
          @click="submit"
        >
          문의 보내기
        </el-button>
      </el-form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-page {
  width: 100%;
  min-height: 100vh;
  padding: 160px 24px 120px;
  background: #fff;
  color: #111;
}
.contact-inner {
  max-width: 560px;
  margin: 0 auto;
}
.contact-head {
  margin-bottom: 48px;
}
.contact-eyebrow {
  font-size: 14px;
  letter-spacing: 0.1em;
  color: #888;
  margin: 0 0 12px;
}
.contact-title {
  font-size: 40px;
  font-weight: 700;
  margin: 0 0 16px;
}
.contact-desc {
  font-size: 16px;
  line-height: 1.7;
  color: #555;
}
.contact-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
/* 토글 버튼 그룹: 연결형이 아닌 개별 pill 형태로 줄바꿈 */
.toggle-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}
.toggle-group :deep(.el-checkbox-button),
.toggle-group :deep(.el-radio-button) {
  margin: 0;
}
.toggle-group :deep(.el-checkbox-button__inner),
.toggle-group :deep(.el-radio-button__inner) {
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  box-shadow: none !important;
  padding: 9px 16px;
}
.contact-consent {
  margin: 8px 0 28px;
}
.consent-title {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 10px;
}
.consent-box {
  border: 1px solid #e5e6eb;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 14px;
  background: #fafafa;
}
.consent-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  line-height: 1.6;
}
.consent-table th,
.consent-table td {
  text-align: left;
  vertical-align: top;
  padding: 6px 8px;
}
.consent-table th {
  width: 92px;
  color: #4e5969;
  font-weight: 600;
  white-space: nowrap;
}
.consent-table td {
  color: #1f2329;
}
.consent-note {
  font-size: 12px;
  color: #86909c;
  margin: 12px 0 0;
  line-height: 1.6;
}
.contact-submit {
  width: 100%;
}
.contact-done {
  padding: 80px 0;
  text-align: center;
}
.contact-done h2 {
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 14px;
}
.contact-done p {
  color: #555;
  font-size: 16px;
}

@media (max-width: 600px) {
  .contact-page {
    padding: 120px 20px 80px;
  }
  .contact-title {
    font-size: 30px;
  }
  .contact-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
