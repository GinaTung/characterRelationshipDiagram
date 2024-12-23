<script setup>
import { ref } from 'vue';

const nodes = ref([
  {
    key: '0',
    label: '海賊王 ONE PIECE',
    children: [
      {
        key: '0-0', label: '故事介紹', data: 'https://zh.wikipedia.org/wiki/ONE_PIECE', type: 'url',
      },
      {
        key: '0-1', label: '人物圖像1', data: 'https://wallpapers.com/one-piece-pictures', type: 'url',
      },
      {
        key: '0-2', label: '人物圖像2', data: 'https://onepiece.fandom.com/zh/wiki/%E5%85%A8%E4%BA%BA%E7%89%A9%E5%88%97%E8%A1%A8', type: 'url',
      },
      {
        key: '0-3', label: '人物關係資料1', data: 'https://m.ac.qq.com/ask/detail/aid/peosrhxami', type: 'url',
      },
      {
        key: '0-4', label: '人物關係資料2', data: 'https://m.ac.qq.com/ask/detail/aid/pebpskrhos', type: 'url',
      },
    ],
  },
  {
    key: '1',
    label: '獵人 HUNTER X HUNTER',
    children: [
      {
        key: '1-0', label: '故事介紹', data: 'https://zh.wikipedia.org/zh-tw/HUNTER%C3%97HUNTER', type: 'url',
      },
      {
        key: '1-1', label: '人物圖像1', data: 'https://wallpapers.com/hunter-x-hunter', type: 'url',
      },
      {
        key: '1-2', label: '人物圖像2', data: 'https://baike.baidu.com/item/%E5%85%A8%E8%81%8C%E7%8C%8E%E4%BA%BA/27763?fromModule=lemma_inlink', type: 'url',
      },
      {
        key: '1-3', label: '人物關係資料1', data: 'https://forum.gamer.com.tw/G2.php?bsn=1272&sn=36', type: 'url',
      },
      {
        key: '1-4', label: '人物關係資料2', data: 'https://roo.cash/blog/hunter-hunter-characters/', type: 'url',
      },
    ],
  },
]);

// 預設展開的節點
const expandedKeys = ref({
  0: true, // 展開第一個節點
  1: true, // 展開第二個節點
});
</script>

<template>
  <div class="mt-8">
    <div class="card">
      <p class="text-2xl p-4 pb-0 bg bg1 bg-white bg-radius-end-none">資料來源</p>
      <Tree :value="nodes" v-model:expanded-keys="expandedKeys" class="bg-radius-start-none">
        <template #default="slotProps">
          <b>{{ slotProps.node.label }}</b>
        </template>
        <template #url="slotProps">
          <a
            :href="slotProps.node.data"
            target="_blank"
            rel="noopener noreferrer"
            class="text-surface-700 dark:text-surface-0 hover:text-primary"
          >
            {{ slotProps.node.label }}
          </a>
        </template>
      </Tree>
    </div>
  </div>
</template>

<style>
.p-tree {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(255, 126, 99, 0.1) 20%, transparent 20%);
  background-size: 15px 15px; /* 控制點的間距 */
  border-radius: 12px !important;
}
.bg-radius-end-none {
  border-radius: 12px 12px 0 0 !important;
}
.bg-radius-start-none {
  border-radius: 0 0 12px 12px !important;
}
</style>
