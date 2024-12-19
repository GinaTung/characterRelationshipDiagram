<script setup>
import { onMounted, ref } from 'vue';
// import RelationGraph from 'relation-graph/vue3';

const graphRef = ref(null);
const options = {
  // defaultExpandHolderPosition: 'none',
};

onMounted(() => {
  const jsonData = {
    rootId: 'a',
    nodes: [
      { id: 'a', text: 'a' },
      { id: 'b', text: 'b' },
      { id: 'c', text: 'c' },
      { id: 'd', text: 'd' },
      { id: 'e', text: 'e' },
      { id: 'f', text: 'f' },
    ],
    lines: [
      { from: 'a', to: 'b' },
      { from: 'a', to: 'c' },
      { from: 'a', to: 'd' },
      { from: 'a', to: 'e' },
      { from: 'a', to: 'f' },
    ],
  };

  if (graphRef.value) {
    graphRef.value.setJsonData(jsonData);
  }
});
</script>
<template>
  <div  class="flex justify-center">
    <div style="border: #efefef solid 1px; height: calc(100vh - 100px); width: 80%;" class="my-5">
    <relation-graph ref="graphRef" :options="options" />
  </div>
  </div >
</template>
