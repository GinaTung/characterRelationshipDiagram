<script setup>
import { ref, watch } from 'vue';
import useKgGraphDataStore from '@/stores/getKgGraphData';
import useInfoCardDataStore from '@/stores/getInfoCardData';
import { graphData } from '@/constants/graphData';

const getKgGraphData = useKgGraphDataStore();
const getInfoCardData = useInfoCardDataStore();
const selectValue = ref('GraphA');
const options = graphData.map((item) => item.name);

const updateSelectedGraph = (value) => {
  selectValue.value = value;
  getKgGraphData.updateGraphData(selectValue.value);
  getInfoCardData.selectedCardData(selectValue.value);
};

// 確保 `selectedCardValue` 有默認值
watch(() => selectValue.value, (newSelectValue) => {
  if (!newSelectValue) {
    selectValue.value = 'GraphA';
  }
});
</script>

<template>
  <div class="card flex justify-center my-6">
    <SelectButton v-model="selectValue" :options="options" @change="updateSelectedGraph(selectValue)" />
  </div>
</template>
