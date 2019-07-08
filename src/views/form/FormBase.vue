<template>
    <a-form
        class="form-base"
        :form="form"
        @submit="handleSubmit"
    >
            <a-form-item
                label="标题"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
            >
                <a-input
                    v-decorator="[
                        'title',
                        { rules: [{ required: true, message: '必填项不能为空!' }] }
                    ]"
                    placeholder="给目标起个名字"/>
            </a-form-item>
            <a-form-item
                label="起止日期"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
            >
                <a-range-picker
                    style="width:100%;"
                    v-decorator="[
                      'range-picker',
                      {
                      rules: [{ type: 'array', required: true, message: '必填项不能为空!' }]
                      }]" />
            </a-form-item>
            <a-form-item
                label="目标描述"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
            >
                <a-textarea
                    :autosize="{ minRows: 4, maxRows: 6 }"
                    v-decorator="[
                        'desc',
                        { rules: [{ required: true, message: '必填项不能为空!' }] }
                    ]"
                    placeholder="请输入你的阶段性工作目标"/>
            </a-form-item>
            <a-form-item
                label="衡量标准"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
            >
                <a-textarea
                    :autosize="{ minRows: 4, maxRows: 6 }"
                    v-decorator="[
                        'standard',
                        { rules: [{ required: true, message: '必填项不能为空!' }] }
                    ]"
                    placeholder="请输入衡量标准"/>
            </a-form-item>
            <a-form-item
                label="客户"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
            >
                <a-input
                    v-decorator="[
                        'clients',
                        { rules: [{ required: true, message: '必填项不能为空!' }] }
                    ]"
                    placeholder="请描述你服务的客户，内部客户直接@姓名/工号"/>
            </a-form-item>
            <a-form-item
                label="邀评人"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
            >
                <a-input
                    v-decorator="[
                        'inviters',
                        { rules: [{ required: true, message: '必填项不能为空!' }] }
                    ]"
                    placeholder="请直接@姓名/工号，最多可邀请5人"/>
            </a-form-item>
            <a-form-item
                label="权重"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
            >
                <a-input-number
                    v-decorator="[
                        'weight',
                        { rules: [{ type: 'number', required: true, message: '必填项不能为空!' }] }
                    ]"
                    placeholder="请输入">
                </a-input-number>
            </a-form-item>
            <a-form-item >
                <a-col offset="5">
                    <a-button
                        type="primary"
                        html-type="submit"
                    >提交</a-button>
                    <a-button class="save-btn">保存</a-button>
                </a-col>
            </a-form-item>

    </a-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Row, Col, Form, Input, InputNumber, Button, DatePicker } from 'ant-design-vue'
console.log(Input)
interface spanObj{
    span:number
}
interface colObj{
    xs:spanObj,
    sm:spanObj,
}

@Component({
  components: {
    'a-row': Row,
    'a-col': Col,
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-input': Input,
    'a-input-number': InputNumber,
    'a-textarea': Input.TextArea,
    'a-button': Button,
    'a-range-picker': DatePicker.RangePicker
  }
})
export default class FormBase extends Vue {
    labelCol: colObj={
      xs: { span: 24 },
      sm: { span: 5 }
    }
    wrapperCol:colObj= {
      xs: { span: 24 },
      sm: { span: 12 }
    }

    form:any = this.$form.createForm(this)

    handleSubmit (e:any) {
      e.preventDefault()
      this.form.validateFields((err:any, fieldsValue:any) => {
        console.log(err, fieldsValue)
        if (!err) {
          console.log('Received values of form: ', fieldsValue)
        }
      })
    }
}
</script>

<style scoped lang="less">
.form-base{
    margin-top: 8px;
    .save-btn{
        margin-left: 10px;
    }
}
</style>
