// 通用或常用接口

// 表单使用的栅格对象
interface spanObj{
    span:number
}
export interface colObj{
    xs:spanObj,
    sm:spanObj,
}

// 分页配置对象
export interface paginationObj{
    currents?:number,
    pageSize?:number,
    total?:number,
    showSizeChanger?:Boolean
    showQuickJumper?:Boolean,
}

// 无参数无返回值的方法接口，尽量少用
export interface noneFunc{
    ():void
}

// 表单校验相关接口
export interface FormCol{
    span:number;
    offset:number;
    label:number;
    wrapper:number;
}
// 特殊配置集合
export interface specialOpj{
    [propName:string]:any
}
// 校验集合
export interface ValidateItemObj{
    regex:string;
    msg:string;
    trigger:string;
}
export interface ValidateObj{
    required:boolean;
    type:string;
    customs:ValidateItemObj[];
    min:number;
    max:number;
}
// 列表项集合
export interface OptionObj{
    label:string;
    value:string|number;
}
export interface FormItemObj{
    type:string;
    label?:string;
    controls:FormItemObj[];
    value:string|number;
    key:string;
    width?:string;
    placeholder:string;
    suffix:string|number;
    specialOpt:specialOpj;
    disabled?:boolean;
    validate?:ValidateObj;
    col?:FormCol;
    options?:OptionObj[]
}
