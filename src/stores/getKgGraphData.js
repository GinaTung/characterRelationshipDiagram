import { defineStore } from 'pinia';
import {
  ref, onMounted, nextTick, watch,
} from 'vue';
import { graphData, defaultGraphData } from '@/constants/graphData';

export default defineStore('useKgGraphDataStore', () => {
  const graphRef = ref(null);
  const selectedGraph = ref('ONE PIECE');
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

  // 修改 title 的方法
  const updateTitlesToTraditionalChinese = () => {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
          document.querySelectorAll('[title]').forEach((element) => {
            switch (element.getAttribute('title')) {
              case '全屏/退出全屏':
                element.setAttribute('title', '全螢幕/退出全螢幕');
                break;
              case '放大':
                element.setAttribute('title', '放大');
                break;
              case '缩小':
                element.setAttribute('title', '縮小');
                break;
              case '点击开始自动调整布局':
                element.setAttribute('title', '點擊開始自動調整布局');
                break;
              case '点击停止自动布局':
                element.setAttribute('title', '點擊停止自動布局');
                break;
              case '刷新':
                element.setAttribute('title', '重新整理');
                break;
              case '下载图片':
                element.setAttribute('title', '下載圖片');
                break;
              default:
                // 保留其他未指定的 title 不變
                break;
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

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
      // 初始化時執行此方法
      updateTitlesToTraditionalChinese();
    } catch (error) {
      console.error('Error rendering graph:', error);
    }
  };

  // 初始化圖表
  const setupGraph = async () => {
    await nextTick();
    showGraph(jsonData.value);

    // 初始化時執行此方法
    updateTitlesToTraditionalChinese();
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
