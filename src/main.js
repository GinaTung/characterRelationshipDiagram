import './assets/base.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import ToastService from 'primevue/toastservice'
import 'primeicons/primeicons.css'
// import RelationGraph from 'relation-graph'
import RelationGraph from 'relation-graph-vue3';
import App from './App.vue';
import router from './router';
// tailwind
import './assets/main.scss';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(ToastService);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: { // tailwindCSS 及 primeVue 載入順序設定
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
    },
  },
});
app.use(RelationGraph);
app.mount('#app');
