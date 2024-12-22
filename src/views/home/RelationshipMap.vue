<script setup>
import { ref, watch } from 'vue';
import { useCommonKgGraphStore } from '@/stores/getCommonKgGraph';
import useKgGraphDataStore from '@/stores/getKgGraphData';

// 状态管理
const getCommonKgGraph = useCommonKgGraphStore();
const getKgGraphData = useKgGraphDataStore();

// 绑定 RelationGraph 实例到 Pinia 的 graphRef
const bindGraphRef = (el) => {
  getKgGraphData.graphRef = el;
};

// 绑定 showMask 的状态
const showMask = ref(true);
const lastToggleTime = ref(null); // 保存上次切换遮罩的时间
const maskTimeout = null; // 用于定时器

const refreshGraphWithOptions = () => {
  const graphInstance = getKgGraphData.graphRef?.getInstance();
  if (graphInstance) {
    graphInstance.setOptions(getCommonKgGraph.graphOptions); // 更新配置
    graphInstance.refresh(); // 刷新图表
    console.log('Graph instance refreshed with updated options.');
  } else {
    console.warn('Graph instance not available.');
  }
};

// 监听 showMask 变化
watch(showMask, (newVal) => {
  // 更新透明度
  const relEasyView = document.querySelector('.relation-graph .rel-easy-view');
  if (relEasyView) {
    relEasyView.style.opacity = newVal ? '1' : '0';
    relEasyView.style.zIndex = newVal ? '1000' : '-1';
  }

  // 更新 disableZoom 状态
  getCommonKgGraph.graphOptions.disableZoom = newVal;
  console.log(`disableZoom updated to: ${getCommonKgGraph.graphOptions.disableZoom}`);

  // 刷新图表以应用更改
  refreshGraphWithOptions();
});
const toggleMask = () => {
  showMask.value = false;
};
const toggleMask2 = () => {
  showMask.value = true;
};
// 切换遮罩状态
// const toggleMask3 = () => {
//   // 清除已有定时器（防止多次点击时重复触发）
//   if (maskTimeout) {
//     clearTimeout(maskTimeout);
//     maskTimeout = null;
//   }

//   // 切换遮罩状态并记录时间戳
//   showMask.value = !showMask.value;
//   lastToggleTime.value = Date.now();

//   console.log(`Mask toggled to: ${showMask.value}, at time: ${lastToggleTime.value}`);

//   // 如果遮罩被打开，设置10秒后自动关闭
//   if (!showMask.value) {
//     maskTimeout = setTimeout(() => {
//       showMask.value = true;
//       console.log('Mask automatically hidden after 10 seconds.');
//     }, 20000); // 10秒后隐藏遮罩
//   }
// };
</script>

<template>
  <div style="height: calc(100vh - 100px);max-width: 100%;position: relative;" class="w-3/4 rounded-lg"
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
  --color1: var(--p-slate-100);
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
