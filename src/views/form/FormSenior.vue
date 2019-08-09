<template>
    <div class="form-senior">
        <div class="form-content-box">
            <h3 class="title">仓库管理</h3>
            <AntFormTool class="form-content" :configs="senior1.controls"></AntFormTool>
        </div>
        <div class="form-content-box">
            <h3 class="title">任务管理</h3>
            <AntFormTool class="form-content" :configs="senior2.controls"></AntFormTool>
        </div>
        <div class="form-content-box">
            <h3 class="title">成员管理</h3>
            <div class="table-content">
                <a-table :dataSource="dataSource" :columns="columns" :pagination="false">
                    <span slot="operation" slot-scope="text, record">
                        <a @click="edit(record.key)">编辑</a>
                        <a-divider type="vertical" />
                        <a>删除</a>
                    </span>
                </a-table>
                <a-button class="table-add-btn" type="dashed" icon="plus" block @click="addMember">新增成员</a-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AntFormTool from '@/components/public/form/ant'
import senior1 from '@/config/forms/senior1'
import senior2 from '@/config/forms/senior2'
import { FormItemObj } from '@/interface'
import { Table, Divider, Button } from 'ant-design-vue'

interface IFormItem{
  type:string;
  controls:Array<FormItemObj>
}

interface IDataItem{
    key:string;
    name:string;
    personNumber:string;
    department:string;
}
interface IColumnsItem{
    title:string;
    dataIndex:string;
    scopedSlots:ISlotsItem;
}
interface ISlotsItem{
    customRender:string;
}

@Component({
  components: {
    AntFormTool,
    'a-table': Table,
    'a-divider': Divider,
    'a-button': Button
  }
})
export default class FormSenior extends Vue {
    senior1:IFormItem=senior1
    senior2:IFormItem=senior2

    dataSource:IDataItem[]=[
      {
        key: '1',
        name: 'John Brown',
        personNumber: '00001',
        department: 'New York No. 1 Lake Park'
      }, {
        key: '2',
        name: 'Jim Green',
        personNumber: '00002',
        department: 'London No. 1 Lake Park'
      }, {
        key: '3',
        name: 'Joe Black',
        personNumber: '00003',
        department: 'Sidney No. 1 Lake Park'
      }
    ]

    columns:IColumnsItem[]=[
      {
        title: '成员姓名',
        dataIndex: 'name',
        scopedSlots: { customRender: 'name' }
      },
      {
        title: '工号',
        dataIndex: 'personNumber',
        scopedSlots: { customRender: 'personNumber' }
      },
      {
        title: '所属部门',
        dataIndex: 'department',
        scopedSlots: { customRender: 'department' }
      },
      {
        title: '操作',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' }
      }
    ]

    addMember ():void{
      this.dataSource.push({
        key: this.dataSource.length + '',
        name: '',
        personNumber: '',
        department: ''
      })
    }
}
</script>

<style lang="less" scoped>
.form-senior{
    height: 100%;
    .form-content-box{
        background: #fff;
        margin-bottom: 24px;
        .title{
            color: rgba(0,0,0,.85);
            font-weight: 500;
            font-size: 16px;
            padding: 16px 24px;
            border-bottom: 1px solid #e8e8e8;
            margin-bottom: 0;
        }
        .form-content{
            margin-top: 20px;
        }
        .table-content{
            padding: 24px;
            .table-add-btn{
                margin-top: 16px;
                margin-bottom: 8px;
            }
        }
    }
}
</style>
