// 完整form表单示例

let form = {
  type: 'form',
  mode: 'horizontal',
  title: '常规表单示例',
  actions: [
    {
      'label': '保存',
      'type': 'submit',
      'level': 'success',
      'api': '/api/form/save'
    }
  ],
  controls: [
    {
      'type': 'text',
      'label': 'text',
      'value': '',
      'key': 'name',
      'placeholder': '请输入姓名'
    },
    {
      'type': 'password',
      'label': 'password',
      'value': '',
      'key': 'passwordKeyName',
      'placeholder': '请输入密码',
      'disabled': false,
      'validate': {
        'required': true,
        'customs': [
          {
            'pattern': /^[\w_-]{6,16}$/,
            'message': '密码长度为6~16个字符，只能由字母数字下划线组成',
            'trigger': 'blur'
          }
        ]
      },
      'col': {
        'span': 12,
        'offset': 0,
        'label': 5,
        'wrapper': 12
      }
    },
    {
      'type': 'number',
      'label': 'number',
      'placeholder': '请输入年龄',
      'value': 10,
      'key': 'age',
      // '注释：根据visibleOn来判断该表单项是否有关联上级，比如填写了密码才能显示年龄，不填写则显示其他模块等类似业务',
      'visibleOn': {
        key: 'passwordKeyName',
        condition: 'passwordKeyName!=""'
      },
      'validate': {
        'min': 0,
        'max': 100
      },
      'col': {
        'span': 12,
        'offset': 0,
        'label': 5,
        'wrapper': 12
      }
    },
    {
      'type': 'date',
      // 'name': 'date',
      'key': 'date',
      'label': 'date',
      'required': true
    },
    {
      'type': 'time',
      'key': 'time',
      'label': 'time',
      'required': true
    },
    // {
    //   'type': 'alert',
    //   'level': 'info',
    //   'body': '因为没有配置 api 接口，不能真正的提交哈！'
    // },
    // {
    //   'type': 'hidden',
    //   'name': 'id'
    // },
    // {
    //   'type': 'divider'
    // },
    // {
    //   'type': 'image',
    //   'name': 'image',
    //   'multiple': false,
    //   'label': '图片',
    //   'required': true
    // },
    {
      'type': 'select',
      // 'name': 'type',
      'label': 'select',
      'key': 'select',
      'value': '1',
      'options': [
        {
          'label': '漂亮',
          'value': '1'
        },
        {
          'label': '开心',
          'value': '2'
        },
        {
          'label': '惊吓',
          'value': '3'
        },
        {
          'label': '漂亮',
          'value': '紧张'
        }
      ]
    },
    {
      'type': 'switch',
      //  'name': 'switch',
      'label': 'switch',
      'value': true,
      'key': 'switch'
    },
    {
      'type': 'slider',
      'label': 'slider',
      'value': 30,
      'key': 'slider'
    },
    {
      'type': 'radio',
      'label': 'radio',
      'value': 'apple',
      'key': 'radio',
      'options': [
        {
          'label': '苹果',
          'value': 'apple'
        },
        {
          'label': '橘子',
          'value': 'orange'
        },
        {
          'label': '香蕉',
          'value': 'banana'
        }
      ]
    },
    {
      'type': 'check',
      'label': 'check',
      'value': ['apple1'],
      'key': 'check',
      'options': [
        {
          'label': '苹果1',
          'value': 'apple1'
        },
        {
          'label': '橘子1',
          'value': 'orange1'
        },
        {
          'label': '香蕉1',
          'value': 'banana1'
        }
      ]
    },
    {
      'type': 'rate',
      'label': 'rate',
      'value': 3,
      'key': 'rate'
    }
  ]
}

export default form
