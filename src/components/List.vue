<template>
    <a-card class="list-table" :bordered="false">
        <a-form :form="form" layout="horizontal">
            <a-row >
                <a-col :md="8" :sm="24" >
                    <a-form-item
                    label="规则编号"
                    :labelCol="labelCol"
                    :wrapperCol="wrapperCol"
                    >
                    <a-input placeholder="请输入" />
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24" >
                    <a-form-item
                    label="使用状态"
                    :labelCol="labelCol"
                    :wrapperCol="wrapperCol"
                    >
                    <a-select placeholder="请选择">
                        <a-select-option value="1">关闭</a-select-option>
                        <a-select-option value="2">运行中</a-select-option>
                    </a-select>
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24" v-if="expand">
                    <a-form-item
                    label="调用次数"
                    :labelCol="labelCol"
                    :wrapperCol="wrapperCol"
                    >
                    <a-input-number style="width: 100%" placeholder="请输入" />
                    </a-form-item>
                </a-col>
                <template v-if="expand">
                <a-col :md="8" :sm="24" >
                    <a-form-item
                    label="更新日期"
                    :labelCol="labelCol"
                    :wrapperCol="wrapperCol"
                    >
                    <a-date-picker style="width: 100%" placeholder="请输入更新日期" />
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24" >
                    <a-form-item
                    label="使用状态"
                    :labelCol="labelCol"
                    :wrapperCol="wrapperCol"
                    >
                    <a-select placeholder="请选择">
                        <a-select-option value="1">关闭</a-select-option>
                        <a-select-option value="2">运行中</a-select-option>
                    </a-select>
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24" >
                    <a-form-item
                    label="描述"
                    :labelCol="labelCol"
                    :wrapperCol="wrapperCol"
                    >
                    <a-input placeholder="请输入" />
                    </a-form-item>
                </a-col>
                </template>
                <a-col :md="expand ?24:8" :sm="expand ?24:8" >
                    <a-form-item :style="{'float':expand?'right':'left'}">
                        <a-button type="primary">查询</a-button>
                        <a-button style="margin-left: 8px" @click="handleReset">重置</a-button>
                        <a @click="toggleExpand" style="margin-left: 8px">
                            {{expand ? '收起' : '展开'}}
                            <a-icon :type="expand ? 'up' : 'down'" />
                        </a>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
        <section class="button-operator">
            <a-button type="primary" icon="plus">新建</a-button>
            <a-button v-show="selectedRowKeys.length">批量操作</a-button>
            <a-dropdown v-show="selectedRowKeys.length">
                <a-menu slot="overlay">
                    <a-menu-item key="1">删除</a-menu-item>
                    <a-menu-item key="2">批量审批</a-menu-item>
                </a-menu>
                <a-button>
                    更多操作 <a-icon type="down" />
                </a-button>
            </a-dropdown>
        </section>
        <a-alert class="table-alert" type="info" showIcon >
            <span slot="message">
                已选择 <a style="font-weight: 600;">{{selectedRowKeys.length}}</a> 项 &nbsp;&nbsp;
                <span style="margin-right:24px;">服务调用次数总计 {{callTotal}} <b>万</b></span>
                <a @click="clearSelectData">清空</a>
            </span>
        </a-alert>
        <a-table
            :pagination="pagination"
            :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
            :columns="columns"
            :dataSource="data1">
            <a slot="operation" href="javascript:;">配置</a>
        </a-table>
    </a-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Row, Col, Form, Select, Input, InputNumber, DatePicker, Table, Button, Icon, Alert, Card, Dropdown, Menu } from 'ant-design-vue'
import { colObj, paginationObj } from '@/interface'

interface formObj{
    key: number,
    no: string,
    description: string,
    callNo: number,
    status: number,
    updatedAt: string
}
const list:any = []
for (let i = 0; i < 46; i++) {
  list.push({
    key: i,
    no: 'NO ' + i,
    description: '这是一段描述',
    callNo: Math.floor(Math.random() * 1000),
    status: Math.floor(Math.random() * 10) % 4,
    updatedAt: '2019-07-01'
  })
}

@Component({
  components: {
    'a-card': Card,
    'a-row': Row,
    'a-col': Col,
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-select': Select,
    'a-select-option': Select.Option,
    'a-input': Input,
    'a-input-number': InputNumber,
    'a-date-picker': DatePicker,
    'a-table': Table,
    'a-alert': Alert,
    'a-dropdown': Dropdown,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-button': Button,
    'a-icon': Icon
  }
})
export default class ListTable extends Vue {
    @Prop() private columns!:any
      @Prop() private data1!:any
    labelCol: colObj={
      xs: { span: 8 },
      sm: { span: 5 }
    }
    wrapperCol:colObj= {
      xs: { span: 10 },
      sm: { span: 18 }
    }
    private form: any;

    expand:Boolean=false

    buttonShow:Boolean=false

    pagination:paginationObj={
      showSizeChanger: true,
      showQuickJumper: true
    }

    callTotal:Number=0

    selectedRowKeys:Array<Number|String>=[]
    // data1:Array<any>=list
    // columns:any = [
    //   {
    //     title: '规则编号',
    //     dataIndex: 'no'
    //   },
    //   {
    //     title: '描述',
    //     dataIndex: 'description'
    //   },
    //   {
    //     title: '服务调用次数',
    //     dataIndex: 'callNo',
    //     sorter: (a:any, b:any) => a.callNo - b.callNo,
    //     customRender: (num:number) => num + ' 次'
    //   },
    //   {
    //     title: '状态',
    //     dataIndex: 'status',
    //     needTotal: true
    //   },
    //   {
    //     title: '更新时间',
    //     dataIndex: 'updatedAt'
    //   },
    //   {
    //     title: '操作',
    //     dataIndex: 'operation',
    //     scopedSlots: { customRender: 'operation' }
    //   }
    // ]

    beforeCreate () {
      this.form = this.$form.createForm(this)
    }
    onSelectChange (selectedRowKeys:Array<Number|String>, selectedRows:Array<any>) {
      this.selectedRowKeys = selectedRowKeys
    }

    clearSelectData () {
      this.selectedRowKeys = []
    }
    toggleExpand () {
      this.expand = !this.expand
    }
    handleReset () {
      this.form.resetFields()
    }
}
</script>

<style scoped lang="less">
.list-table{
    background: #fff;
    margin: 24px 24px 0;
    .button-operator{
        margin-bottom: 16px;
        button{
            margin-right: 8px;
        }
    }
    .table-alert{
        margin-bottom: 16px;
    }
}
</style>
