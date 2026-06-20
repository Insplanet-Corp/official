<script setup>
import { ref, computed, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { supabase } from "@/lib/supabase";

const contacts = ref([]);
const loading = ref(false);
const statusFilter = ref("all");

const statusOptions = [
  { label: "전체", value: "all" },
  { label: "신규", value: "new" },
  { label: "완료", value: "done" },
  { label: "스팸", value: "spam" },
];

const statusMeta = {
  new: { label: "신규", type: "warning" },
  done: { label: "완료", type: "success" },
  spam: { label: "스팸", type: "info" },
};

const filteredContacts = computed(() => {
  if (statusFilter.value === "all") return contacts.value;
  return contacts.value.filter((c) => c.status === statusFilter.value);
});

const fetchContacts = async () => {
  loading.value = true;
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });
  loading.value = false;
  if (error) {
    ElMessage.error(error.message);
    return;
  }
  contacts.value = data;
};

const updateStatus = async (row, status) => {
  const { error } = await supabase
    .from("contacts")
    .update({ status })
    .eq("id", row.id);
  if (error) {
    ElMessage.error(error.message);
    return;
  }
  row.status = status;
  ElMessage.success("상태가 변경되었습니다.");
};

const removeContact = async (row) => {
  try {
    await ElMessageBox.confirm(
      `'${row.name}' 문의를 삭제할까요?`,
      "삭제 확인",
      { type: "warning", confirmButtonText: "삭제", cancelButtonText: "취소" }
    );
  } catch {
    return;
  }
  const { error } = await supabase.from("contacts").delete().eq("id", row.id);
  if (error) {
    ElMessage.error(error.message);
    return;
  }
  contacts.value = contacts.value.filter((c) => c.id !== row.id);
  ElMessage.success("삭제되었습니다.");
};

const formatDate = (iso) =>
  new Date(iso).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

onMounted(fetchContacts);
</script>

<template>
  <div class="contacts">
    <div class="contacts-head">
      <h2 class="contacts-title">문의 내역</h2>
      <div class="contacts-actions">
        <el-radio-group v-model="statusFilter" size="small">
          <el-radio-button
            v-for="opt in statusOptions"
            :key="opt.value"
            :value="opt.value"
          >
            {{ opt.label }}
          </el-radio-button>
        </el-radio-group>
        <el-button size="small" :loading="loading" @click="fetchContacts">
          새로고침
        </el-button>
      </div>
    </div>

    <el-table
      v-loading="loading"
      :data="filteredContacts"
      border
      stripe
      empty-text="문의가 없습니다."
    >
      <el-table-column type="expand">
        <template #default="{ row }">
          <div class="contact-detail">
            <p><strong>이메일:</strong> {{ row.email || "-" }}</p>
            <p><strong>연락처:</strong> {{ row.phone || "-" }}</p>
            <p><strong>회사/소속:</strong> {{ row.company || "-" }}</p>
            <p class="contact-message">
              <strong>내용:</strong><br />{{ row.message }}
            </p>
            <p>
              <strong>개인정보 동의:</strong>
              {{ row.privacy_agreed_at ? `동의 (${formatDate(row.privacy_agreed_at)})` : "미동의" }}
            </p>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="이름" width="120" />
      <el-table-column prop="email" label="이메일" min-width="180" />
      <el-table-column prop="message" label="내용" min-width="240" show-overflow-tooltip />
      <el-table-column label="상태" width="100">
        <template #default="{ row }">
          <el-tag :type="statusMeta[row.status]?.type" size="small">
            {{ statusMeta[row.status]?.label || row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="접수일" width="160">
        <template #default="{ row }">{{ formatDate(row.created_at) }}</template>
      </el-table-column>
      <el-table-column label="관리" width="220" fixed="right">
        <template #default="{ row }">
          <el-button
            v-if="row.status !== 'done'"
            size="small"
            type="success"
            @click="updateStatus(row, 'done')"
          >
            완료
          </el-button>
          <el-button
            v-if="row.status !== 'new'"
            size="small"
            @click="updateStatus(row, 'new')"
          >
            신규
          </el-button>
          <el-button
            v-if="row.status !== 'spam'"
            size="small"
            type="info"
            @click="updateStatus(row, 'spam')"
          >
            스팸
          </el-button>
          <el-button size="small" type="danger" @click="removeContact(row)">
            삭제
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.contacts-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.contacts-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}
.contacts-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.contact-detail {
  padding: 8px 16px;
  line-height: 1.7;
  color: #4e5969;
}
.contact-message {
  margin-top: 8px;
  white-space: pre-wrap;
}
</style>
