import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('useInfoCardDataStore', () => {
  const selectedCardValue = ref('ONE PIECE');
  const selectedCardData = (newGraphName) => {
    selectedCardValue.value = newGraphName;
    console.log('Updating graph to:', selectedCardValue.value);
  };
  return {
    selectedCardValue,
    selectedCardData,
  };
});
