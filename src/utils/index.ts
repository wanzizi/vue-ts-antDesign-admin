interface debounceFunc {
    ():void
}
/**
 *
 * @param func 要防抖的函数体
 */
export function debounce (func:debounceFunc, timing:number):debounceFunc {
  let timer:any = null
  return ():void => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, timing)
  }
}

/**
 *  根据数组中某一个高亮的元素找到整一条链的数据
 * @param arr 要遍历的数组
 * @param active 高亮的数据
 * @param field 作为依据的字段名
 */
export function getArrByActive (arr:any[], active:string, field:string = 'id') {
  interface Obj {
    _isActive?:boolean,
    children?:any[]
  }

  let chain:string[] = []

  let thisArr = setActive(arr)
  function setActive (data:any[]):any[] {
    if (!(data && data.length)) {
      return []
    }
    return data.map(item => {
      let children:any[] = (item.children && item.children.length) ? setActive(item.children) : []
      let hasActive = (children.filter(t => {
        return t._isActive
      })).length > 0
      return {
        _isActive: (item[field] === active) || hasActive,
        ...item,
        children: children
      }
    })
  }

  findActive(thisArr)
  function findActive (data:any[]):void{
    if (!(data && data.length)) {
      return
    }
    data.forEach(item => {
      if (item.children && item.children.length) {
        findActive(item.children)
      }
      if (item._isActive) {
        chain.push(item[field])
      }
    })
  }
  return chain.reverse()
}
