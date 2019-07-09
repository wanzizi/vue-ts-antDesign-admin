// 通用或常用接口

// 表单使用的栅格对象
interface spanObj{
    span:number
}
export interface colObj{
    xs:spanObj,
    sm:spanObj,
}

// 无参数无返回值的方法接口，尽量少用
export interface noneFunc{
    ():void
}
