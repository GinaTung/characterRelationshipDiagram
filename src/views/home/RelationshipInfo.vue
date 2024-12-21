<script setup>
import { computed, watch } from 'vue';
import useInfoCardDataStore from '@/stores/getInfoCardData';
import { infoCardData } from '@/constants/infoCardData';

// 狀態管理
const infoCardStore = useInfoCardDataStore();

watch(() => infoCardStore.selectedCardValue, (newCardName) => {
  if (!newCardName) {
    infoCardStore.selectedCardValue = 'GraphA';
  }
});

// 計算當前選中的卡片數據
const selectedCard = computed(() => infoCardData.find((item) => item.name === infoCardStore.selectedCardValue) || null);
</script>

<template>
  <!-- 渲染選中的卡片 -->
  <Card
    v-if="selectedCard"
    style="width: 25rem; overflow: hidden"
    class="w-1/4"
  >
    <template #header>
      <img
        :alt="selectedCard.name"
        :src="selectedCard.img"
      />
    </template>
    <template #title>{{ selectedCard.name }}</template>
    <template #subtitle>{{ selectedCard.subtitle }}</template>
    <template #content>
      <p class="mb-5">
        {{ selectedCard.description }}
      </p>
      <p class="mb-5">
        {{ selectedCard.description2 }}
      </p>
    </template>
  </Card>
</template>
