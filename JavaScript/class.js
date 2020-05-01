const {output}  = require('./util.js');
function Student(age,name) {
  this.age = age;
  this.name = name;

}
Student.prototype.say = function () {
  output(this.name)
}

const Tom = new Student(13,'Tom');
// Tom.say();
/**
 * 实例属性必须显示的定义即(this.x = x) 非显示定义的都落在原型上
 */
class Describe {
  constructor(tall,weight) {
    this.tall = tall;
    this.weight = weight;
  }
  report(){
    output(this.tall)
    output(this.weight)
  }
  get() {
    return 'get value a'
  }
  set(val) {
    return `set value ${val}`
  }
}

const Jerry = new Describe(182, 91);
const Jack = new Describe(182, 91);
// output(Jack.tall)
// output(Jack.tall = 192)
// Jerry.report();
// output(typeof Describe)
// output(Describe === Describe.prototype.constructor)
// output(Jerry instanceof (Describe))
// output(Object.keys(Describe.prototype))
// output(Object.getOwnPropertyNames(Describe))
// output(Object.getOwnPropertyNames(Jerry))
// output(Describe.name)
/**
 *  constructor方法可自定义返回
 * 立即执行的类实例
 */
const custom = new class {
  constructor(x) {
    this.address = x;
    return Object.call(null)
  }
}(`192.168.7.93`)
// output(custom.address);
// output(custom.name);
/**
 * 静态方法
 * 静态方法的this 执行类 并非实例
 * 父类的静态方法可以被子类继承
 */

class DiffAttribute {
  constructor(x,y) {
    this.x = x;
  }
  static getSelf() {
    this.say();
    return 'self method'
  }
  static getSelfFun() {
    return this.say();
  }
  say() {
    return this.x
  }
  static say() {
    return `self x`
  }
}
const diff  = new DiffAttribute(9);
// output(DiffAttribute.getSelf())
output(DiffAttribute.getSelfFun())
// output(diff.getSelf())
/**
 * 实例属性可以写类最顶部 constructor 上方
 */
class CustomExtends extends DiffAttribute{
  constructor(x,a) {
    super(x);
    this.a = a ;
  }
  talk() {
    return `children talk`
  }
  static say() {
    return `children say`;
  }
}
const num = new CustomExtends(5,1);
// output(CustomExtends.say())
output(num)