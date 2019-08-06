let form = {
  type: 'form',
  controls: [
    {
      type: 'text',
      label: '标题',
      key: 'title',
      placeholder: '给目标起个名字',
      validate: {
        required: true
      }
    },
    {
      type: 'dateRange',
      label: '起止日期',
      key: 'date',
      placeholder: ['开始时间', '结束时间'],
      validate: {
        required: true
      }
    },
    {
      type: 'textarea',
      label: '目标描述',
      key: 'target',
      specialOpt: {
        minRows: 4,
        maxRows: 6
      },
      placeholder: '请输入你的阶段性工作目标',
      validate: {
        required: true
      }
    },
    {
      type: 'textarea',
      label: '衡量标准',
      key: 'standard',
      specialOpt: {
        minRows: 4,
        maxRows: 6
      },
      placeholder: '请输入你的阶段性工作目标',
      validate: {
        required: true
      }
    },
    {
      type: 'text',
      label: '客户',
      key: 'customs',
      placeholder: '请描述你服务的客户，内部客户直接@姓名/工号'
    },
    {
      type: 'text',
      label: '邀评人',
      key: 'inviter',
      placeholder: '请直接@姓名/工号，最多可邀请5人'
    },
    {
      type: 'number',
      label: '权重',
      key: 'weight',
      col: {
        wrapper: 4
      }
    },
    {
      type: 'label',
      label: '%',
      col: {
        span: 1
      }
    },
    {
      type: 'radio',
      label: '目标公开',
      key: 'radio',
      validate: {
        required: true
      },
      value: 0,
      options: [
        {
          label: '公开',
          value: 0
        },
        {
          label: '部分公开',
          value: 1
        },
        {
          label: '不公开',
          value: 2
        }
      ]
    }
  ]
}

export default form
