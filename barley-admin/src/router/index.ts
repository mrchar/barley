import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import baseRouters from './modules/base';
import componentsRouters from './modules/components';
import othersRouters from './modules/others';
import shopRouters from './modules/shop';
import salesRouter from './modules/sales';
import orderRouter from './modules/order';
import employeeRouters from './modules/employee';
import systemRouters from './modules/system';
import expressRouters from './modules/express';

// 关于单层路由，meta 中设置 { single: true } 即可为单层路由，{ hidden: true } 即可在侧边栏隐藏该路由

// 存放动态路由
export const asyncRouterList: Array<RouteRecordRaw> = [
  ...shopRouters,
  ...salesRouter,
  ...orderRouter,
  ...expressRouters,
  ...employeeRouters,
  ...systemRouters,
  ...baseRouters,
  ...componentsRouters,
  ...othersRouters,
];

// 存放固定的路由
const defaultRouterList: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/dashboard/base',
    component: () => import('@/layouts/blank.vue'),
  },
  {
    path: '/:w+',
    name: '404Page',
    redirect: '/result/404',
  },
];

export const allRoutes = [...defaultRouterList, ...asyncRouterList];

const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
