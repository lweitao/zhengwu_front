import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:grid-2x2-check',
      order: -1,
      title: "人力资源",
    },
    name: 'rl',
    path: '/rl',
    children: [
      {
        name: 'accounting-accounts',
        path: '/accounting-accounts',
        component: () => import('#/views/examples/vxe-table/dyform.vue'),
        meta: {
          title: "财务科目",
          table: 'accounting_accounts' 
        }
      },
      {
        name: 'attendance',
        path: '/attendance',
        component: () => import('#/views/examples/vxe-table/dyform.vue'),
        meta: {
          title: "员工考勤",
          table: 'attendance' 
        }
      },
      {
        name: 'employees',
        path: '/employees',
        component: () => import('#/views/examples/vxe-table/dyform.vue'),
        meta: {
          title: "雇员",
          table: 'employees' 
        }
      },
      {
        name: 'mgr_performance',
        path: '/mgr_performance',
        component: () => import('#/views/examples/vxe-table/dyform.vue'),
        meta: {
          title: "绩效管理",
          table: 'mgr_performance' 
        }
      },
    ],
  },
];

export default routes;
