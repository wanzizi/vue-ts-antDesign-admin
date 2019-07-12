<template>
    <div class="list-standard-main">
      <a-card hoverable  :bordered="false">
        <a-row>
          <a-col :sm="8" :xs="24">
            <head-info title="我的待办" content="8个任务" :bordered='true'/>
          </a-col>
          <a-col :sm="8" :xs="24">
            <head-info title="本周任务平均处理时间" content="32分钟" :bordered='true' />
          </a-col>
          <a-col :sm="8" :xs="24">
            <head-info title="本周完成任务数" content="24个"/>
          </a-col>
        </a-row>
      </a-card>
      <a-card class="pages-list-box"  :bordered="false" title="基本列表" style="margin-top:24px">
          <div slot="extra">
            <a-radio-group v-model="listStatus">
              <a-radio-button value="all">全部</a-radio-button>
              <a-radio-button value="underway">进行中</a-radio-button>
              <a-radio-button value="waiting">等待中</a-radio-button>
            </a-radio-group>
            <a-input-search style="margin-left: 16px; width: 272px;" />
          </div>
          <a-button type="dashed" icon="plus" block @click="add">添加</a-button>
          <a-list :dataSource="list" :pagination="pagination" :loading="loading">
            <a-list-item slot="renderItem" slot-scope="item,index">
                <a slot="actions" @click="edit">编辑</a>
                <a slot="actions">
                  <a-dropdown>
                    <a-menu slot="overlay">
                      <a-menu-item @click="edit"><a>编辑</a></a-menu-item>
                      <a-menu-item @click="del"><a>删除</a></a-menu-item>
                    </a-menu>
                    <a>更多<a-icon type="down"/></a>
                  </a-dropdown>
                </a>
                <a-list-item-meta :title="'VUE'+index">
                    <a-avatar slot="avatar" size="large" shape="square" src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png" />
                    <p class="description-ellipsis-multiple-line" slot="description">那是一种内在的东西， 他们到达不了，也无法触及的</p>
                </a-list-item-meta>
                <div class="list-content">
                  <div class="list-content-item">
                    <span>Owner</span>
                    <p>付小小</p>
                  </div>
                  <div class="list-content-item">
                    <span>开始时间</span>
                    <p>2018-07-26 22:44</p>
                  </div>
                  <div class="list-content-item">
                    <a-progress :percent="80" :status="index%2?'active':'exception'" style="width: 180px" />
                  </div>
                </div>
            </a-list-item>
          </a-list>
      </a-card>
      <a-modal
        title="任务编辑"
        v-model="model"
        @ok="handleOk"
      >
        <a-form :form="form" layout="horizontal">
            <a-row >
                <a-col>
                    <a-form-item
                    label="任务名称"
                    :labelCol="labelCol"
                    :wrapperCol="wrapperCol"
                    >
                    <a-input
                      v-decorator="[
                        'name',
                        {
                          rules: [{
                            required: true, message: '请输入任务名称',
                          }],
                        }
                      ]"
                      placeholder="请输入" />
                    </a-form-item>
                </a-col>
                <a-col>
                    <a-form-item
                    label="开始时间"
                    :labelCol="labelCol"
                    :wrapperCol="wrapperCol"
                    >
                    <a-date-picker
                    v-decorator="[
                        'startDate',
                        {
                          rules: [{
                            required: true, message: '请选择开始时间',
                          }],
                        }
                      ]" style="width: 100%" placeholder="请选择" />
                    </a-form-item>
                </a-col>
                <a-col>
                    <a-form-item
                    label="任务负责人"
                    :labelCol="labelCol"
                    :wrapperCol="wrapperCol"
                    >
                    <a-select v-decorator="[
                        'principal',
                        {
                          rules: [{
                            required: true, message: '请选择负责人',
                          }],
                        }
                      ]"
                       placeholder="请选择">
                        <a-select-option value="1">张三</a-select-option>
                        <a-select-option value="2">李四</a-select-option>
                    </a-select>
                    </a-form-item>
                </a-col>
                <a-col>
                    <a-form-item
                    label="产品描述"
                    :labelCol="labelCol"
                    :wrapperCol="wrapperCol"
                    style="margin-bottom:0px"
                    >
                    <a-textarea placeholder="请输入" :rows="4"/>
                    </a-form-item>
                </a-col>

            </a-row>
        </a-form>
      </a-modal>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Row, Col, Form, Select, DatePicker, Avatar, Button, Icon, Card, List, Radio, Input, Menu, Dropdown, Progress, Modal } from 'ant-design-vue'

import { colObj, paginationObj } from '@/interface'
import HeadInfo from '@/components/HeadInfo.vue'

const data1:Array<Number> = []
for (let i = 0; i < 9; i++) {
  data1.push(i)
}
@Component({
  components: {
    'a-card': Card,
    'a-row': Row,
    'a-col': Col,
    'a-list': List,
    'a-list-item': List.Item,
    'a-list-item-meta': List.Item.Meta,
    'a-avatar': Avatar,
    'a-card-meta': Card.Meta,
    'a-button': Button,
    'a-icon': Icon,
    'a-radio-group': Radio.Group,
    'a-radio-button': Radio.Button,
    'a-input': Input,
    'a-textarea': Input.TextArea,
    'a-input-search': Input.Search,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-dropdown': Dropdown,
    'a-progress': Progress,
    'a-modal': Modal,
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-select': Select,
    'a-select-option': Select.Option,
    'a-date-picker': DatePicker,
    'HeadInfo': HeadInfo
  }
})

export default class ListCard extends Vue {
  private form: any;

  loading:boolean=false

  list:Array<any>=data1

  listStatus:string='all'

  pagination:paginationObj={
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 5
  }

  model:boolean=false

  labelCol: colObj={
    xs: { span: 8 },
    sm: { span: 5 }
  }
  wrapperCol:colObj= {
    xs: { span: 10 },
    sm: { span: 18 }
  }

  beforeCreate () {
    this.form = this.$form.createForm(this)
  }
  add () {
    this.model = true
  }

  edit () {
    this.model = true
  }

  del () {
    Modal.confirm({
      title: '删除任务',
      content: '确定删除该任务吗?',
      onOk () {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
        }).catch(() => console.log('Oops errors!'))
      },
      onCancel () {}
    })
  }
  handleOk (e:any) {
    e.preventDefault()
    this.form.validateFields((err:any, fieldsValue:object) => {
      if (!err) {
        this.model = false
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 1000)
      }
    })
  }
}
</script>

<style scoped lang="less">
.list-standard-main{
  padding: 24px 24px 0 24px;

  .pages-list-box{
    /deep/.ant-card-head{
      border-bottom: none!important;
    }
    .ant-avatar-lg{
      width: 48px;
      height: 48px;
      line-height: 48px;
    }
    .list-content{
      .list-content-item{
        display: inline-block;
        margin-left: 40px;
        color: rgba(0,0,0,.45);
        font-size: 14px;
        vertical-align: middle;
      }
    }
  }

}
</style>
