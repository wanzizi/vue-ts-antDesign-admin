export default {
  path: 'list',
  name: 'list',
  meta: {
    chineseName: '列表页'
  },
  desc: '',
  component: () => import('@/views/list/Index.vue'),
  children: [
    {
      path: 'list-table',
      name: 'list-table',
      meta: {
        chineseName: '查询表格',
        desc: ''
      },
      component: () => import('@/views/list/ListTable.vue')
    }
  ]
}
