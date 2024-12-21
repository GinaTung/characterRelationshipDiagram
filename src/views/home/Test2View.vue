<script setup>
import { ref, onMounted } from 'vue';

const demoData = {
  nodes: [
    {
      id: 'node1',
      text: 'Node 1',
      data: {
        icon: '/src/assets/images/hunters/gon-freecss.jpg', // 假設圖片放在 public 資料夾
        sexType: 'male',
        isGoodMan: true,
      },
      color: '#ff0000',
    },
    {
      id: 'node2',
      text: 'Node 2',
      data: {
        icon: '', // 假設圖片放在 public 資料夾
        sexType: 'female',
        isGoodMan: false,
      },
      color: '#00ff00',
    },
  ],
  links: [
    {
      from: 'node1',
      to: 'node2',
      data: {
        type: '朋友',
      },
    },
  ],
};

const graphOptions = {
  debug: false,
  defaultNodeBorderWidth: 0,
  defaultNodeColor: 'rgba(238, 178, 94, 1)',
  allowSwitchLineShape: true,
  allowSwitchJunctionPoint: true,
  defaultLineShape: 1,
  layouts: [
    {
      label: 'Auto Layout',
      layoutName: 'force',
      layoutClassName: 'seeks-layout-force',
    },
  ],
  defaultJunctionPoint: 'border',
};

const graphRef = ref(null);

const setGraphData = async () => {
  const graphInstance = graphRef.value.getInstance();
  await graphInstance.setJsonData(demoData);
};

onMounted(() => {
  setGraphData();
});
</script>
<template>
  <div>
    <div style="margin-top:0px;width: calc(100% - 10px);height:calc(100vh);">
      <RelationGraph ref="graphRef" :options="graphOptions">
        <template #node="{node}">
          <div class="my-node-style" :style="{'background-image': 'url(' + node.data.icon + ')'}">
          </div>
          <div class="c-node-name" :style="{color: node.color}">{{ node.text }}</div>
        </template>
      </RelationGraph>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-node-style {
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: 40px;
  overflow: visible;
}

.c-node-name {
  width: 80px;
  text-align: center;
  color: #2e74b5;
  margin-top: 10px;
}
</style>
