/* eslint-env node */
module.exports = {
  root: true,
  rules: {
    'no-console': 'off', // 關閉 no-console 規則
    'import/prefer-default-export': 'off', // 關閉多個具名匯出
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // import/no-extraneous-dependencies 導入/無無關相依性
    'max-len': ["error", {
        "code": 250,
    }]
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue', '.css', '.scss'],
      },
    },
    'import/core-modules': [
      'vite',
      '@vitejs/plugin-vue',
    ],
  },
};
