<script setup>
import { ref } from 'vue';
import useKgGraphDataStore from '@/stores/getKgGraphData';
import { graphData } from '../../constants/graphData';

const getKgGraphData = useKgGraphDataStore();
const selectValue = ref('GraphA');
const options = graphData.map((item) => item.name);

const updateSelectedGraph = (value) => {
  selectValue.value = value;
  getKgGraphData.updateGraphData(selectValue.value); // 傳遞選擇值給 Pinia Store
};
</script>

<template>
  <div class="card flex justify-center my-3">
    <SelectButton v-model="selectValue" :options="options" @change="updateSelectedGraph(selectValue)" />
  </div>
</template>
