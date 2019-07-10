import { Component, Vue, Prop } from 'vue-property-decorator'
import { Form,Select,Input,Col,Button } from 'ant-design-vue'
import { colObj,noneFunc } from '@/interface'

@Component({
    components:{
        'a-form': Form,
        'a-form-item': Form.Item,
        'a-select':Select,
        'a-select-option':Select.Option,
        'a-input':Input,
        'a-input-group':Input.Group,
        'a-col':Col,
        'a-button':Button
    }
})

class Form1 extends Vue{
    @Prop() private Form:any
    @Prop() private nextFunc!:noneFunc

    labelCol: colObj={
        xs: { span: 24 },
        sm: { span: 5 }
    }
    wrapperCol:colObj= {
        xs: { span: 24 },
        sm: { span: 19 }
    }

    validateNum(rule:any, value:any, callback:any){
        if(/^[0-9]*$/.test(value)){
            callback()
        }else{
            callback(new Error())
        }
    }

    handleSubmit(e:HTMLFormElement){
        e.preventDefault()
        this.Form.validateFields((err:any, fieldsValue:object) => {
          if (!err) {
            console.log('Received values of form: ', fieldsValue)
            // this.nextFunc()
            this.$emit('on-form-success',fieldsValue)
          }
        })
    }

    render(){
        const { getFieldDecorator } = this.Form
        return (
            <a-form on-submit={this.handleSubmit}>
                <a-form-item label="付款账户" labelCol={this.labelCol} wrapperCol={this.wrapperCol}>
                    {
                        getFieldDecorator('payAccount',{
                            initialValue:'1'
                        })(<a-select>
                        <a-select-option value="1">account1@qq.com</a-select-option>
                        <a-select-option value="2">account2@qq.com</a-select-option>
                        <a-select-option value="3">account3@qq.com</a-select-option>
                      </a-select>)
                    }
                </a-form-item>
                <a-form-item label="收款账户" labelCol={this.labelCol} wrapperCol={this.wrapperCol}>
                    <a-input-group style="width:100%" compact>
                        {
                            getFieldDecorator('payAccountType',{
                                initialValue:'alipay'
                            })(
                                <a-select style="width: 30%">
                                    <a-select-option value="alipay">支付宝</a-select-option>
                                    <a-select-option value="bank">银行账户</a-select-option>
                                </a-select>
                            )
                        }
                        {
                            getFieldDecorator('getAccountAddr',{
                                initialValue:'test@example.com'
                            })(
                                <a-input style="width: 70%" placeholder="请输入收款账户地址" />
                            )
                        }
                    </a-input-group>
                </a-form-item>      
                <a-form-item label="收款人姓名" labelCol={this.labelCol} wrapperCol={this.wrapperCol}>
                    {
                        getFieldDecorator('getName',{
                            initialValue:'Alex'
                        })(<a-input placeholder="请输入收款人姓名"/>)
                    }
                </a-form-item>        
                <a-form-item label="转账金额" labelCol={this.labelCol} wrapperCol={this.wrapperCol}>
                    {
                        getFieldDecorator('number',{
                            initialValue:500,
                            rules:[
                                {message: '请填写数字!',validator:this.validateNum }
                            ]
                        })(<a-input placeholder="请输入转账金额">
                            <i style="font-style:unset" slot="prefix">￥</i>
                        </a-input>)
                    }
                </a-form-item>  
                <a-form-item>
                    <a-col offset="5">
                        <a-button
                            type="primary"
                            html-type="submit"
                        >下一步</a-button>
                    </a-col>
                </a-form-item>
            </a-form>
        )
    }
}

export default Form.create({ props: {
    nextFunc:{
        type:Function,
        default(){}
    }
} })(Form1)