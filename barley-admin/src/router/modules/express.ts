import Layout from '@/layouts';
import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

export default [
  {
    path: '/express',
    component: Layout,
    redirect: '/express/shipping',
    name: 'express',
    meta: { title: '物流管理', icon: DashboardIcon },
    children: [
      {
        path: 'shipping',
        name: 'shippingManagement',
        component: () => import('@/pages/express/shipping.vue'),
        meta: { title: '发货' },
      },
      {
        path: 'track-trace',
        name: 'trackTraceManagement',
        component: () => import('@/pages/express/track-trace.vue'),
        meta: { title: '追溯' },
      },
    ],
  },
];
