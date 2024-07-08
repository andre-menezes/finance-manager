import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

function lazyLoading(view: string) {
  return () => import(`@/views/${view}.vue`);
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: lazyLoading('DashboardView'),
    meta: {
      layout: 'default',
    }
  },
  {
    path: '/transaction',
    name: 'Transações',
    component: lazyLoading('TransactionView'),
    meta: {
      layout: 'default',
    }
  },
  {
    path: '/category',
    name: 'Categorias',
    component: lazyLoading('CategoryView'),
    meta: {
      layout: 'default',
    }
  },
  {
    path: '/settings',
    name: 'Configurações',
    component: lazyLoading('ConfigView'),
    meta: {
      layout: 'default',
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
