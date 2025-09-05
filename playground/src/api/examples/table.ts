import { requestClient } from '#/api/request';

export namespace DemoTableApi {
  export interface PageFetchParams {
    [key: string]: any;
    page: number;
    pageSize: number;
  }
  export interface TableStructure {
    tableName: string;
  }
}


/**
 * 获取示例表格数据
 */
async function getExampleTableApi(params: DemoTableApi.PageFetchParams) {
  //return requestClient.get('table/list', { params });
  return requestClient.get(`../zhengwu/${params.table}/page`, { params });
}

/**
 * 获取示例表格结构
 */
async function getExampleTableMetaApi(params: DemoTableApi.TableStructure) {
  return requestClient.get('../zhengwu/meta/table-structure', { params });
}
/**
 * 获取示例表格结构
 */
async function getExampleFormMetaApi(params: DemoTableApi.TableStructure) {
  return requestClient.get('../zhengwu/meta/table-formstructure', { params });
}


export { getExampleTableApi, getExampleTableMetaApi, getExampleFormMetaApi };
