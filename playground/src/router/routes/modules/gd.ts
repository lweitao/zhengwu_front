import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:grid-2x2-check',
      order: -1,
      title: "工单流程",
    },
    name: 'gd',
    path: '/gd',
    children: [
      {
        name: 'equipment_maintenance',
        path: '/equipment_maintenance',
        component: () => import('#/views/examples/vxe-table/dyform.vue'),
        meta: {
          title: "维修任务",
          table: 'equipment_maintenance' 
        }
      },
    ],
  },
];

export default routes;
