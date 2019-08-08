let form = {
  type: 'form',
  controls: [
    {
      type: 'select',
      label: '付款账户',
      key: 'account',
      value: 'account1@qq.com',
      col: {
        wrapper: 19
      },
      options: [
        {
          label: 'account1@qq.com',
          value: 'account1@qq.com'
        },
        {
          label: 'account2@qq.com',
          value: 'account2@qq.com'
        },
        {
          label: 'account3@qq.com',
          value: 'account3@qq.com'
        }
      ]
    },
    {
      type: 'group',
      label: '收款账户',
      key: 'accountCompact',
      col: {
        wrapper: 19
      },
      controls: [
        {
          type: 'select',
          key: 'accountType',
          value: 'alipay',
          width: '30%',
          options: [
            {
              label: '支付宝',
              value: 'alipay'
            },
            {
              label: '银行账户',
              value: 'bank'
            }
          ]
        },
        {
          type: 'text',
          key: 'accountAddr',
          value: 'test@example.com',
          width: '70%'
        }
      ]
    },
    {
      type: 'text',
      label: '收款人姓名',
      key: 'receiveName',
      placeholder: '收款人姓名',
      value: 'Alex',
      col: {
        wrapper: 19
      }
    },
    {
      type: 'text',
      label: '转账金额',
      key: 'receiveAmount',
      placeholder: '转账金额',
      value: '500',
      col: {
        wrapper: 19
      },
      validate: {
        customs: [
          {
            pattern: /^(([1-9]\d*)|\d)(\.\d{1,2})?$/,
            message: '金额不能为空或0',
            trigger: 'blur'
          }
        ]
      },
      specialOpt: {
        inner: {
          prefix: '￥'
        }
      }
    }
  ]
}
export default form
