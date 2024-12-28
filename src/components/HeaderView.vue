<script setup>
import { useRoute } from 'vue-router';
import { onMounted, onUnmounted, ref } from 'vue';

const route = useRoute();
const percent = ref(1); // 初始為完全不透明

const handleTitleClick = () => {
  if (route.path !== '/') {
    window.location.href = '/characterRelationshipDiagram/';
  } else {
    window.location.reload();
  }
};

// 滾動事件的處理函數
const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop < 100) {
    percent.value = 1 - scrollTop / 100;
  } else {
    percent.value = 0.6;
  }
};

// 動態改變背景顏色
const changeColor = () => ({ backgroundColor: `rgba(255,255,255,${percent.value})` });

// 掛載和卸載滾動事件
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <div class="sticky top-0" style="z-index: 10001">
    <Menubar
      :style="changeColor()"
      class="mt-0 lg:mt-3 flex-col lg:flex-row border-0"
      style="border-radius: 12px; transition: background-color 0.3s ease;"
    >
      <template #start>
        <div class="flex items-center gap-2">
          <Button
            label="故事人物關係圖"
            class="text-3xl text-black font-bold no-underline hover:text-[#ff7e63e6] bg-transparent border-0"
            @click="handleTitleClick"
          ></Button>
        </div>
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

@media (min-width: 1024px) {
  .p-menubar-end {
    margin-left: auto;
  }
}

/* 根據滾動距離變化背景的過渡效果 */
.bg-transparent {
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.bg-white {
  background-color: white;
  transition: background-color 0.3s ease;
}
</style>
