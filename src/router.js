import { createRouter, createWebHistory } from 'vue-router';

import IndexPage from './pages/IndexPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    component: IndexPage
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
