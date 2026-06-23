<script setup>
import { ref, computed, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { supabase } from "@/lib/supabase";
import {
  BROCHURE_BUCKET,
  BROCHURE_PATH,
  STORAGE_QUOTA_BYTES,
  STORAGE_WARN_RATIO,
  getBrochureFile,
  getBrochurePublicUrl,
  getBucketUsage,
  getBrochureHistory,
  addBrochureHistory,
} from "@/lib/brochure";

const current = ref(null); // 현재 storage 파일 메타
const currentUrl = ref("");
const selectedFile = ref(null);
const uploading = ref(false);
const loading = ref(false);

const history = ref([]); // 교체 이력 (DB)
const historyLoading = ref(false);
// 이력 최신 = 현재 브로셔
const currentHistoryId = computed(() => history.value[0]?.id ?? null);

const usageBytes = ref(0);
const usageLoading = ref(false);

const usagePercent = computed(() =>
  Math.min(100, Math.round((usageBytes.value / STORAGE_QUOTA_BYTES) * 100))
);
const usageOverWarn = computed(
  () => usageBytes.value >= STORAGE_QUOTA_BYTES * STORAGE_WARN_RATIO
);
const usageBarColor = computed(() => (usageOverWarn.value ? "#f56c6c" : "#0066cc"));

const formatBytes = (bytes) => {
  if (!bytes && bytes !== 0) return "-";
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${(bytes / 1024).toFixed(0)} KB`;
};

const refreshUsage = async () => {
  usageLoading.value = true;
  try {
    usageBytes.value = await getBucketUsage();
    if (usageOverWarn.value) {
      ElMessage.warning(
        `스토리지 사용량이 ${usagePercent.value}%입니다. (${formatBytes(
          usageBytes.value
        )} / 1GB) 정리가 필요할 수 있습니다.`
      );
    }
  } finally {
    usageLoading.value = false;
  }
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

const refreshHistory = async () => {
  historyLoading.value = true;
  try {
    let rows = await getBrochureHistory();
    // 이력이 비어 있고 현재 파일이 있으면 1건 시드(기존 파일을 첫 이력으로)
    if (rows.length === 0 && current.value) {
      await addBrochureHistory({
        file_name: current.value.name,
        size: current.value.metadata?.size ?? null,
        uploaded_at: current.value.updated_at || current.value.created_at,
      });
      rows = await getBrochureHistory();
    }
    history.value = rows;
  } finally {
    historyLoading.value = false;
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
  // 교체 이력 기록 (파일은 덮어쓰기되어 1개만 유지, 메타만 누적)
  await addBrochureHistory({
    file_name: selectedFile.value.name,
    size: selectedFile.value.size,
  });

  ElMessage.success("브로셔가 교체되었습니다.");
  selectedFile.value = null;
  await refresh();
  await refreshHistory();
  await refreshUsage();
};

onMounted(async () => {
  await refresh();
  await refreshHistory();
  await refreshUsage();
});
</script>

<template>
  <div class="brochure">
    <h2 class="brochure-title">브로셔 교체</h2>
    <p class="brochure-help">
      회사 브로슈어(PDF)를 교체합니다. 업로드 즉시 사이트의 "회사 브로슈어
      다운로드" 버튼에 반영됩니다.
    </p>

    <el-card class="brochure-card" shadow="never" v-loading="usageLoading">
      <template #header>스토리지 사용량</template>
      <div class="storage-usage">
        <div class="storage-line">
          <span class="storage-num" :class="{ warn: usageOverWarn }">
            {{ formatBytes(usageBytes) }}
          </span>
          <span class="storage-total">/ 1GB ({{ usagePercent }}%)</span>
        </div>
        <el-progress
          :percentage="usagePercent"
          :color="usageBarColor"
          :stroke-width="10"
          :show-text="false"
        />
        <p v-if="usageOverWarn" class="storage-warn">
          ⚠ 사용량이 {{ Math.round(STORAGE_WARN_RATIO * 100) }}%를 넘었습니다.
          오래된 파일을 정리하거나 플랜 업그레이드를 검토하세요.
        </p>
        <p v-else class="storage-help">
          무료 플랜 1GB 기준. 브로셔는 교체 시 덮어쓰기 되어 누적되지 않습니다.
        </p>
      </div>
    </el-card>

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

    <el-card class="brochure-card" shadow="never" v-loading="historyLoading">
      <template #header>교체 히스토리</template>
      <el-table
        :data="history"
        size="small"
        empty-text="교체 이력이 없습니다."
      >
        <el-table-column prop="file_name" label="파일명" min-width="200" show-overflow-tooltip />
        <el-table-column label="크기" width="100">
          <template #default="{ row }">{{ formatBytes(row.size) }}</template>
        </el-table-column>
        <el-table-column label="교체일시" width="170">
          <template #default="{ row }">{{ formatDate(row.uploaded_at) }}</template>
        </el-table-column>
        <el-table-column label="상태" width="80">
          <template #default="{ row }">
            <el-tag v-if="row.id === currentHistoryId" type="success" size="small">
              현재
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
      <p class="history-note">
        실제 PDF는 1개만 보관(덮어쓰기)되며, 이전 버전 파일은 저장하지 않고
        교체 기록만 남깁니다.
      </p>
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
  font-family: inherit;
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
.history-note {
  color: #86909c;
  font-size: 13px;
  margin: 14px 0 0;
  line-height: 1.6;
}
.storage-usage {
  font-size: 14px;
}
.storage-line {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 10px;
}
.storage-num {
  font-size: 20px;
  font-weight: 600;
  color: #1d1d1f;
}
.storage-num.warn {
  color: #f56c6c;
}
.storage-total {
  color: #86909c;
}
.storage-warn {
  color: #f56c6c;
  margin: 12px 0 0;
  line-height: 1.6;
}
.storage-help {
  color: #86909c;
  margin: 12px 0 0;
  line-height: 1.6;
}
</style>
