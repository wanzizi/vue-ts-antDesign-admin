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
      func.apply(<any> this, arguments)
    }, timing)
  }
}
