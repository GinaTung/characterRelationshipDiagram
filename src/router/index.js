import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import sourceView from '../views/SourceView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/source',
      name: 'source',
      component: sourceView,
    },
  ],
});

export default router;
