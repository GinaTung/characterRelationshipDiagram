export const defaultGraphData = {
  rootId: '1',
  nodes: [
    {
      id: '1', text: '蒙奇·D·路飛', labelStr: '人物', color: '#ff0000', data: { icon: '/src/assets/images/onepiece/MonkeyDLuffy.jpg', sexType: 'male', isGoodMan: true },
    },
    {
      id: '2', text: '羅羅亞·索隆', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/RoronoaZoro.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '3', text: '娜美', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/Nami.webp', sexType: 'female', isGoodMan: true },
    },
    {
      id: '4', text: '騙人布（烏索普）', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/Usopp.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '5', text: '香吉士（山治）', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/VinsmokeSanji.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '6', text: '紅髮傑克', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/Shanks.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '7', text: '波特卡斯·D·艾斯', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/PortgasDAce.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '8', text: '白鬍子', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/EdwardNewgate.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '9', text: '斯摩格', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/Smoker.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '10', text: '赤犬', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/Sakazuki.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '11', text: '草帽海賊團', labelStr: '組織', data: { icon: '/src/assets/images/onepiece/GoingMerry.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '12', text: '紅髮海賊團', labelStr: '組織', data: { icon: '/src/assets/images/onepiece/Red_Hair_Pirates.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '13', text: '頂上戰爭', labelStr: '事件', data: { icon: '/src/assets/images/onepiece/Marineford_Arc.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '14', text: '蒙奇·D·卡普', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/MonkeyDGarp.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '15', text: '蒙奇·D·龍', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/MonkeyDDragon.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '16', text: '薩波', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/Sabo_Mera_Mera.webp', sexType: 'male', isGoodMan: true },
    },
    {
      id: '17',
      text: '托尼托尼·喬巴',
      labelStr: '人物',
      data: {
        icon: '/src/assets/images/onepiece/TonyTonyChopper.webp', sexType: 'male', isGoodMan: true, position: '船醫', nickname: '愛吃棉花糖的喬巴', dream: '成為能醫治所有疾病的萬能藥',
      },
    },
    {
      id: '18',
      text: '弗蘭奇',
      labelStr: '人物',
      data: {
        icon: '/src/assets/images/onepiece/Franky.webp',
        sexType: 'male',
        isGoodMan: true,
        position: '船匠',
        nickname: '鐵人·弗蘭奇',
        bounty: '9400萬貝里',
        achievement: '千里陽光號的創建者',
      },
    },
    {
      id: '19',
      text: '妮可·羅賓',
      labelStr: '人物',
      data: {
        icon: '/src/assets/images/onepiece/NicoRobin.webp', sexType: 'female', isGoodMan: true, position: '考古學家', nickname: '惡魔之子', goal: '找到真正的歷史正文',
      },
    },
    {
      id: '20',
      text: '布魯克',
      labelStr: '人物',
      data: {
        icon: '/src/assets/images/onepiece/Brook.webp',
        sexType: 'male',
        isGoodMan: true,
        position: '音樂家',
        nickname: '靈魂之王',
        bounty: '8300萬貝里',
        traits: '骷髏身體，爆炸頭',
      },
    },
    {
      id: '21',
      text: '甚平',
      labelStr: '人物',
      data: {
        icon: '/src/assets/images/onepiece/Jinbe.webp',
        sexType: 'male',
        isGoodMan: true,
        position: '舵手',
        nickname: '海俠',
        bounty: '4億3800萬貝里',
        belief: '最終稱霸大海的是草帽路飛',
      },
    },
  ],
  lines: [
    {
      id: '1', from: '1', to: '11', text: '船長',
    },
    {
      id: '2', from: '2', to: '11', text: '成員',
    },
    {
      id: '3', from: '3', to: '11', text: '成員',
    },
    {
      id: '4', from: '4', to: '11', text: '成員',
    },
    {
      id: '5', from: '5', to: '11', text: '成員',
    },
    {
      id: '6', from: '6', to: '1', text: '引路人',
    },
    {
      id: '7', from: '6', to: '12', text: '船長',
    },
    {
      id: '8', from: '7', to: '1', text: '兄弟',
    },
    {
      id: '9', from: '8', to: '7', text: '老爹',
    },
    {
      id: '10', from: '9', to: '1', text: '追捕',
    },
    {
      id: '11', from: '10', to: '1', text: '仇敵',
    },
    {
      id: '12', from: '1', to: '13', text: '參與',
    },
    {
      id: '13', from: '7', to: '13', text: '參與',
    },
    {
      id: '14', from: '14', to: '1', text: '祖父',
    },
    {
      id: '15', from: '15', to: '1', text: '父親',
    },
    {
      id: '16', from: '16', to: '1', text: '兄弟',
    },
    {
      id: '17', from: '17', to: '11', text: '成員',
    },
    {
      id: '18', from: '18', to: '11', text: '成員',
    },
    {
      id: '19', from: '19', to: '11', text: '成員',
    },
    {
      id: '20', from: '20', to: '11', text: '成員',
    },
    {
      id: '21', from: '21', to: '11', text: '成員',
    },
  ],
};

export const graphData = [
  {
    name: 'ONE PIECE',
    data: {
      rootId: '1',
      nodes: [
        {
          id: '1', text: '蒙奇·D·路飛', labelStr: '人物', color: '#ff0000', data: { icon: '/src/assets/images/onepiece/MonkeyDLuffy.jpg', sexType: 'male', isGoodMan: true },
        },
        {
          id: '2', text: '羅羅亞·索隆', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/RoronoaZoro.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '3', text: '娜美', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/Nami.webp', sexType: 'female', isGoodMan: true },
        },
        {
          id: '4', text: '騙人布（烏索普）', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/Usopp.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '5', text: '香吉士（山治）', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/VinsmokeSanji.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '6', text: '紅髮傑克', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/Shanks.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '7', text: '波特卡斯·D·艾斯', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/PortgasDAce.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '8', text: '白鬍子', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/EdwardNewgate.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '9', text: '斯摩格', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/Smoker.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '10', text: '赤犬', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/Sakazuki.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '11', text: '草帽海賊團', labelStr: '組織', data: { icon: '/src/assets/images/onepiece/GoingMerry.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '12', text: '紅髮海賊團', labelStr: '組織', data: { icon: '/src/assets/images/onepiece/Red_Hair_Pirates.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '13', text: '頂上戰爭', labelStr: '事件', data: { icon: '/src/assets/images/onepiece/Marineford_Arc.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '14', text: '蒙奇·D·卡普', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/MonkeyDGarp.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '15', text: '蒙奇·D·龍', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/MonkeyDDragon.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '16', text: '薩波', labelStr: '人物', data: { icon: '/src/assets/images/onepiece/Sabo_Mera_Mera.webp', sexType: 'male', isGoodMan: true },
        },
        {
          id: '17',
          text: '托尼托尼·喬巴',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/onepiece/TonyTonyChopper.webp', sexType: 'male', isGoodMan: true, position: '船醫', nickname: '愛吃棉花糖的喬巴', dream: '成為能醫治所有疾病的萬能藥',
          },
        },
        {
          id: '18',
          text: '弗蘭奇',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/onepiece/Franky.webp',
            sexType: 'male',
            isGoodMan: true,
            position: '船匠',
            nickname: '鐵人·弗蘭奇',
            bounty: '9400萬貝里',
            achievement: '千里陽光號的創建者',
          },
        },
        {
          id: '19',
          text: '妮可·羅賓',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/onepiece/NicoRobin.webp', sexType: 'female', isGoodMan: true, position: '考古學家', nickname: '惡魔之子', goal: '找到真正的歷史正文',
          },
        },
        {
          id: '20',
          text: '布魯克',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/onepiece/Brook.webp',
            sexType: 'male',
            isGoodMan: true,
            position: '音樂家',
            nickname: '靈魂之王',
            bounty: '8300萬貝里',
            traits: '骷髏身體，爆炸頭',
          },
        },
        {
          id: '21',
          text: '甚平',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/onepiece/Jinbe.webp',
            sexType: 'male',
            isGoodMan: true,
            position: '舵手',
            nickname: '海俠',
            bounty: '4億3800萬貝里',
            belief: '最終稱霸大海的是草帽路飛',
          },
        },
      ],
      lines: [
        {
          id: '1', from: '1', to: '11', text: '船長',
        },
        {
          id: '2', from: '2', to: '11', text: '成員',
        },
        {
          id: '3', from: '3', to: '11', text: '成員',
        },
        {
          id: '4', from: '4', to: '11', text: '成員',
        },
        {
          id: '5', from: '5', to: '11', text: '成員',
        },
        {
          id: '6', from: '6', to: '1', text: '引路人',
        },
        {
          id: '7', from: '6', to: '12', text: '船長',
        },
        {
          id: '8', from: '7', to: '1', text: '兄弟',
        },
        {
          id: '9', from: '8', to: '7', text: '老爹',
        },
        {
          id: '10', from: '9', to: '1', text: '追捕',
        },
        {
          id: '11', from: '10', to: '1', text: '仇敵',
        },
        {
          id: '12', from: '1', to: '13', text: '參與',
        },
        {
          id: '13', from: '7', to: '13', text: '參與',
        },
        {
          id: '14', from: '14', to: '1', text: '祖父',
        },
        {
          id: '15', from: '15', to: '1', text: '父親',
        },
        {
          id: '16', from: '16', to: '1', text: '兄弟',
        },
        {
          id: '17', from: '17', to: '11', text: '成員',
        },
        {
          id: '18', from: '18', to: '11', text: '成員',
        },
        {
          id: '19', from: '19', to: '11', text: '成員',
        },
        {
          id: '20', from: '20', to: '11', text: '成員',
        },
        {
          id: '21', from: '21', to: '11', text: '成員',
        },
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
            icon: '/src/assets/images/hunters/GonFreecss.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
        {
          id: '2',
          text: '米特',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/Mito.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
        {
          id: '4',
          text: '奇犽·揍敵客',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/KilluaZoldyck.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
        {
          id: '5',
          text: '酷拉皮卡',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/Kurapika.webp',
            sexType: 'female',
            isGoodMan: true,
          },
        },
        {
          id: '6',
          text: '雷歐力·帕拉丁奈特',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/LeorioPaladinight.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
        {
          id: '7',
          text: '西索·莫羅',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/HisokaMorow.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
        {
          id: '8',
          text: '庫洛洛·魯西魯',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/ChrolloLucilfer.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
        {
          id: '9',
          text: '凱特',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/Kite.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
        {
          id: '10',
          text: '金·富力士',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/GingFreecss.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
        {
          id: '11',
          text: '比司吉·酷露佳',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/BiscuitKrueger.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
        {
          id: '16',
          text: '雲谷',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/Wing.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
        {
          id: '17',
          text: '伊路米·揍敵客',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/IllumiZoldyck.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
        {
          id: '18',
          text: '桀諾．揍敵客',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/ZenoZoldyck.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
        {
          id: '19',
          text: '阿路加•揍敵客',
          labelStr: '人物',
          data: {
            icon: '/src/assets/images/hunters/AllukaZoldyck.webp',
            sexType: 'male',
            isGoodMan: true,
          },
        },
      ],
      lines: [
        {
          id: '3', from: '2', to: '1', text: '阿姨',
        },
        {
          id: '8', from: '1', to: '4', text: '好友',
        },
        {
          id: '9', from: '1', to: '5', text: '好友',
        },
        {
          id: '10', from: '1', to: '6', text: '好友',
        },
        {
          id: '12', from: '11', to: '1', text: '教導',
        },
        {
          id: '15', from: '9', to: '1', text: '拯救',
        },
        {
          id: '16', from: '10', to: '9', text: '徒弟',
        },
        {
          id: '17', from: '1', to: '10', text: '父親',
        },
        {
          id: '18', from: '5', to: '8', text: '對抗',
        },
        {
          id: '19', from: '7', to: '8', text: '對抗',
        },
        {
          id: '22', from: '16', to: '1', text: '教導',
        },
        {
          id: '23', from: '11', to: '4', text: '教導',
        },
        {
          id: '24', from: '7', to: '1', text: '獵物',
        },
        {
          id: '25', from: '17', to: '4', text: '兄弟',
        },
        {
          id: '26', from: '17', to: '7', text: '交易',
        },
        {
          id: '27', from: '4', to: '18', text: '祖父',
        },
        {
          id: '28', from: '4', to: '19', text: '妹妹',
        },
        {
          id: '29', from: '16', to: '11', text: '徒弟',
        },
      ],
    },
  },
  {
    name: '蠟筆小新',
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
  // {
  //   name: '名偵探柯南',
  //   data: {
  //     rootId: '1',
  //     nodes: [
  //       { id: '1', text: 'a' },
  //       { id: 'b', text: 'b' },
  //       { id: 'c', text: 'c' },
  //       { id: 'd', text: 'd' },
  //       { id: 'e', text: 'e' },
  //       { id: 'f', text: 'f' },
  //     ],
  //     lines: [
  //       { from: '1', to: 'b' },
  //       { from: '1', to: 'c' },
  //       { from: '1', to: 'd' },
  //       { from: '1', to: 'e' },
  //       { from: '1', to: 'f' },
  //     ],
  //   },
  // },
  // {
  //   name: '名偵探柯南',
  //   data: {
  //     rootId: '1',
  //     nodes: [
  //       { id: '1', text: 'a' },
  //       { id: 'b', text: 'b' },
  //       { id: 'c', text: 'c' },
  //       { id: 'd', text: 'd' },
  //       { id: 'e', text: 'e' },
  //       { id: 'f', text: 'f' },
  //     ],
  //     lines: [
  //       { from: '1', to: 'b' },
  //       { from: '1', to: 'c' },
  //       { from: '1', to: 'd' },
  //       { from: '1', to: 'e' },
  //       { from: '1', to: 'f' },
  //     ],
  //   },
  // },
  // {
  //   name: '藍色監獄',
  //   data: {
  //     rootId: '1',
  //     nodes: [
  //       { id: '1', text: 'a' },
  //       { id: 'b', text: 'b' },
  //       { id: 'c', text: 'c' },
  //       { id: 'd', text: 'd' },
  //       { id: 'e', text: 'e' },
  //       { id: 'f', text: 'f' },
  //     ],
  //     lines: [
  //       { from: '1', to: 'b' },
  //       { from: '1', to: 'c' },
  //       { from: '1', to: 'd' },
  //       { from: '1', to: 'e' },
  //       { from: '1', to: 'f' },
  //     ],
  //   },
  // },
];
