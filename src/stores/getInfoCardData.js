import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('useInfoCardDataStore', () => {
  const selectedCardValue = ref('海賊王');
  const selectedCardData = (newGraphName) => {
    selectedCardValue.value = newGraphName;
    console.log('Updating graph to:', selectedCardValue.value);
  };
  return {
    selectedCardValue,
    selectedCardData,
  };
});
