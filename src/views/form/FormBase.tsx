import { Component, Vue, Prop } from 'vue-property-decorator'
import { Row, Col, Form, Input, InputNumber, Button, DatePicker, Radio } from 'ant-design-vue'
import {colObj} from '@/interface'


@Component({
  name:'formBase',
  components: {
    'a-row': Row,
    'a-col': Col,
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-input': Input,
    'a-input-number': InputNumber,
    'a-textarea': Input.TextArea,
    'a-button': Button,
    'a-range-picker': DatePicker.RangePicker,
    'a-radio': Radio,
    'a-radio-group': Radio.Group
  }
})

class FormBase extends Vue{
    labelCol: colObj={
      xs: { span: 24 },
      sm: { span: 5 }
    }
    wrapperCol:colObj= {
      xs: { span: 24 },
      sm: { span: 12 }
    }

    textareaObj={
        minRows: 4, 
        maxRows: 6
    }

    @Prop() private Form!:any
    
    handleSubmit (e:HTMLFormElement) {
      e.preventDefault()
      this.Form.validateFields((err:any, fieldsValue:object) => {
        if (!err) {
          console.log('Received values of form: ', fieldsValue)
        }
      })
    }

    render() {
        const { getFieldDecorator } = this.Form
        return (
            <a-form style="margin-top:8px" on-submit={this.handleSubmit}>
                <a-form-item label="标题" labelCol={this.labelCol} wrapperCol={this.wrapperCol}>
                    {
                        getFieldDecorator('title',
                        { rules: [{ required: true, message: '必填项不能为空!'}] })(<a-input placeholder="给目标起个名字"/>)
                    }                       
                </a-form-item>
                <a-form-item label="起止日期" labelCol={this.labelCol} wrapperCol={this.wrapperCol}>
                    {
                        getFieldDecorator('range-picker',
                        {
                            rules: [{ type: 'array', required: true, message: '必填项不能为空!' }]
                        })(<a-range-picker style="width:100%;" />)
                    }                        
                </a-form-item>
                <a-form-item label="目标描述" labelCol={this.labelCol} wrapperCol={this.wrapperCol}>
                    {
                        getFieldDecorator( 'desc',
                        { rules: [{ required: true, message: '必填项不能为空!' }] })(<a-textarea autosize={ this.textareaObj } placeholder="请输入你的阶段性工作目标"/>)
                    }                        
                </a-form-item>
                <a-form-item label="衡量标准" labelCol={this.labelCol} wrapperCol={this.wrapperCol}>
                    {
                        getFieldDecorator('standard',
                        { rules: [{ required: true, message: '必填项不能为空!' }] })(<a-textarea autosize={ this.textareaObj } placeholder="请输入衡量标准"/>)
                    }                   
                </a-form-item>
                <a-form-item label="客户" labelCol={this.labelCol} wrapperCol={this.wrapperCol}>
                    {
                        getFieldDecorator('clients')(<a-input placeholder="请描述你服务的客户，内部客户直接@姓名/工号"/>)
                    }                  
                </a-form-item>
                <a-form-item label="邀评人" labelCol={this.labelCol} wrapperCol={this.wrapperCol}>
                    {
                        getFieldDecorator('inviters')(<a-input placeholder="请直接@姓名/工号，最多可邀请5人"/>)
                    }                   
                </a-form-item>
                <a-form-item label="权重" labelCol={this.labelCol} wrapperCol={this.wrapperCol}>
                    {
                        getFieldDecorator('weight',
                        { rules: [{ type: 'number', message: '请填写数字!' }] })(<a-input-number placeholder="请输入"></a-input-number>)
                    }
                    &nbsp;&nbsp;%
                </a-form-item>
                <a-form-item label="目标公开" labelCol={this.labelCol} wrapperCol={this.wrapperCol}>
                    {
                        getFieldDecorator('radio-group',{
                            rules: [
                                { required: true, message: '请选择性别' },
                            ],
                            initialValue: '2'})(<a-radio-group>
                                <a-radio value="2">公开</a-radio>
                                <a-radio value="1">部分公开</a-radio>
                                <a-radio value="0">不公开</a-radio>
                            </a-radio-group>)
                    }                    
                </a-form-item>
                <a-form-item>
                    <a-col offset="5">
                        <a-button
                            type="primary"
                            html-type="submit"
                        >提交</a-button>
                        <a-button style="margin-left: 10px">保存</a-button>
                    </a-col>
                </a-form-item>
            </a-form>
        )
    }
}

export default Form.create({})(FormBase);
