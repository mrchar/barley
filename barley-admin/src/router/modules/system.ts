import Layout from '@/layouts';
import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

export default [
  {
    path: '/system',
    component: Layout,
    redirect: '/system/users',
    name: 'system',
    meta: { title: '系统管理', icon: DashboardIcon },
    children: [
      {
        path: 'users',
        name: 'userManagement',
        component: () => import('@/pages/system/users.vue'),
        meta: { title: '用户管理' },
      },
      {
        path: 'roles',
        name: 'roleManagement',
        component: () => import('@/pages/system/roles.vue'),
        meta: { title: '角色管理' },
      },
    ],
  },
];
