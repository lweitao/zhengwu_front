import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:grid-2x2-check',
      order: -1,
      title: "运维",
    },
    name: 'yw',
    path: '/yw',
    children: [
      {
        name: 'mgr_realtime_allocation',
        path: '/mgr_realtime_allocation',
        component: () => import('#/views/examples/vxe-table/dyform.vue'),
        meta: {
          title: "资源管理",
          table: 'mgr_realtime_allocation' 
        }
      },
      {
        name: 'mgr_task',
        path: '/mgr_task',
        component: () => import('#/views/examples/vxe-table/dyform.vue'),
        meta: {
          title: "任务表",
          table: 'mgr_task' 
        }
      },
    ],
  },
];

export default routes;
