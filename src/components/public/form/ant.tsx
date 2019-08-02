import { Vue,Component,Prop } from 'vue-property-decorator'
import { Row, Col, Form,Input} from 'ant-design-vue'
import { FormItemObj } from '@/interface'


// 栅格最大值
const MAX_COL:number=24 
// 默认label占位
const DEFAULT_LABEL:number=5
// 默认warpper，即表单项除label之外的部分占位，如input，date等占位
const DEFAULT_WRAPPER:number=12

@Component({
    name:'antFormTool',
    components: {
        'a-row': Row,
        'a-col': Col,
        'a-form': Form,
        'a-form-item': Form.Item,
        'a-input': Input,
    //   'a-input-number': InputNumber,
    //   'a-textarea': Input.TextArea,
    //   'a-button': Button,
    //   'a-range-picker': DatePicker.RangePicker,
    //   'a-radio': Radio,
    //   'a-radio-group': Radio.Group
    }
})
class AntFormTool extends Vue{
    @Prop() private Form!:any
    @Prop() private configs!:FormItemObj[]
    @Prop() private name!:string

    mounted(){
    }

    handleSubmit(e:HTMLFormElement){
        e.preventDefault()
        this.Form.validateFields((err:any, fieldsValue:object) => {
            if (!err) {
              console.log('Received values of form: ', fieldsValue)
            }
        })
    }

    render(){
        const { getFieldDecorator } = this.Form

        let formItems = this.configs.map(item=>{
            let labelCol={
                xs: { span: 24 },
                sm: { span: item.col&&item.col.label?item.col.label:DEFAULT_LABEL }
            }
            let wrapperCol={
                xs: { span: 24 },
                sm: { span: item.col&&item.col.wrapper?item.col.wrapper:DEFAULT_WRAPPER }
            }

            let otherValidate = item.validate&&item.validate.customs&&item.validate.customs.length?item.validate.customs:[]

            let thisItem
            if(item.type==='text'){
                thisItem = getFieldDecorator(item.key,
                { rules: [{ required: item.validate.required, message: '必填项不能为空!'},...otherValidate] })(<a-input placeholder={item.placeholder||''}/>)
            }else{
                thisItem = <a-input placeholder="other"/>
            }

            return (
                <a-col 
                    span={item.col&&item.col.span?item.col.span:MAX_COL} 
                    offset={item.col&&item.col.offset?item.col.offset:''}>
                    <a-form-item label="标题" labelCol={labelCol} wrapperCol={wrapperCol}>
                        {thisItem}                       
                    </a-form-item>
                </a-col>
            )
        })
        return(
            <a-form style="margin-top:8px" on-submit={this.handleSubmit}>
                <a-row>{formItems}</a-row>
            </a-form>
        )
    }
}

export default Form.create({
    props:{
        name:'',
        configs:null
    }
})(AntFormTool);