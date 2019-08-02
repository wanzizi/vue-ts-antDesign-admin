let page1 = {
  type: 'list', // 最基础的list
  data: {
    api: 'www.baidu.com',
    schema: 'data.data'
  },
  page: {},
  table: {
    columns: [{
      dataIndex: 'name',
      weight: '2', // 占几个字符串
      key: 'name',
      slots: { title: 'customTitle' },
      scopedSlots: { customRender: 'name' }
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    }, {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      scopedSlots: { customRender: 'tags' } // 这里应该支持常规的几种。状态显示，开关
    }, {
      title: 'Action',
      key: 'action',
      scopedSlots: { customRender: 'action' }
    }],
    actions: {
      edit: {
        api: 'www.baidu.com',
        form: form
      },
      delete: {

      },
      info: {

      },
      other: [{
        type: 'dialog',
        title: '自定义'
      }]
    }
  },
  search: [{
    key: 'tags',
    title: 'tags',
    type: 'input'
  }],
  button: {
    add: {
      api: 'www.baidu.com',
      form: form
    },
    export: {

    },
    alldelete: {

    }
  }// 配置主动事件怎么写

}

export default page1
