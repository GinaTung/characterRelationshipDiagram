<script setup>
import { ref } from 'vue';
import { sourceData } from '../constants/sourceData';

// 預設展開的節點
const expandedKeys = ref({
  0: true,
  1: true,
});
</script>

<template>
  <div class="mt-8">
    <div class="card">
      <p class="text-2xl p-4 pb-0 bg bg1 bg-white bg-radius-end-none">資料來源</p>
      <Tree :value="sourceData" v-model:expanded-keys="expandedKeys" class="bg-radius-start-none">
        <template #default="slotProps">
          <b>{{ slotProps.node.label }}</b>
        </template>
        <template #url="slotProps">
          <a
            :href="slotProps.node.data"
            target="_blank"
            rel="noopener noreferrer"
            class="text-surface-700 dark:text-surface-0 hover:text-primary"
          >
            {{ slotProps.node.label }}
          </a>
        </template>
      </Tree>
    </div>
  </div>
</template>

<style>
.p-tree {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(255, 126, 99, 0.1) 20%, transparent 20%);
  background-size: 15px 15px; /* 控制點的間距 */
  border-radius: 12px !important;
}
.bg-radius-end-none {
  border-radius: 12px 12px 0 0 !important;
}
.bg-radius-start-none {
  border-radius: 0 0 12px 12px !important;
}
@media (prefers-color-scheme: dark) {
    .dark\:text-surface-0 {
        color:var(--p-slate-950) !important;
    }
    .hover\:text-primary:hover{
      color: rgba(255, 126, 99, 0.9) !important;
    }
}
</style>
