<script setup>
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { supabase } from "@/lib/supabase";
import {
  BROCHURE_BUCKET,
  BROCHURE_PATH,
  getBrochureFile,
  getBrochurePublicUrl,
} from "@/lib/brochure";

const current = ref(null); // 현재 storage 파일 메타
const currentUrl = ref("");
const selectedFile = ref(null);
const uploading = ref(false);
const loading = ref(false);

const formatBytes = (bytes) => {
  if (!bytes && bytes !== 0) return "-";
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${(bytes / 1024).toFixed(0)} KB`;
};

const formatDate = (iso) =>
  iso
    ? new Date(iso).toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "-";

const refresh = async () => {
  loading.value = true;
  try {
    const file = await getBrochureFile();
    current.value = file;
    if (file) {
      const version = file.updated_at || file.created_at || "";
      currentUrl.value = `${getBrochurePublicUrl()}?v=${encodeURIComponent(
        version
      )}`;
    } else {
      currentUrl.value = "";
    }
  } finally {
    loading.value = false;
  }
};

// el-upload 수동 업로드: 파일 선택만 받고 실제 업로드는 버튼으로 처리
const handleChange = (uploadFile) => {
  const raw = uploadFile.raw;
  if (raw && raw.type !== "application/pdf") {
    ElMessage.warning("PDF 파일만 업로드할 수 있습니다.");
    selectedFile.value = null;
    return;
  }
  selectedFile.value = raw;
};

const upload = async () => {
  if (!selectedFile.value) {
    ElMessage.warning("교체할 PDF 파일을 선택해 주세요.");
    return;
  }
  uploading.value = true;
  const { error } = await supabase.storage
    .from(BROCHURE_BUCKET)
    .upload(BROCHURE_PATH, selectedFile.value, {
      upsert: true,
      contentType: "application/pdf",
      cacheControl: "3600",
    });
  uploading.value = false;

  if (error) {
    ElMessage.error(`업로드 실패: ${error.message}`);
    return;
  }
  ElMessage.success("브로셔가 교체되었습니다.");
  selectedFile.value = null;
  await refresh();
};

onMounted(refresh);
</script>

<template>
  <div class="brochure">
    <h2 class="brochure-title">브로셔 교체</h2>
    <p class="brochure-help">
      회사 브로슈어(PDF)를 교체합니다. 업로드 즉시 사이트의 "회사 브로슈어
      다운로드" 버튼에 반영됩니다.
    </p>

    <el-card class="brochure-card" shadow="never" v-loading="loading">
      <template #header>현재 브로셔</template>
      <div v-if="current" class="brochure-current">
        <ul class="brochure-meta">
          <li><strong>파일명:</strong> {{ current.name }}</li>
          <li>
            <strong>크기:</strong>
            {{ formatBytes(current.metadata?.size) }}
          </li>
          <li>
            <strong>최종 수정:</strong>
            {{ formatDate(current.updated_at || current.created_at) }}
          </li>
        </ul>
        <el-button tag="a" :href="currentUrl" target="_blank" type="primary" plain>
          현재 브로셔 보기
        </el-button>
      </div>
      <div v-else class="brochure-empty">
        아직 Storage에 업로드된 브로셔가 없습니다. (사이트는 기본 번들 PDF를
        사용 중)
      </div>
    </el-card>

    <el-card class="brochure-card" shadow="never">
      <template #header>새 브로셔 업로드</template>
      <el-upload
        drag
        action="#"
        :auto-upload="false"
        :show-file-list="true"
        :limit="1"
        accept="application/pdf"
        :on-change="handleChange"
      >
        <div class="el-upload__text">
          PDF 파일을 끌어다 놓거나 <em>클릭하여 선택</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">PDF 형식만 업로드할 수 있습니다.</div>
        </template>
      </el-upload>
      <el-button
        type="primary"
        class="brochure-upload-btn"
        :loading="uploading"
        :disabled="!selectedFile"
        @click="upload"
      >
        브로셔 교체하기
      </el-button>
    </el-card>
  </div>
</template>

<style scoped>
.brochure-title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin: 0 0 8px;
}
.brochure-help {
  color: #86909c;
  font-size: 14px;
  margin: 0 0 20px;
}
.brochure-card {
  margin-bottom: 20px;
  max-width: 640px;
}
.brochure-meta {
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
  line-height: 1.9;
  color: #4e5969;
  font-size: 14px;
}
.brochure-empty {
  color: #86909c;
  font-size: 14px;
}
.brochure-upload-btn {
  margin-top: 16px;
}
</style>
