let form = {
  type: 'form',
  controls: [
    {
      type: 'text',
      label: '任务名',
      key: 'name',
      value: '',
      col: {
        span: 7,
        label: 7,
        wrapper: 17
      }
    },
    {
      type: 'text',
      label: '任务描述',
      key: 'describ',
      value: '',
      col: {
        span: 7,
        label: 7,
        wrapper: 17
      }
    },
    {
      type: 'select',
      label: '执行人',
      key: 'person',
      value: '',
      col: {
        span: 10,
        label: 7,
        wrapper: 16
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
