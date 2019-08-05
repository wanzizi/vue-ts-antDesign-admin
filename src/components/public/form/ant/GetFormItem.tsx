import { Vue,Component,Prop } from 'vue-property-decorator'
import { Input,InputNumber,DatePicker,Radio, Select,Switch,Slider,Checkbox,Rate } from 'ant-design-vue'
import { FormItemObj } from '@/interface'

@Component({
    components:{
        'a-input': Input,
        'a-textarea': Input.TextArea,
        'a-input-number':InputNumber,
        'a-select':Select,
        'a-select-option':Select.Option,
        'a-date-picker':DatePicker,
        'a-range-picker':DatePicker.RangePicker,
        'a-month-picker':DatePicker.MonthPicker,
        // 'a-week-picker':DatePicker.WeekPicker,
        'a-switch':Switch,
        'a-slider':Slider,
        'a-radio': Radio,
        'a-radio-group': Radio.Group,
        'a-checkbox-group':Checkbox.Group,
        'a-rate':Rate
    }
})
class GetFormItem extends Vue{
    @Prop() private item!:FormItemObj

    render(){
        if(this.item.type==='text'||this.item.type==='password'){
            return <a-input placeholder={this.item.placeholder||''} type={this.item.type} disabled={this.item.disabled} defaultValue={this.item.value} />
        }
        else if(this.item.type==='textarea'){
            return <a-textarea placeholder={this.item.placeholder||''} autosize disabled={this.item.disabled} defaultValue={this.item.value} />
        }
        else if(this.item.type==='number'){
            return <a-input-number style="width:100%" placeholder={this.item.placeholder||'' } disabled={this.item.disabled} defaultValue={this.item.value}></a-input-number>
        }
        else if(this.item.type==='select'){
            if(this.item.options&&this.item.options.length){
              return (<a-select defaultValue={this.item.value} placeholder={this.item.placeholder||''} disabled={this.item.disabled}>
                  {this.item.options.map(opt=>{
                    return <a-select-option  value={opt.value}>{opt.label}</a-select-option>
                  })}
            </a-select>  )
            }else{
                console.error('select必须有options参数，且格式请保证正确')
            }
        }
        else if(this.item.type==='date'||this.item.type==='dateRange'||this.item.type==='month'||this.item.type==='week'){
            if(this.item.type==='date'){
                return <a-date-picker style="width:100%" placeholder={this.item.placeholder||''} disabled={this.item.disabled} defaultValue={this.item.value} />
            }else if(this.item.type==='dateRange'){
                return <a-range-picker style="width:100%" placeholder={this.item.placeholder||''} disabled={this.item.disabled} defaultValue={this.item.value} />
            }else if(this.item.type==='month'){
                return <a-month-picker style="width:100%" placeholder={this.item.placeholder||''} disabled={this.item.disabled} defaultValue={this.item.value} />
            }else if(this.item.type==='week'){
                // return <a-week-picker style="width:100%" placeholder={this.item.placeholder||''} disabled={this.item.disabled} defaultValue={this.item.value} />
            }
        }
        else if(this.item.type==='switch'){
            return <a-switch defaultValue={this.item.value}/>
        }
        else if(this.item.type==='slider'){
            let min = (this.item.validate&&!isNaN(this.item.validate.min))?this.item.validate.min:0
            let max = (this.item.validate&&!isNaN(this.item.validate.max))?this.item.validate.max:100
            return <a-slider min={min} max={max} disabled={this.item.disabled} defaultValue={this.item.value} />
        }
        else if(this.item.type==='radio'){
            if(this.item.options&&this.item.options.length){
                return  <a-radio-group options={this.item.options} defaultValue={this.item.value} disabled={this.item.disabled} />
            }else{
                console.error('radio必须有options参数，且格式请保证正确')
            }
        }
        else if(this.item.type==='check'){
            if(this.item.options&&this.item.options.length){
                return  <a-checkbox-group options={this.item.options} defaultValue={this.item.value} disabled={this.item.disabled} />
            }else{
                console.error('check必须有options参数，且格式请保证正确')
            }
        }
        else if(this.item.type==='rate'){
            return <a-rate defaultValue={this.item.value} disabled={this.item.disabled} />
        }
    }
}

export default GetFormItem


