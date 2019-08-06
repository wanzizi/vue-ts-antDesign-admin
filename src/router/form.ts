export default {
  path: 'form',
  name: 'form',
  meta: {
    chineseName: '表单页'
  },
  desc: '',
  component: () => import('@/views/form/Index.vue'),
  children: [
    {
      path: 'form-base',
      name: 'form-base',
      meta: {
        chineseName: '基础表单',
        desc: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。'
      },
      component: () => import('@/views/form/FormBase.vue')
    },
    {
      path: 'form-step',
      name: 'form-step',
      meta: {
        chineseName: '分步表单',
        desc: '将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。'
      },
      component: () => import('@/views/form/FormStep.vue')
      // (resolve: any) => require(['@/views/form/FormBase'], resolve)
    }
  ]
}
