import Layout from '@/layouts';
import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

export default [
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/goods',
    name: 'goods',
    meta: { title: '商品管理', icon: DashboardIcon },
    children: [
      {
        path: 'goods',
        name: 'goodsManagement',
        component: () => import('@/pages/goods/goods.vue'),
        meta: { title: '商品管理' },
      },
      {
        path: 'shelves',
        name: 'shelvesManagement',
        component: () => import('@/pages/goods/shelves.vue'),
        meta: { title: '上架下架' },
      },
    ],
  },
];
