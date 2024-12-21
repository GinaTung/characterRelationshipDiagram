export const defaultGraphData = {
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

export const graphData = [
  {
    name: 'GraphA',
    data: {
      rootId: '1',
      nodes: [
        { id: '1', text: 'a' },
        { id: 'b', text: 'b' },
        { id: 'c', text: 'c' },
        { id: 'd', text: 'd' },
        { id: 'e', text: 'e' },
        { id: 'f', text: 'f' },
      ],
      lines: [
        { from: '1', to: 'b' },
        { from: '1', to: 'c' },
        { from: '1', to: 'd' },
        { from: '1', to: 'e' },
        { from: '1', to: 'f' },
      ],
    },
  },
  {
    name: 'HUNTER×HUNTER',
    data: {
      rootId: '1',
      nodes: [
        {
          id: '1',
          text: '小傑·富力士',
          labelStr: '人物',
          color: '#ff0000',
          data: {
            icon: '/src/assets/images/hunters/gon-freecss.jpg', // 假設圖片放在 public 資料夾
            sexType: 'male',
            isGoodMan: true,
          },
        },
        { id: '2', text: '奇犽·揍敵客', labelStr: '人物' },
        { id: '3', text: '酷拉皮卡', labelStr: '人物' },
        { id: '4', text: '雷歐力·帕拉丁奈特', labelStr: '人物' },
        { id: '5', text: '西索·莫羅', labelStr: '人物' },
        { id: '6', text: '獵人試驗', labelStr: '事件' },
        { id: '7', text: '幻影旅團', labelStr: '組織' },
        { id: '8', text: '十二支', labelStr: '組織' },
        { id: '9', text: '暗黑大陸', labelStr: '地點' },
      ],
      lines: [
        {
          id: '1', from: '1', to: '6', text: '參加',
        },
        {
          id: '2', from: '2', to: '6', text: '參加',
        },
        {
          id: '3', from: '3', to: '6', text: '參加',
        },
        {
          id: '4', from: '4', to: '6', text: '參加',
        },
        {
          id: '5', from: '3', to: '7', text: '復仇',
        },
        {
          id: '6', from: '4', to: '8', text: '加入',
        },
        {
          id: '7', from: '3', to: '8', text: '加入',
        },
        {
          id: '8', from: '8', to: '9', text: '遠征',
        },
        {
          id: '9', from: '5', to: '1', text: '關注',
        },
        {
          id: '10', from: '5', to: '2', text: '關注',
        },
      ],
    },
  },
  {
    name: 'demoData',
    data: {
      rootId: '1',
      nodes: [
        {
          id: '1',
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
          from: '1',
          to: 'node2',
          data: {
            type: '朋友',
          },
        },
      ],
    },
  },
  {
    name: 'GraphC',
    data: {
      rootId: '1',
      nodes: [
        { id: '1', text: 'a' },
        { id: 'b', text: 'b' },
        { id: 'c', text: 'c' },
        { id: 'd', text: 'd' },
        { id: 'e', text: 'e' },
        { id: 'f', text: 'f' },
      ],
      lines: [
        { from: '1', to: 'b' },
        { from: '1', to: 'c' },
        { from: '1', to: 'd' },
        { from: '1', to: 'e' },
        { from: '1', to: 'f' },
      ],
    },
  },
];