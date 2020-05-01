const { output } = require('./util.js');
const jack = {
  age:13,
  nickName:'small'
}
function say(grade,gender) {
  output(this.nickName);
  output(grade);
  output(gender);
}
// say.call(jack,'大一','man');

Function.prototype.call2 = function ( obj ) {
  /**
   * 使用this时 勿对arguments 使用可以修改原数组的方法 
   * 如: splice shift
   */
  obj.fn = this;
  let args = [];
  for (let index = 1; index < arguments.length; index++) {
    /**
     * 此时注意在使用eval调用时 数组中应为表达式 'arguments[0]' 
     * 不能为 具体的值 
     */
    // args.push(arguments[index]);
    args.push('arguments[' + index + ']');
  }
  // 这里 args 会自动调用 Array.toString() 这个方法。
  eval('obj.fn('+args+')');
  delete obj.fn
}
say.call2(jack ,'collage_one','man');

// new 操作

