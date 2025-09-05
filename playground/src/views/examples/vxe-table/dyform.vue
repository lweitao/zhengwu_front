<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { VbenFormProps } from '#/adapter/form';
import type { VxeTableGridOptions } from '#/adapter/vxe-table';

import { Page } from '@vben/common-ui';

import { message } from 'ant-design-vue';
import dayjs from 'dayjs';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { getExampleTableApi, getExampleTableMetaApi, getExampleFormMetaApi } from '#/api';
import { useRoute } from 'vue-router'

const route = useRoute()

interface RowType {
  category: string;
  color: string;
  id: string;
  price: string;
  productName: string;
  releaseDate: string;
}


const formOptions = ref({
  // 默认展开
  collapsed: false,
  fieldMappingTime: [['date', ['start', 'end']]],
  schema: [
    {
      component: 'Input',
      defaultValue: '1',
      fieldName: 'category',
      label: 'Category',
    },
    {
      component: 'Input',
      fieldName: 'ordername',
      label: 'ordername',
    },
    {
      component: 'Input',
      fieldName: 'price',
      label: '价格',
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: [
          {
            label: 'Color1',
            value: '1',
          },
          {
            label: 'Color2',
            value: '2',
          },
        ],
        placeholder: '请选择',
      },
      fieldName: 'color',
      label: 'Color',
    },
    {
      component: 'RangePicker',
      defaultValue: [dayjs().subtract(7, 'days'), dayjs()],
      fieldName: 'date',
      label: 'Date',
    },
  ],
  // 控制表单是否显示折叠按钮
  showCollapseButton: true,
  // 是否在字段值改变时提交表单
  submitOnChange: true,
  // 按下回车时是否提交表单
  submitOnEnter: false,
});

const gridOptions = ref({
  checkboxConfig: {
    highlight: true,
    labelField: 'name',
  },
  columns: [],
  exportConfig: {},
  height: 'auto',
  keepSource: true,
  pagerConfig: {},
  proxyConfig: {
    ajax: {
      query: async ({ page }, formValues) => {
        // message.success(`Query params: ${JSON.stringify(formValues)}`);
        return await getExampleTableApi({
          page: page.currentPage,
          pageSize: page.pageSize,
          ...formValues,
          table: route.meta.table
        });
      },
    },
  },
  toolbarConfig: {
    custom: true,
    export: true,
    refresh: true,
    resizable: true,
    search: true,
    zoom: true,
  },
});

const fetchColumns = async (): Promise<any[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { field: 'id', title: 'ID' },
        { field: 'name', title: '名称' },
        { field: 'age', title: '年龄' }
      ]);
    }, 1000);
  });
};

const [Grid, gridApi] = useVbenVxeGrid({
  formOptions,
  gridOptions,
});

onMounted(async () => {
  const result = await getExampleTableMetaApi({"tableName": route.meta.table});
  gridApi.setGridOptions({columns: result});

  const sche = await getExampleFormMetaApi({"tableName": route.meta.table});
  gridApi.formApi.setState({"schema": sche});

  document.title = route.meta.title;
});
</script>

<template>
  <Page auto-content-height>
    <Grid />
  </Page>
</template>
