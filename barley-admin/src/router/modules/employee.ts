import Layout from '@/layouts';
import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

export default [
  {
    path: '/employee',
    component: Layout,
    redirect: '/employee/employee',
    name: 'employee',
    meta: { title: '成员管理', icon: DashboardIcon },
    children: [
      {
        path: 'employee',
        name: 'employeeManagement',
        component: () => import('@/pages/employee/employee.vue'),
        meta: { title: '成员管理' },
      },
      {
        path: 'roles',
        name: 'employeeRoleManagement',
        component: () => import('@/pages/employee/roles.vue'),
        meta: { title: '角色管理' },
      },
    ],
  },
];
