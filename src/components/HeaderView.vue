<script setup>
import { ref } from 'vue';

const items = ref([
  {
    label: '動漫',
  },
]);
</script>
<template>
  <div class="sticky top-0" style="z-index: 10001;">
    <Menubar class="mt-3" style="border-radius: 12px;" :model="items">
      <template #start>
        <h1 class="text-3xl">故事人物關係圖</h1>
      </template>
      <template #item="{ item }">
        <Button class="text-2xl px-2 py-1" severity="secondary" style="cursor: pointer;">{{item.label}}</Button>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
        </div>
      </template>
    </Menubar>
  </div>
</template>
<style>
.p-menubar-root-list {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1 1 auto;
    gap: var(--p-menubar-gap);
}
</style>
