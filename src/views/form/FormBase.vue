<template>
  <div class="form-demo">
      <AntFormTool name="test" :configs="form.controls" :wrappedComponentRef="saveFormRef"></AntFormTool>
      <a-row class="operate-box">
        <a-col offset="5">
            <a-button type="primary" @click="handleSubmit">提交</a-button>
            <a-button style="margin-left: 10px">保存</a-button>
        </a-col>
      </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Row, Col, Button } from 'ant-design-vue'
import formBase from '@/config/forms/base'
import AntFormTool from '@/components/public/form/ant'

@Component({
  name: 'formBase',
  components: {
    AntFormTool,
    'a-row': Row,
    'a-col': Col,
    'a-button': Button
  }
})

export default class FormBase extends Vue {
    form=formBase
    formRef:any

    saveFormRef (formRef:any) {
      this.formRef = formRef
    }
    handleSubmit ():void{
      this.formRef.Form.validateFields((err:any, values:object) => {
        console.log(err, values)
        if (err) {

        } else {

        }
      })
    }
}
</script>

<style lang="less" scoped>
.form-demo{
  height: 100%;
  background: #fff;
  padding: 24px;
}
</style>
