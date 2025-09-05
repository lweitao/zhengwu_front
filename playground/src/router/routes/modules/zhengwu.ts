import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:grid-2x2-check',
      order: -1,
      title: "入口",
    },
    name: 'cusForm',
    path: '/cusForm',
    children: [
      {
        name: 'dyform',
        path: '/dyform',
        component: () => import('#/views/examples/vxe-table/dyform.vue'),
        meta: {
          title: "表格示例",
          table: 'order' 
        }
      }
    ],
  },
];

export default routes;
