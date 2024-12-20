import { defineStore } from 'pinia';
import {
  ref, onMounted, nextTick, watch,
} from 'vue';
import { graphData } from '@/constants/graphData';

export default defineStore('useKgGraphDataStore', () => {
  const graphRef = ref(null);
  const selectedGraph = ref('GraphA');

  let jsonData = {}; // 初始化 jsonData 為空物件

  const updateGraphData = (newGraphName) => {
    selectedGraph.value = newGraphName; // 更新選擇的圖譜名稱
    console.log('Updating graph to:', selectedGraph.value);
  };

  // 顯示圖表
  const showGraph = async (data) => {
    if (!graphRef.value) {
      return;
    }
    console.log(data);

    const graphInstance = graphRef.value.getInstance();
    if (!graphInstance) {
      return;
    }

    try {
      await graphInstance.setJsonData(jsonData);
    } catch (error) {
      console.error('Error rendering graph:', error);
    }
  };

  const setupGraph = async () => {
    await nextTick();
    showGraph(jsonData); // 渲染初始圖表
  };
  // 監聽 selectedGraph 變動
  watch(selectedGraph, (newGraphName) => {
    const graphNames = graphData.map((item) => item.name); // 提取所有圖表名稱

    if (graphNames.includes(newGraphName)) {
      const selectedData = graphData.find((item) => item.name === newGraphName)?.data; // 使用?.來避免 undefined
      if (selectedData) {
        console.log('Selected Data:', selectedData);
        jsonData = selectedData; // 更新 jsonData
        showGraph(jsonData); // 呼叫重新渲染
      } else {
        console.log('Graph not found in graphData');
      }
    } else {
      console.log('Graph not found in graphNames');
    }
  });
  onMounted(() => {
    setupGraph();
    jsonData = {
      rootId: 'a',
      nodes: [
        { id: 'a', text: 'a' },
        { id: 'b', text: 'b' },
        { id: 'c', text: 'c' },
        { id: 'd', text: 'd' },
        { id: 'e', text: 'e' },
        { id: 'f', text: 'f' },
      ],
      lines: [
        { from: 'a', to: 'b' },
        { from: 'a', to: 'c' },
        { from: 'a', to: 'd' },
        { from: 'a', to: 'e' },
        { from: 'a', to: 'f' },
      ],
    };
  });

  return {
    graphRef,
    setupGraph,
    updateGraphData,
    selectedGraph,
  };
});
