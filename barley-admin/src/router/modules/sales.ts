import Layout from '@/layouts';
import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

export default [
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/goods',
    name: 'goods',
    meta: { title: '销售管理', icon: DashboardIcon },
    children: [
      {
        path: 'goods',
        name: 'goodsManagement',
        component: () => import('@/pages/sales/goods.vue'),
        meta: { title: '商品管理' },
      },
      {
        path: 'shelves',
        name: 'shelvesManagement',
        component: () => import('@/pages/sales/shelves.vue'),
        meta: { title: '上架下架' },
      },
      {
        path: 'marketing',
        name: 'marketingManagement',
        component: () => import('@/pages/sales/marketing.vue'),
        meta: { title: '营销活动' },
      },
    ],
  },
];
