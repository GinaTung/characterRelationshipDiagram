<script setup>
import { computed, watch } from 'vue';
import useInfoCardDataStore from '@/stores/getInfoCardData';
import { infoCardData } from '@/constants/infoCardData';

// 狀態管理
const infoCardStore = useInfoCardDataStore();

watch(() => infoCardStore.selectedCardValue, (newCardName) => {
  if (!newCardName) {
    infoCardStore.selectedCardValue = 'ONE PIECE';
  }
});

// 計算當前選中的卡片數據
const selectedCard = computed(() => infoCardData.find((item) => item.name === infoCardStore.selectedCardValue) || null);
</script>

<template>
  <Card
    v-if="selectedCard"
    class="lg:w-1/4 ms-16 min-h-screen pb-5"
    style="overflow: hidden;"
  >
    <template #header>
      <img
        :alt="selectedCard.name"
        :src="selectedCard.img"
        class="w-full"
      />
    </template>
    <template #title>{{ selectedCard.name }}</template>
    <template #subtitle>{{ selectedCard.subtitle }}</template>
    <template #content>
      <div class="overflow-auto">
        <p class="mb-5">
          {{ selectedCard.description }}
        </p>
        <p class="mb-5">
          {{ selectedCard.description2 }}
        </p>
      </div>
    </template>
  </Card>
</template>
