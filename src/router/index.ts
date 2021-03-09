import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import { mapRoutes } from '../modules/Map';

const routes: Array<RouteRecordRaw> = [
  ...mapRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
