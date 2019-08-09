let form = {
  type: 'form',
  controls: [
    {
      type: 'text',
      label: '仓库名',
      key: 'warehouseName',
      value: '',
      col: {
        span: 7,
        label: 7,
        wrapper: 17
      },
      validate: {
        required: true
      }
    },
    {
      type: 'text',
      label: '仓库域名',
      key: 'warehouseWeb',
      value: '',
      specialOpt: {
        block: {
          prefix: 'http://',
          suffix: '.com'
        }
      },
      col: {
        span: 7,
        label: 7,
        wrapper: 17
      },
      validate: {
        required: true
      }
    },
    {
      type: 'select',
      label: '仓库管理员',
      key: 'admin',
      value: '',
      col: {
        span: 10,
        label: 7,
        wrapper: 16
      },
      validate: {
        required: true
      },
      options: [
        {
          label: '张三',
          value: '0'
        },
        {
          label: '李四',
          value: '1'
        }
      ]
    }
  ]
}
export default form
