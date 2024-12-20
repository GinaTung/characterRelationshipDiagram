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
   <h2 class="text-center my-5">{{ getKgGraphData.selectedGraph }} Data</h2>
  <div  class="flex justify-center">
    <div style="height: calc(100vh - 100px); width: 90%;" class="my-5">
          <relation-graph :ref="bindGraphRef" :options="getCommonKgGraph.graphOptions" />
        </div>
  </div>
</template>
