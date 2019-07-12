<template>
  <div class="form-step2">
      <a-alert
        class="form-alert"
        message="确认转账后，资金将直接打入对方账户，无法退回。"
        type="info"
        closable
        showIcon
      />
      <a-row class="form-row" v-for="(item,key) in formLabels" :key="key">
          <a-col :xs="24" :sm="5" class="label">{{item}}:</a-col>
          <a-col :xs="24" :sm="12" :key="key">
            <template v-if="key==='number'">
              <span class="number">
                {{forms[key]}}
                <span class="subfix">元</span>
              </span>
            </template>
            <template v-else>
              <span>{{forms[key]}}</span>
            </template>
          </a-col>
      </a-row>
      <a-row class="password-box border">
        <a-col :xs="24" :sm="5" class="label password">支付密码:</a-col>
        <a-col :xs="24" :sm="12" :key="key">
            <a-input v-model="password" type="password" placeholder="请输入支付密码"/>
        </a-col>
      </a-row>
      <a-row class="btn-box">
        <a-col :xs="24" :sm="5" class="label"></a-col>
        <a-col :xs="24" :sm="12">
          <a-button
              type="primary"
              :loading="loading"
              @click="submit"
          >提交</a-button>
          <a-button
              class="btn"
              @click="prevFunc"
          >上一步</a-button>
        </a-col>
      </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Row, Col, Alert, Input, Button } from 'ant-design-vue'
import { colObj } from '@/interface'

interface formObj{
    getAccount:string;
    payAccountType: string;
    getAccountAddr:string;
    getName:string;
    number:number;
}

@Component({
  components: {
    'a-row': Row,
    'a-col': Col,
    'a-alert': Alert,
    'a-input': Input,
    'a-button': Button
  }
})

export default class Form2 extends Vue {
    @Prop() private forms!:formObj
    @Prop() private nextFunc!:Function
    @Prop() private prevFunc!:Function

    formLabels={
      payAccount: '付款账户',
      getAccountAddr: '收款账户',
      getName: '收款人姓名',
      number: '转账金额'
    }
    password:string='123456'
    loading:boolean=false

    submit () {
      this.loading = true
      setTimeout(() => {
        this.loading = false

        this.nextFunc()
      }, 500)
    }
}
</script>

<style lang="less" scoped>
.form-step2{
    max-width: 500px;
    margin: 40px auto 0;
    color: rgba(0, 0, 0, 0.85);
    .form-alert{
      margin-bottom: 24px;
    }
    .form-row{
        padding-bottom: 16px;
    }
    .label{
      // color: rgba(0,0,0,.85);
      font-weight: 400;
      font-size: 14px;
    }
    .password{
      position: relative;
      top: 3px;
    }
    .number{
      position: relative;
      top: -3px;
      // color: rgba(0,0,0,.85);
      font-size: 24px;
      line-height: 1;
      .subfix{
        margin-left: 4px;
        font-size: 16px;
      }
    }
    .password-box{
      margin-top: 10px;
      padding: 25px 50px;
      border-top: 1px solid #e8e8e8;
    }
    .btn-box{
      padding: 0 50px;
      .btn{
        margin-left: 10px;
      }
    }
}
</style>
