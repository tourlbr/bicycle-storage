import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import { bicycleStorageRoutes } from '../modules/BicycleStorage';

const routes: Array<RouteRecordRaw> = [
  ...bicycleStorageRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
