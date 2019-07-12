export default {
  path: 'list',
  name: 'list',
  meta: {
    chineseName: '标准列表'
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
    },
    {
      path: 'list-standard',
      name: 'list-standard',
      meta: {
        chineseName: '卡片列表',
        desc: ''
      },
      component: () => import('@/views/list/ListStandard.vue')
    },
    {
      path: 'list-card',
      name: 'list-card',
      meta: {
        chineseName: '卡片列表',
        desc: ''
      },
      component: () => import('@/views/list/ListCard.vue')
    }
  ]
}
