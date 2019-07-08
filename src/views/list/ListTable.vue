<template>
    <div class="list-table">
        <a-button type="primary" icon="plus">新建</a-button>
        <a-alert :message="`已选择 ${selectedRowKeys.length} 项  服务调用次数总计 ${callTotal} 万清空`" type="info" showIcon />
        <a-table :pagination="pagination" :rowSelection="rowSelection" :columns="columns" :dataSource="data1">
            <a slot="operation" slot-scope="text" href="javascript:;">Publish</a>
        </a-table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Table, Button, Alert } from 'ant-design-vue'

@Component({
  components: {
    'a-table': Table,
    'a-alert': Alert,
    'a-button': Button
  }
})
export default class ListTable extends Vue {
    buttonShow:Boolean=false
    pagination:any={
      showSizeChanger: true,
      showQuickJumper: true
    }
    callTotal:Number=0
    selectedRowKeys:Array<any>=[]
    columns:any = [{
      title: '名称',
      dataIndex: 'name'
    },
    {
      title: '服务调用次数',
      dataIndex: 'age',
      sorter: (a:any, b:any) => a.age - b.age
    //   sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order
    },
    {
      title: 'Address',
      dataIndex: 'address'
    },
    {
      title: '操作',
      dataIndex: 'operation',
      scopedSlots: { customRender: 'operation' }
    }
    ]
    get data1 ():any {
      const data1 = []
      for (let i = 0; i < 46; i++) {
        data1.push({
          key: '123' + i,
          name: `Edward King ${i}`,
          age: 32 + i,
          address: `London, Park Lane no. ${i}`
        })
      }
      return data1
    }
    get rowSelection () {
    //   const { selectedRowKeys } = this
      return {
        onChange: (selectedRowKeys:Array<any>, selectedRows:Array<any>) => {
          this.selectedRowKeys = selectedRowKeys
        }
        // getCheckboxProps: (record:any) => ({
        //   props: {
        //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
        //     name: record.name
        //   }
        // })
      }
    }
}
</script>

<style scoped lang="less">
.list-table{
    background: #fff;
}
</style>
