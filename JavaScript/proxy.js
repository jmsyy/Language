const {output} = require('./util.js');
const s = {a:1,b:2};
const ps = new Proxy(s,{
  get(t,k,r) {
    return 12
  },
  set (t,k,v) {
    t[k] = 11;
    return 35
  },
 
  deleteProperty(t,k) {
    console.log(k);
  },
  has(t,k){
    console.log();
  }
})
const f = (s)=>console.log(s);
output(ps.a);
output(ps.a = 0)
const handler = {
  apply(k,c,args) {
    console.log(k,c,args);
    return `proxy object`
  },
}
pf = new Proxy(f,handler);
output(pf(34));

