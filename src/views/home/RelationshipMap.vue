<script setup>
import { useCommonKgGraphStore } from '@/stores/getCommonKgGraph';
import useKgGraphDataStore from '@/stores/getKgGraphData';
// 狀態管理
const getCommonKgGraph = useCommonKgGraphStore();
const getKgGraphData = useKgGraphDataStore();

// 綁定 RelationGraph 實例到 Pinia 的 graphRef
const bindGraphRef = (el) => {
  getKgGraphData.graphRef = el;
};

</script>
<template>
  <div style="height: calc(100vh - 100px); max-width: 100%; " class="w-3/4 rounded-lg ">
    <relation-graph :ref="bindGraphRef" :options="getCommonKgGraph.graphOptions">
      <template #node="{ node }">
        <div class="my-node-style" :style="{ 'background-image': 'url(' + node.data.icon + ')' }">
        </div>
        <div class="c-node-name" :style="{ color: node.color }">{{ node.text }}</div>
      </template>
    </relation-graph>
  </div>

</template>
<style lang="scss">
.relation-graph .rel-map {
  border-radius: 12px !important;
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
  text-align: center;
  color: #2e74b5;
  margin-top: 10px;
}
</style>
