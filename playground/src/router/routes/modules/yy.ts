import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:grid-2x2-check',
      order: -1,
      title: "智慧运营",
    },
    name: 'yy',
    path: '/yy',
    children: [
      {
        name: 'ai_call_record',
        path: '/ai_call_record',
        component: () => import('#/views/examples/vxe-table/dyform.vue'),
        meta: {
          title: "通话记录",
          table: 'ai_call_record' 
        }
      },
      {
        name: 'customer',
        path: '/customer',
        component: () => import('#/views/examples/vxe-table/dyform.vue'),
        meta: {
          title: "客户",
          table: 'customer' 
        }
      },
      {
        name: 'customers',
        path: '/customers',
        component: () => import('#/views/examples/vxe-table/dyform.vue'),
        meta: {
          title: "客户详细",
          table: 'customers' 
        }
      }
    ],
  },
];

export default routes;
