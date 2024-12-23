<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const handleTitleClick = () => {
  if (route.path !== '/') {
    window.location.href = '/'; // 非首頁時刷新
  } else {
    router.push('/'); // 如果已經是首頁，僅切換路由
  }
};

</script>
<template>
  <div class="sticky top-0" style="z-index: 10001;">
    <Menubar class="mt-0 lg:mt-3 flex-col lg:flex-row" style="border-radius: 12px;">
      <template #start>
        <h1 class="text-3xl cursor-pointer" @click="handleTitleClick">
          故事人物關係圖
        </h1>
      </template>

      <template #end>
        <div class="flex items-center gap-2">
          <p class="text-xl font-bold">分類：動漫</p>
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

.p-menubar-end {
  margin-left: 0px;
}

@media(min-width: 1024px) {
  .p-menubar-end {
    margin-left: auto;
  }
}
</style>
