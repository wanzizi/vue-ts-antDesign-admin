export default {
  path: 'form',
  name: 'form',
  component: () => import('@/views/form/Index.vue'),
  children: [
    {
      path: 'form-base',
      name: 'form-base',
      component: () => import('@/views/form/FormBase.vue')
    }
  ]
}
