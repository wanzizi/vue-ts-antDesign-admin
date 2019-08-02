
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
      'label': '姓名',
      'value': '',
      'key': 'name',
      'placeholder': '请输入姓名'
    },
    {
      'type': 'password',
      'label': '密码',
      'value': '',
      'key': 'passwordKeyName',
      'placeholder': '请输入密码',
      'disabled': false,
      'validate': {
        'required': true,
        'customs': [
          {
            'pattern': '/^[\\w_-]{6,16}$/',
            'message': '密码长度为6~16个字符，只能由字母数字下划线组成',
            'trigger': 'blur'
          }
        ]
      },
      'col': {
        'span': 6,
        'offset': 0,
        'label': 5,
        'wrapper': 12
      }
    },
    {
      'type': 'number',
      'label': '年龄',
      'placeholder': '请输入年龄',
      'value': 10,
      'key': 'age',
      '//': '注释：根据visibleOn来判断该表单项是否有关联上级，比如填写了密码才能显示年龄，不填写则显示其他模块等类似业务',
      'visibleOn': "this.passwordKeyName!==''",
      'validate': {
        'min': 0,
        'max': 100
      },
      'col': {
        'span': 6,
        'offset': 0,
        'label': 5,
        'wrapper': 12
      }
    },
    {
      'type': 'alert',
      'level': 'info',
      'body': '因为没有配置 api 接口，不能真正的提交哈！'
    },
    {
      'type': 'hidden',
      'name': 'id'
    },
    {
      'type': 'text',
      'name': 'text',
      'label': '文本',
      'required': true
    },
    {
      'type': 'divider'
    },
    {
      'type': 'image',
      'name': 'image',
      'multiple': false,
      'label': '图片',
      'required': true
    },
    {
      'type': 'divider'
    },
    {
      'type': 'date',
      'name': 'date',
      'label': '日期',
      'required': true
    },
    {
      'type': 'divider'
    },
    {
      'type': 'select',
      'name': 'type',
      'label': '选项',
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
    }
  ]
}

export default form
