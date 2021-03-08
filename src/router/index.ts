import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import { aboutRoutes } from '@/modules/About';
import { homeRoutes } from '@/modules/Home';

const routes: Array<RouteRecordRaw> = [
  ...homeRoutes,
  ...aboutRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
