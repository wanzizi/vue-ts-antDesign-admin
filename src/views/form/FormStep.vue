<template>
    <div class="form-step">
        <a-steps class="step" :current="current">
            <a-step v-for="(item,index) in steps" :key="index" :title="item.title" />
        </a-steps>

        <div class="step-content">
            <div v-show="current===0">
              <AntFormTool :configs="step1.controls" :wrappedComponentRef="saveFormRef1"></AntFormTool>
              <Row>
                <a-col offset="5">
                  <Button type="primary" @click="handleFormSuccess">下一步</Button>
                </a-col>
              </Row>
            </div>
            <form-2 v-if="current===1" :forms="forms" :nextFunc="nextFunc" :prevFunc="prevFunc"></form-2>
            <form-3 v-if="current===2" :forms="forms" v-on:goto-first="gotoFisrt"></form-3>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Row, Col, Steps, Button } from 'ant-design-vue'
import Form2 from './stepForm/Form2.vue'
import Form3 from './stepForm/Form3.vue'
import AntFormTool from '@/components/public/form/ant'
import step1 from '@/config/forms/step1'

interface stepObj{
    title:string
}
interface formObj{
    account:string;
    accountType: string;
    accountAddr:string;
    receiveName:string;
    receiveAmount:number;
}

@Component({
  components: {
    'a-steps': Steps,
    'a-step': Steps.Step,
    Button,
    Row,
    'a-col': Col,
    'form-2': Form2,
    'form-3': Form3,
    AntFormTool
  }
})
export default class FormStep extends Vue {
    step1=step1
    current:number=0
    steps:stepObj[]=[
      {
        title: '填写转账信息'
      },
      {
        title: '确认转账信息'
      },
      {
        title: '完成'
      }
    ]
    forms:formObj|undefined=undefined
    formRef1:any

    saveFormRef1 (formRef:any) {
      this.formRef1 = formRef
    }
    handleFormSuccess () {
      this.formRef1.Form.validateFields((err:any, values:formObj) => {
        if (err) {

        } else {
          this.forms = values
          this.nextFunc()
        }
      })
    }

    nextFunc ():void {
      this.current++
    }
    prevFunc ():void {
      this.current--
    }
    gotoFisrt ():void{
      this.current = 0
    }
}
</script>

<style lang="less" scoped>
.form-step{
    .step{
        max-width: 750px;
        margin: 16px auto;
    }
    .step-content{
        max-width: 500px;
        margin: 40px auto 0;
    }
}
</style>
