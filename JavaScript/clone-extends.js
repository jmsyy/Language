
const baseArr = [null,null,undefined,undefined,1,'1',2,true,true];
const quoteArr = [{value:1},{value:1},{value:3}];
const complexObj = {
  value: 1,
  toSay:function () {
    console.log(this.value);
  }
}

const shallowCopy = (origin) => {
  if(!origin && typeof origin !== 'object') {return}
  let target = origin instanceof Array?[]:{};
  for (const key in origin) {
    if (origin.hasOwnProperty(key)) {
      target[key] = origin[key];
    }
  }
  return target;
}
// console.log(shallowCopy(baseArr))

const deepClone = (origin) => {
  let target = origin instanceof Array?[]:{};
  for (const key in origin) {
    if (origin.hasOwnProperty(key)) {
      /**
       * 递归调用 deepClone 是
       * 引用类型clone 不是赋值引用
       * 重新创建引用类型并对值初始化
       */
      target[key] = typeof origin[key] === 'object'?deepClone(origin[key]):origin[key];
    }
  }
  return target;
}
// const freshClone = deepClone(complexObj);
// console.log(freshClone.toSay());
// console.log(complexObj.toSay());

/**
 * @param flag 是否开启深extend 默认:不开启
 */
function extendFun (flag = false) {
  let target =Array.prototype.shift.call(arguments),
    len = arguments.length;
  for (let i = 0; i < len; i++) {
    let curObj = arguments[i];
    for (let key in curObj) {
        target[key] = curObj[key];
    }
  }
  return target;
}
const extendObj = extendFun({a:1},{b:{d:4}},{c:3,b:{f:5,g:6},h:7,a:9});
console.log(extendObj);
