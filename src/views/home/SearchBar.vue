<script setup>
import { ref, watch } from 'vue';
import useKgGraphDataStore from '@/stores/getKgGraphData';
import useInfoCardDataStore from '@/stores/getInfoCardData';
import { infoCardData } from '@/constants/infoCardData';

const getKgGraphData = useKgGraphDataStore();
const getInfoCardData = useInfoCardDataStore();
const selectValue = ref('ONE PIECE');
const options = infoCardData.map((item) => item.name);

const updateSelectedGraph = (value) => {
  selectValue.value = value;
  getKgGraphData.updateGraphData(selectValue.value);
  getInfoCardData.selectedCardData(selectValue.value);
};

// 確保 `selectedCardValue` 有默認值
watch(() => selectValue.value, (newSelectValue) => {
  if (!newSelectValue) {
    selectValue.value = 'ONE PIECE';
  }
});
</script>

<template>
  <div class="card flex justify-center my-6">
    <SelectButton v-model="selectValue" :options="options" @change="updateSelectedGraph(selectValue)" class="text-orange-500"/>
  </div>
</template>
<style>
.p-togglebutton.p-togglebutton-checked::before{
  background-color: #ff7e63;
}
.p-togglebutton.p-togglebutton-checked .p-togglebutton-label{
  color: white !important;
}
</style>
