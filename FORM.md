### form组件文档

组件存放路径：src/components/public/form/ant.tsx

组件介绍：ant开发的json配置表单组件，父级传入json配置，由组件内部渲染出表单页面

##### json配置格式
```
formJson={
    type:'form',
    controls:[
        {
           type:'xxx', //***必填字段，表单项类型，具体列表由下面列表列出
           label:'', //***必填字段，中文名，表单名称，如姓名，密码等
           key:'', //***必填字段，后台对应的字段名
           value:'', //表单值，如填写会作为默认值，不一定是字符串，也有可能格式有可能是数组或其他类型
           placeholder:'',
           disabled:true/false,
           width:'30%', //表单项（input框，select框这种）宽度，默认100%占满
           suffix: ''， //后缀，会跟在表单项之后（input框，select框这种）
           specialOpt:{ //表单项的特殊配置，比如textarea的区域size大小等配置，暂时只对textarea的size大小，input的前后缀加了配置，还待扩充
                //textarea的size格式示例
                autosize: {
                    minRows: 4,
                    maxRows: 6
                },
                //input的前后缀格式示例
                prefix: '￥',
                suffix: '元'
           },
           validate:{ //表单校验
                required:true, //true为必填，不必填可以不写
                type:'', //字段值校验类型，默认为string，具体查看 https://github.com/yiminghe/async-validator
                min: 0, //最小值
                max: 100, //最大值
                customs:[
                    {
                        pattern:/$/, //校验正则
                        message:'', //提示语
                        trigger:'', //触发条件
                    },
                    ...
                ]
           },
           col:{
               span: 12, //栅格模式，当前表单项所占格子数，最大值为24
               offset: 1, //栅格模式，当前表单偏移格子数，最大值为24
               label: 5, //栅格模式，当前表单的中文名称（label）所占格子数，最大值为24
               wrapper: 21 //栅格模式，当前表单的表单内容（input框，select框等）所占格子数，最大值为24
           },
           options:[ //select,radio,check等有静态数据的表单项的数据列表
               {
                   label:'', // 中文显示名称
                   value:'' // 值
               }
           ],
           controls:[ // 当type: 'group'时，可以组合两个表单项，比如select和input结合，会将两个表单内容放在一起展示，可以设置width参数控制大小
               {
                   ...
               }
           ]
        }
    ]
}
```

##### 组件支持表单内容类型(type:'xxx')：
* text
* password
* textarea
* number
* select
* date
* dateRange
* month
* week（暂不支持，以后扩展）
* time
* switch
* slider
* radio
* check
* rate 星级类