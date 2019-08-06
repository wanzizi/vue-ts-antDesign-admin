<template>
  <div class="form-demo">
      <AntFormTool name="test" :configs="form.controls" :wrappedComponentRef="saveFormRef"></AntFormTool>
      <p class="operate-box">
        <Button @click="handleSubmit" type="primary">submit</Button>
      </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import AntFormTool from '@/components/public/form/ant'
import form from '@/config/form'
import { Button } from 'ant-design-vue'

@Component({
  components: {
    AntFormTool,
    Button
  }
})
export default class FormDemo extends Vue {
    form=form
    formRef:any
    mounted () {
      // console.log(antform, AntFormTool)
    }
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
  .operate-box{
    text-align: center;
  }
}
</style>
