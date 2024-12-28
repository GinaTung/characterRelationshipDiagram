import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import sourceView from '../views/SourceView.vue';
import ManageRelationshipInfoView from '../views/ManageRelationshipInfoView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ManageRelationshipInfo',
      name: 'ManageRelationshipInfo',
      component: ManageRelationshipInfoView,
    },
    {
      path: '/source',
      name: 'source',
      component: sourceView,
    },
  ],
});

export default router;
