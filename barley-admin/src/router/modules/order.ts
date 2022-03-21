import Layout from '@/layouts';
import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

export default [
  {
    path: '/order',
    component: Layout,
    redirect: '/order/order',
    name: 'order',
    meta: { title: '订单管理', icon: DashboardIcon },
    children: [
      {
        path: 'order',
        name: 'orderManagement',
        component: () => import('@/pages/order/order.vue'),
        meta: { title: '订单管理' },
      },
    ],
  },
];
