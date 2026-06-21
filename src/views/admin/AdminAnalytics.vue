<script setup>
import { ref, computed, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { supabase } from "@/lib/supabase";
import { isOptedOut, setOptOut, getMyIp } from "@/lib/analytics";
import worksSetting from "@/works-setting";

// 경로 → 보기 좋은 라벨 매핑
const cleanTitle = (t) =>
  (t || "")
    .replace(/<[^>]*>/g, " ") // HTML 태그 제거
    .replace(/\s+/g, " ")
    .trim();

const workNameByPath = {};
worksSetting.worksSettingList.forEach((w) => {
  if (w.link) workNameByPath[w.link] = cleanTitle(w.detail?.title) || w.name;
});
const staticLabels = { "/": "홈", "/work": "작품 목록", "/contact": "문의" };
const labelOf = (path) => workNameByPath[path] || staticLabels[path] || path;

const rangeDays = ref(30);
const rangeOptions = [
  { label: "7일", value: 7 },
  { label: "14일", value: 14 },
  { label: "30일", value: 30 },
];

const rows = ref([]);
const downloads = ref([]);
const loading = ref(false);
const optedOut = ref(isOptedOut());

const fetchData = async () => {
  loading.value = true;
  const since = new Date();
  since.setDate(since.getDate() - rangeDays.value);
  const sinceIso = since.toISOString();

  const [pv, dl] = await Promise.all([
    supabase
      .from("pageviews")
      .select("created_at, path, referrer_host, visitor_id, utm_source")
      .gte("created_at", sinceIso)
      .order("created_at", { ascending: false })
      .limit(50000),
    supabase
      .from("downloads")
      .select("created_at, item, path, visitor_id")
      .gte("created_at", sinceIso)
      .limit(50000),
  ]);
  loading.value = false;

  if (pv.error) {
    ElMessage.error(pv.error.message);
    return;
  }
  rows.value = pv.data;
  // downloads 테이블/함수 미배포 시 에러는 무시 (0 으로 표시)
  downloads.value = dl.error ? [] : dl.data;
};

const brochureDownloads = computed(
  () => downloads.value.filter((d) => d.item === "brochure").length
);

const totalViews = computed(() => rows.value.length);
const uniqueVisitors = computed(
  () => new Set(rows.value.map((r) => r.visitor_id).filter(Boolean)).size
);
const todayViews = computed(() => {
  const today = new Date().toLocaleDateString("sv-SE"); // YYYY-MM-DD
  return rows.value.filter(
    (r) => new Date(r.created_at).toLocaleDateString("sv-SE") === today
  ).length;
});

// 일별 추이 (최근 rangeDays)
const dailyTrend = computed(() => {
  const counts = {};
  for (let i = rangeDays.value - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    counts[d.toLocaleDateString("sv-SE")] = 0;
  }
  rows.value.forEach((r) => {
    const key = new Date(r.created_at).toLocaleDateString("sv-SE");
    if (key in counts) counts[key] += 1;
  });
  return Object.entries(counts).map(([date, count]) => ({ date, count }));
});
const dailyMax = computed(() =>
  Math.max(1, ...dailyTrend.value.map((d) => d.count))
);

const topBy = (key, { mapper } = {}) => {
  const counts = {};
  rows.value.forEach((r) => {
    const raw = mapper ? mapper(r) : r[key];
    if (!raw) return;
    counts[raw] = (counts[raw] || 0) + 1;
  });
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
};

const topPaths = computed(() =>
  topBy("path").map((r) => ({ ...r, label: labelOf(r.name) }))
);
const topReferrers = computed(() => topBy("referrer_host"));

// 작품(work) 페이지 전체 조회수
const workStats = computed(() => {
  const counts = {};
  rows.value.forEach((r) => {
    if (r.path && r.path.startsWith("/work/"))
      counts[r.path] = (counts[r.path] || 0) + 1;
  });
  return Object.entries(counts)
    .map(([path, count]) => ({ path, name: labelOf(path), count }))
    .sort((a, b) => b.count - a.count);
});

const onRangeChange = () => fetchData();

const toggleOptOut = (val) => {
  setOptOut(val);
  optedOut.value = val;
  ElMessage.success(
    val ? "이 브라우저는 집계에서 제외됩니다." : "집계 제외가 해제되었습니다."
  );
};

// ── 내부 IP 관리 ──────────────────────────────
const internalIps = ref([]);
const ipsLoading = ref(false);
const newIp = ref("");
const newLabel = ref("");
const myIp = ref("");
const detectingIp = ref(false);

const fetchInternalIps = async () => {
  ipsLoading.value = true;
  const { data, error } = await supabase
    .from("internal_ips")
    .select("*")
    .order("created_at", { ascending: false });
  ipsLoading.value = false;
  if (error) {
    ElMessage.error(error.message);
    return;
  }
  internalIps.value = data;
};

const detectMyIp = async () => {
  detectingIp.value = true;
  try {
    const ip = await getMyIp();
    if (ip) {
      myIp.value = ip;
      newIp.value = ip;
      ElMessage.success(`현재 IP: ${ip}`);
    } else {
      ElMessage.warning("IP를 확인하지 못했습니다.");
    }
  } catch (err) {
    ElMessage.error(`IP 확인 실패: ${err.message || "track 함수 배포 확인"}`);
  } finally {
    detectingIp.value = false;
  }
};

const addIp = async () => {
  const ip = newIp.value.trim();
  if (!ip) {
    ElMessage.warning("IP를 입력하세요.");
    return;
  }
  const { error } = await supabase
    .from("internal_ips")
    .insert({ ip, label: newLabel.value.trim() || null });
  if (error) {
    ElMessage.error(
      error.code === "23505" ? "이미 등록된 IP입니다." : error.message
    );
    return;
  }
  ElMessage.success("내부 IP가 추가되었습니다.");
  newIp.value = "";
  newLabel.value = "";
  await fetchInternalIps();
};

const removeIp = async (row) => {
  const { error } = await supabase
    .from("internal_ips")
    .delete()
    .eq("id", row.id);
  if (error) {
    ElMessage.error(error.message);
    return;
  }
  internalIps.value = internalIps.value.filter((r) => r.id !== row.id);
  ElMessage.success("삭제되었습니다.");
};

onMounted(() => {
  fetchData();
  fetchInternalIps();
});
</script>

<template>
  <div class="analytics">
    <div class="analytics-head">
      <h2 class="analytics-title">방문자 분석</h2>
      <div class="analytics-actions">
        <el-radio-group v-model="rangeDays" size="small" @change="onRangeChange">
          <el-radio-button
            v-for="opt in rangeOptions"
            :key="opt.value"
            :value="opt.value"
          >
            {{ opt.label }}
          </el-radio-button>
        </el-radio-group>
        <el-button size="small" :loading="loading" @click="fetchData">
          새로고침
        </el-button>
      </div>
    </div>

    <div v-loading="loading">
      <!-- 요약 카드 -->
      <div class="stat-cards">
        <div class="stat-card">
          <span class="stat-label">총 페이지뷰</span>
          <strong class="stat-value">{{ totalViews.toLocaleString() }}</strong>
          <span class="stat-sub">최근 {{ rangeDays }}일</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">순 방문자</span>
          <strong class="stat-value">{{
            uniqueVisitors.toLocaleString()
          }}</strong>
          <span class="stat-sub">익명 식별자 기준</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">오늘 페이지뷰</span>
          <strong class="stat-value">{{ todayViews.toLocaleString() }}</strong>
          <span class="stat-sub">{{
            new Date().toLocaleDateString("ko-KR")
          }}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">브로슈어 다운로드</span>
          <strong class="stat-value">{{
            brochureDownloads.toLocaleString()
          }}</strong>
          <span class="stat-sub">최근 {{ rangeDays }}일</span>
        </div>
      </div>

      <!-- 일별 추이 -->
      <el-card class="panel" shadow="never">
        <template #header>일별 추이</template>
        <div class="trend">
          <div v-for="d in dailyTrend" :key="d.date" class="trend-col">
            <div class="trend-bar-wrap">
              <div
                class="trend-bar"
                :style="{ height: `${(d.count / dailyMax) * 100}%` }"
                :title="`${d.date}: ${d.count}`"
              ></div>
            </div>
            <span class="trend-count">{{ d.count }}</span>
            <span class="trend-date">{{ d.date.slice(5) }}</span>
          </div>
        </div>
      </el-card>

      <div class="panel-row">
        <!-- 인기 페이지 -->
        <el-card class="panel" shadow="never">
          <template #header>인기 페이지 TOP 10</template>
          <el-table :data="topPaths" :show-header="false" size="small">
            <el-table-column min-width="160">
              <template #default="{ row }">
                <span class="page-label">{{ row.label }}</span>
                <span class="page-path">{{ row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="count" width="70" align="right" />
          </el-table>
          <p v-if="!topPaths.length" class="empty">데이터가 없습니다.</p>
        </el-card>

        <!-- 유입 경로 -->
        <el-card class="panel" shadow="never">
          <template #header>유입 경로 TOP 10 (외부 referrer)</template>
          <el-table :data="topReferrers" :show-header="false" size="small">
            <el-table-column prop="name" />
            <el-table-column prop="count" width="80" align="right" />
          </el-table>
          <p v-if="!topReferrers.length" class="empty">
            외부 유입 데이터가 없습니다. (직접 방문이 대부분일 수 있어요)
          </p>
        </el-card>
      </div>

      <!-- 작품별 조회수 (전체) -->
      <el-card class="panel" shadow="never">
        <template #header>
          작품별 조회수 (전체 {{ workStats.length }}개)
        </template>
        <el-table
          :data="workStats"
          size="small"
          max-height="420"
          empty-text="작품 페이지 방문 데이터가 없습니다."
        >
          <el-table-column type="index" label="#" width="50" />
          <el-table-column prop="name" label="작품" min-width="200" />
          <el-table-column prop="path" label="경로" min-width="160">
            <template #default="{ row }">
              <span class="page-path">{{ row.path }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="count" label="조회수" width="90" align="right" />
        </el-table>
      </el-card>

      <!-- 내부 IP 관리 -->
      <el-card class="panel" shadow="never">
        <template #header>사무실(내부) IP 관리</template>
        <p class="optout-help" style="margin-top: 0">
          등록한 IP에서의 접속은 <strong>기기와 무관하게</strong> 집계에서
          제외됩니다. 사무실에서 이 화면을 열고
          <strong>"현재 내 IP"</strong>를 눌러 추가하세요. (반영까지 최대 1분)
        </p>
        <div class="ip-add">
          <el-button
            :loading="detectingIp"
            @click="detectMyIp"
          >
            현재 내 IP
          </el-button>
          <el-input
            v-model="newIp"
            placeholder="IP 주소 (예: 211.xxx.xxx.xxx)"
            style="max-width: 240px"
          />
          <el-input
            v-model="newLabel"
            placeholder="메모 (예: 본사)"
            style="max-width: 160px"
          />
          <el-button type="primary" @click="addIp">추가</el-button>
        </div>
        <el-table
          v-loading="ipsLoading"
          :data="internalIps"
          size="small"
          empty-text="등록된 내부 IP가 없습니다."
          style="margin-top: 12px"
        >
          <el-table-column prop="ip" label="IP" min-width="160" />
          <el-table-column prop="label" label="메모" min-width="120" />
          <el-table-column label="삭제" width="80" align="right">
            <template #default="{ row }">
              <el-button size="small" type="danger" text @click="removeIp(row)">
                삭제
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>

      <!-- 내부자 제외 안내 -->
      <el-card class="panel" shadow="never">
        <template #header>그 외 제외 설정</template>
        <div class="optout">
          <el-switch
            :model-value="optedOut"
            @update:model-value="toggleOptOut"
          />
          <span class="optout-text">
            이 브라우저를 방문자 집계에서 제외
            <em>({{ optedOut ? "제외됨" : "집계됨" }})</em>
          </span>
        </div>
        <p class="optout-help">
          · 어드민에 로그인한 브라우저는 자동 제외됩니다.<br />
          · 재택 등 외부에서는 사이트 주소 뒤에 <code>?internal=1</code> 을
          붙여 한 번 접속하면 그 브라우저가 제외됩니다.
          (<code>?internal=0</code> 으로 해제)
        </p>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.analytics-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.analytics-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}
.analytics-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}
.stat-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}
.stat-card {
  background: #fff;
  border: 1px solid #e5e6eb;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.stat-label {
  font-size: 13px;
  color: #86909c;
}
.stat-value {
  font-size: 30px;
  font-weight: 700;
  color: #1f2329;
  line-height: 1.1;
}
.stat-sub {
  font-size: 12px;
  color: #c9cdd4;
}
.panel {
  margin-bottom: 20px;
}
.panel-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.trend {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 180px;
  overflow-x: auto;
}
.trend-col {
  flex: 1;
  min-width: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.trend-bar-wrap {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
}
.trend-bar {
  width: 100%;
  background: linear-gradient(180deg, #4080ff, #2454ff);
  border-radius: 3px 3px 0 0;
  min-height: 2px;
  transition: height 0.3s;
}
.trend-count {
  font-size: 11px;
  color: #4e5969;
  margin-top: 4px;
}
.trend-date {
  font-size: 10px;
  color: #c9cdd4;
  white-space: nowrap;
}
.empty {
  color: #c9cdd4;
  font-size: 13px;
  text-align: center;
  padding: 12px 0;
  margin: 0;
}
.page-label {
  color: #1f2329;
}
.page-path {
  color: #c9cdd4;
  font-size: 12px;
  margin-left: 6px;
}
.ip-add {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.optout {
  display: flex;
  align-items: center;
  gap: 12px;
}
.optout-text em {
  color: #2454ff;
  font-style: normal;
  font-weight: 600;
}
.optout-help {
  margin: 14px 0 0;
  font-size: 13px;
  line-height: 1.8;
  color: #86909c;
}
.optout-help code {
  background: #f2f3f5;
  padding: 1px 6px;
  border-radius: 4px;
  color: #1f2329;
}
@media (max-width: 768px) {
  .stat-cards,
  .panel-row {
    grid-template-columns: 1fr;
  }
}
</style>
