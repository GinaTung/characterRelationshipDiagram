<script setup>
import { ref, watch } from 'vue';
import { useCommonKgGraphStore } from '@/stores/getCommonKgGraph';
import useKgGraphDataStore from '@/stores/getKgGraphData';

// 狀態管理
const getCommonKgGraph = useCommonKgGraphStore();
const getKgGraphData = useKgGraphDataStore();

// 绑定 RelationGraph 實例到 Pinia 的 graphRef
const bindGraphRef = (el) => {
  getKgGraphData.graphRef = el;
};

// 绑定 showMask 的狀態
const showMask = ref(true);

const refreshGraphWithOptions = () => {
  const graphInstance = getKgGraphData.graphRef?.getInstance();
  if (graphInstance) {
    graphInstance.setOptions(getCommonKgGraph.graphOptions); // 更新配置
    graphInstance.refresh(); // 刷新圖表
    console.log('Graph instance refreshed with updated options.');
  } else {
    console.warn('Graph instance not available.');
  }
};

// 監聽 showMask
watch(showMask, (newVal) => {
  // 更新透明度
  const relEasyView = document.querySelector('.relation-graph .rel-easy-view');
  if (relEasyView) {
    relEasyView.style.opacity = newVal ? '1' : '0';
    relEasyView.style.zIndex = newVal ? '1000' : '-1';
  }

  // 更新 disableZoom 狀態
  getCommonKgGraph.graphOptions.disableZoom = newVal;
  console.log(`disableZoom updated to: ${getCommonKgGraph.graphOptions.disableZoom}`);

  // 刷新圖表
  refreshGraphWithOptions();
});
const toggleMask = () => {
  showMask.value = false;
};
const toggleMask2 = () => {
  showMask.value = true;
};

</script>

<template>
  <div style="position: relative;" class="w-full lg:w-3/4 min-h-screen lg:h-[100vh-100px] rounded-lg"
    @click="toggleMask">
    <Button icon="pi pi-eye" severity="secondary" rounded aria-label="Search" @click.stop="toggleMask2"
      style="position: absolute;top: 15px;left: 15px;z-index: 5;" />
    <div class="bg bg1" style="position: absolute;top:0;left: 0;z-index: 1;"></div>
    <relation-graph :ref="bindGraphRef" :options="getCommonKgGraph.graphOptions">
      <template #node="{ node }">
        <div class="my-node-style" :style="{ 'background-image': 'url(' + node.data.icon + ')' }"></div>
        <div class="c-node-name" :style="{ color: node.color }">{{ node.text }}</div>
      </template>
    </relation-graph>
  </div>
</template>

<style lang="scss">
.relation-graph .c-rg-line-text {
    dominant-baseline: central !important;
    font-size: 14px !important;
    font-weight: bold;
}
.bg {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(var(--color1) 20%, transparent 20%);
  background-size: 15px 15px; /* 控制點的間距 */
  border-radius: 12px !important;
}

.bg1 {
  --color1:rgba(255, 126, 99, 0.1);
}

.relation-graph .rel-map {
  border-radius: 12px !important;
}

.relation-graph .rel-easy-view {
  background: rgba(0, 0, 0, 0.3) !important;
  z-index: 1000;
  border-radius: 12px !important;
  opacity: 1;
}

.my-node-style {
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: 40px;
  overflow: visible;
}

.c-node-name {
  width: 80px;
  font-weight: bold;
  text-align: center;
  color: #2e74b5;
  margin-top: 10px;
}
</style>
