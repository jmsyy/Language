/**
 * @param ts预定义类型 Array<any>
 * @param ts预定义类型 number:[]
 */
const objectKeyJson = (arr: any[])=>{
  let temporaryObject = {};
  return arr.filter((v,k)=>{
    // 生成不同的key 区分引用类型的值'
    return temporaryObject.hasOwnProperty(typeof v + JSON.stringify(v))?false:temporaryObject[typeof v  + JSON.stringify(v)] = true;
  });
}
objectKeyJson([1,{a:"b"}])

const pureFun = ():void  =>{
  console.log(`this is pure function`);
}
pureFun();