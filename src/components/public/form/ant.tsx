import { Vue,Component,Prop } from 'vue-property-decorator'
import { Row, Col, Form} from 'ant-design-vue'
import { FormItemObj } from '@/interface'
import GetFormItem from './ant/GetFormItem'

// 栅格最大值
const MAX_COL:number=24 
// 默认label占位
const DEFAULT_LABEL:number=5
// 默认warpper，即表单项除label之外的部分占位，如input，date等占位
const DEFAULT_WRAPPER:number=12

@Component({
    name:'antFormTool',
    components: {
        'my-form-item':GetFormItem,
        'a-row': Row,
        'a-col': Col,
        'a-form': Form,
        'a-form-item': Form.Item,
    }
})
class AntFormTool extends Vue{
    @Prop() private Form!:any
    @Prop() private configs!:FormItemObj[]

    mounted(){
        // console.log(this.configs)
    }

    // handleSubmit(e:HTMLFormElement){
    //     e.preventDefault()
    //     this.Form.validateFields((err:any, fieldsValue:object) => {
    //         if (!err) {
    //           console.log('Received values of form: ', fieldsValue)
    //         }
    //     })
    // }

    render(){
        const { getFieldDecorator } = this.Form
        // console.log(this.configs)

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

            // TODO:visibleOn的处理方式,待优化
            // let visible = (item.visibleOn&&item.visibleOn.key)?

            return (
                <a-col 
                    span={item.col&&item.col.span?item.col.span:MAX_COL} 
                    offset={item.col&&item.col.offset?item.col.offset:''}
                    >
                    {/* v-show={visible} */}
                    <a-form-item label={item.label} labelCol={labelCol} wrapperCol={wrapperCol}>
                        {getFieldDecorator(item.key,{
                            rules:[
                                { required: (item.validate&&item.validate.required)||false, message: '必填项不能为空!'},
                                ...otherValidate
                            ]
                        })(<my-form-item item={item}></my-form-item>)}                       
                    </a-form-item>
                </a-col>
            )
        })
        return(
            <a-form>
                <a-row>{formItems}</a-row>
            </a-form>
        )
    }
}

export default Form.create({
    props:{
        configs:null
    }
})(AntFormTool);