import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

// 导出
export function exportFrom(param) {
  return request({
    url: 'transaction/export',
    method: 'post',
    data: param,
    responseType: 'blob'
  })
}
