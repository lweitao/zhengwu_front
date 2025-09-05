import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:grid-2x2-check',
      order: -1,
      title: "生产",
    },
    name: 'crm',
    path: '/crm',
    children: [
      {
        name: 'inventory',
        path: '/inventory',
        component: () => import('#/views/examples/vxe-table/dyform.vue'),
        meta: {
          title: "库存",
          table: 'inventory' 
        }
      },
    ],
  },
];

export default routes;
