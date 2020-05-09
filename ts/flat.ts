/**
 * 数组扁平化 flat
 */
const flat = (complexArr: number[])=>{
  if (!Array.isArray(complexArr)) {return }
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
console.log(flat([1,3,3,4]))