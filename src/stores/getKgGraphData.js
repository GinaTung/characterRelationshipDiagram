import { defineStore } from 'pinia';
import {
  ref, onMounted, nextTick, watch,
} from 'vue';
import { graphData, defaultGraphData } from '@/constants/graphData';

export default defineStore('useKgGraphDataStore', () => {
  const graphRef = ref(null);
  const selectedGraph = ref('GraphA');
  const jsonData = ref({});
  const jsonData2 = defaultGraphData;

  // 更新圖表數據
  const updateGraphData = (newGraphName) => {
    selectedGraph.value = newGraphName;
    console.log('Updating graph to:', selectedGraph.value);
  };

  const updateGraphInstance = (instance, data) => {
    instance.setJsonData(data);
    instance.moveToCenter();
    instance.zoomToFit();
    instance.refresh();
    instance.setZoom(80);
  };
  // 遮罩顯示狀態
  const showMask = ref(true);
  // 點擊遮罩切換狀態

  // 顯示圖表
  const showGraph = async (data) => {
    if (!graphRef.value) {
      console.warn('Graph reference is not set.');
      return;
    }
    const graphInstance = graphRef.value.getInstance();
    if (!graphInstance) {
      console.warn('Graph instance is not available.');
      return;
    }
    try {
      await updateGraphInstance(graphInstance, data);
    } catch (error) {
      console.error('Error rendering graph:', error);
    }
  };

  // 初始化圖表
  const setupGraph = async () => {
    await nextTick();
    showGraph(jsonData.value);
  };

  // 監視選擇的圖表
  watch(selectedGraph, (newGraphName) => {
    const selectedData = graphData.find((item) => item.name === newGraphName)?.data || jsonData2;
    jsonData.value = selectedData;
    showGraph(jsonData.value);
  });

  // 設置初始數據並掛載
  onMounted(() => {
    jsonData.value = defaultGraphData;
    setupGraph();
  });

  // 返回方法和狀態
  return {
    graphRef,
    setupGraph,
    updateGraphData,
    selectedGraph,
    jsonData,
    showMask,
  };
});
