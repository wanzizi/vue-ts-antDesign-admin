import { Vue,Component,Prop } from 'vue-property-decorator'
import { Row, Col, Form,Input,InputNumber,DatePicker,TimePicker,Radio, Select,Switch,Slider,Checkbox,Rate} from 'ant-design-vue'
import { FormItemObj } from '@/interface'
// import GetFormItem from './ant/GetFormItem'

// 栅格最大值
const MAX_COL:number=24 
// 默认label占位
const DEFAULT_LABEL:number=5
// 默认warpper占位，即表单项除label之外的部分占位，如input，date等占位
const DEFAULT_WRAPPER:number=12

@Component({
    name:'antFormTool',
    components: {
        'a-row': Row,
        'a-col': Col,
        'a-form': Form,
        'a-form-item': Form.Item,
        'a-input': Input,
        'a-textarea': Input.TextArea,
        'a-input-number':InputNumber,
        'a-select':Select,
        'a-select-option':Select.Option,
        'a-date-picker':DatePicker,
        'a-range-picker':DatePicker.RangePicker,
        'a-month-picker':DatePicker.MonthPicker,
        // 'a-week-picker':DatePicker.WeekPicker,
        'a-time-picker':TimePicker,
        'a-switch':Switch,
        'a-slider':Slider,
        'a-radio': Radio,
        'a-radio-group': Radio.Group,
        'a-checkbox-group':Checkbox.Group,
        'a-rate':Rate
    }
})
class AntFormTool extends Vue{
    @Prop() private Form!:any
    @Prop() private configs!:FormItemObj[]

    mounted(){
        // console.log(this.configs)
    }
    // 还需要按照实际情况增加相应配置
    getChosenFormItem(item:FormItemObj){
        if(item.type==='text'||item.type==='password'){
            return <a-input type={item.type} placeholder={item.placeholder||''} disabled={item.disabled}   />
        }
        else if(item.type==='textarea'){
            return <a-textarea autosize placeholder={item.placeholder||''} disabled={item.disabled}   />
        }
        else if(item.type==='number'){
            return <a-input-number style="width:100%" placeholder={item.placeholder||'' } disabled={item.disabled}  ></a-input-number>
        }
        else if(item.type==='select'){
            if(item.options&&item.options.length){
              return (<a-select placeholder={item.placeholder||''} disabled={item.disabled}>
                  {item.options.map(opt=>{
                    return <a-select-option value={opt.value}>{opt.label}</a-select-option>
                  })}
            </a-select>)
            }else{
                console.error('select必须有options参数，且格式请保证正确')
            }
        }
        else if(item.type==='date'||item.type==='dateRange'||item.type==='month'||item.type==='week'){
            if(item.type==='date'){
                return <a-date-picker style="width:100%" placeholder={item.placeholder||''} disabled={item.disabled} />
            }else if(item.type==='dateRange'){
                return <a-range-picker style="width:100%" placeholder={item.placeholder||''} disabled={item.disabled} />
            }else if(item.type==='month'){
                return <a-month-picker style="width:100%" placeholder={item.placeholder||''} disabled={item.disabled} />
            }else if(item.type==='week'){
                // return <a-week-picker style="width:100%" placeholder={item.placeholder||''} disabled={item.disabled}   />
            }
        }
        else if(item.type==='time'){
            return <a-time-picker style="width:100%" placeholder={item.placeholder||''} disabled={item.disabled} />
        }
        else if(item.type==='switch'){
            return <a-switch defaultChecked={item.value} disabled={item.disabled} />
        }
        else if(item.type==='slider'){
            let min = (item.validate&&!isNaN(item.validate.min))?item.validate.min:0
            let max = (item.validate&&!isNaN(item.validate.max))?item.validate.max:100
            return <a-slider min={min} max={max} disabled={item.disabled} />
        }
        else if(item.type==='radio'){
            if(item.options&&item.options.length){
                return <a-radio-group options={item.options} disabled={item.disabled} />
            }else{
                console.error('radio必须有options参数，且格式请保证正确')
            }
        }
        else if(item.type==='check'){
            if(item.options&&item.options.length){
                return <a-checkbox-group options={item.options} disabled={item.disabled} />
            }else{
                console.error('check必须有options参数，且格式请保证正确')
            }
        }
        else if(item.type==='rate'){
            return <a-rate disabled={item.disabled} />
        }
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

            // TODO:visibleOn的处理方式,待优化
            // let visible = (item.visibleOn&&item.visibleOn.key)?
            let defaultValue = item.value
            return (
                <a-col 
                    span={item.col&&item.col.span?item.col.span:MAX_COL} 
                    offset={item.col&&item.col.offset?item.col.offset:''}
                    >
                    <a-form-item label={item.label} labelCol={labelCol} wrapperCol={wrapperCol}>
                        {
                            getFieldDecorator(item.key,{
                                rules:[
                                    { required: (item.validate&&item.validate.required)||false, message: '必填项不能为空!'},
                                    ...otherValidate
                                ],
                                initialValue:defaultValue
                            })(this.getChosenFormItem(item))
                        }                       
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
        configs:{
            type:Array,
            default(){
                return []
            }
        }
    }
})(AntFormTool);