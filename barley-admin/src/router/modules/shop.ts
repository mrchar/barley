import Layout from '@/layouts';
import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

export default [
  {
    path: '/shop',
    component: Layout,
    redirect: '/shop/shops',
    name: 'shop',
    meta: { title: '商铺管理', icon: DashboardIcon },
    children: [
      {
        path: 'shops',
        name: 'shopManagement',
        component: () => import('@/pages/shop/shops.vue'),
        meta: { title: '商铺列表' },
      },
      {
        path: 'approve',
        name: 'approveManagement',
        component: () => import('@/pages/shop/approve.vue'),
        meta: { title: '商铺准入' },
      },
      {
        path: 'banned',
        name: 'bannedManagement',
        component: () => import('@/pages/shop/banned.vue'),
        meta: { title: '封禁商铺' },
      },
    ],
  },
];
