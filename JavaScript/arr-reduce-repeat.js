const baseArr = [null,null,undefined,undefined,1,'1',2,true,true];
const quoteArr = [{value:1},{value:1},{value:3}]

const forFun = (arr)=>{
  let  result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(result.indexOf(element)=== -1) {
      result.push(element);
    }
  }
  return result;
}
// console.log(forFun(baseArr));
// console.log(forFun(quoteArr));

const setFun = (arr)=>{
  return Array.from(new Set(arr));
}
// console.log(setFun(baseArr));
// console.log(setFun(quoteArr));
const objectKey = (arr)=>{
  let temporaryObject = {};
  return arr.filter((v,k)=>{
    // 生成不同的key 区分不同类型值相同的情况 如: 1 '1'
    return temporaryObject.hasOwnProperty(typeof v + v)?false:temporaryObject[typeof v + v] = true;
  });
}
// console.log(objectKey(baseArr));
// console.log(objectKey(quoteArr));

const objectKeyJson = (arr)=>{
  let temporaryObject = {};
  return arr.filter((v,k)=>{
    // 生成不同的key 区分引用类型的值'
    return temporaryObject.hasOwnProperty(typeof v + JSON.stringify(v))?false:temporaryObject[typeof v  + JSON.stringify(v)] = true;
  });
}
// console.log(objectKeyJson(baseArr));
// console.log(objectKeyJson(quoteArr));

/**
 * 数组扁平化 flat
 */
const flat = (complexArr)=>{
  if (!Array.isArray(complexArr)) {return ;}
  let result =[];
  complexArr.forEach(v => {
    if (Array.isArray(v)) {
      result = result.concat(flat(v))
    }else {
      result.push(v);
    }
  });
  return result;
}
// console.log( flat([1,[2,3],[4,5,[6,7,[8,9]]]]))
console.log(+[])
console.log(1 + [])
console.log([+[][0] + []][0][1])
console.log(+[] == +[])
console.log([] == [])
console.log(+undefined);