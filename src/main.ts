import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import Router from 'vue-router'
import 'ant-design-vue/dist/antd.css'
import form3 from './router/form'
import list from './router/list'
Vue.use(Router)
Vue.config.productionTip = false
function adapter (option) {
  return new Router({
    routes: [
      {
        path: '/',
        name: 'index',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/Index.vue'),
        children: [
          form3,
          {
            path: 'list',
            name: 'list',
            meta: {
              chineseName: '标准列表'
            },
            desc: '',
            component: () => import('@/views/list/Index.vue'),
            children: [
              {
                path: 'lbb',
                name: 'list-table',
                meta: {
                  chineseName: '查询表格',
                  desc: ''
                },
                component: () => import('@/components/List.vue')
              }
            ]
          }
        ]
      }
    ]
  })
}

let router = adapter(option)

// interface event={
//   notify: (type: "error" | "success", msg: string) => void
//   jumpTo: (to:string, action?: Action, ctx?: object) => void
//   alert: (msg:string) => void
//   confirm: (msg:string, title?: string) => Promise<boolean>
// }

// let form = [
//   {
//     'type': 'alert',
//     'level': 'info',
//     'body': '因为没有配置 api 接口，不能真正的提交哈！'
//   },
//   {
//     'type': 'hidden',
//     'name': 'id'
//   },
//   {
//     'type': 'text',
//     'name': 'text',
//     'label': '文本',
//     'required': true
//   },
//   {
//     'type': 'divider'
//   },
//   {
//     'type': 'image',
//     'name': 'image',
//     'multiple': false,
//     'label': '图片',
//     'required': true
//   },
//   {
//     'type': 'divider'
//   },
//   {
//     'type': 'date',
//     'name': 'date',
//     'label': '日期',
//     'required': true
//   },
//   {
//     'type': 'divider'
//   },
//   {
//     'type': 'select',
//     'name': 'type',
//     'label': '选项',
//     'options': [// 这种是否强制必须字典
//       {
//         'label': '漂亮',
//         'value': '1'
//       },
//       {
//         'label': '开心',
//         'value': '2'
//       },
//       {
//         'label': '惊吓',
//         'value': '3'
//       },
//       {
//         'label': '漂亮',
//         'value': '紧张'
//       }
//     ]
//   }// 增加jsx类型？或者自由组件类型
// ]

// let page1 = {
//   type: 'list', // 最基础的list
//   data: {
//     api: 'www.baidu.com',
//     schema: 'data.data'
//   },
//   page: {},
//   table: {
//     columns: [{
//       dataIndex: 'name',
//       weight: '2', // 占几个字符串
//       key: 'name',
//       slots: { title: 'customTitle' },
//       scopedSlots: { customRender: 'name' }
//     }, {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age'
//     }, {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address'
//     }, {
//       title: 'Tags',
//       key: 'tags',
//       dataIndex: 'tags',
//       scopedSlots: { customRender: 'tags' } // 这里应该支持常规的几种。状态显示，开关
//     }, {
//       title: 'Action',
//       key: 'action',
//       scopedSlots: { customRender: 'action' }
//     }],
//     actions: {
//       edit: {
//         api: 'www.baidu.com',
//         form: form
//       },
//       delete: {

//       },
//       info: {

//       },
//       other: [{
//         type: 'dialog',
//         title: '自定义'
//       }]
//     }
//   },
//   search: [{
//     key: 'tags',
//     title: 'tags',
//     type: 'input'
//   }],
//   button: {
//     add: {
//       api: 'www.baidu.com',
//       form: form
//     },
//     export: {

//     },
//     alldelete: {

//     }
//   }// 配置主动事件怎么写

// }
let page2 = {
  type: 'zidingyi', // 自定义，login页面 或者特殊页面
  src: ''
}
let option = {
  layout: {
    left: {

    },
    top: {

    },
    bottom: {

    },
    tab: {

    },
    contents: {}
  },
  router: [
    {
      path: '/',
      name: 'index',
      title: '快乐主页',
      component: [
        // page1

      ]

    },
    {
      path: '/',
      name: 'index',
      title: '不快乐次页',
      component: [
        page2

      ]

    }
  ],
  base: {
    envData: {// 提前从服务器提取的缓存数据

    }
  }

}
Vue.prototype.$$options = option.router
// 转化路由
// 转化组件

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
