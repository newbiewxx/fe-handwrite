// @ts-nocheck

Function.prototype.myBind = function (context = window, ...args) {

  return (...rest) => {
    // const key = Symbol("key");
    // context[key] = this;
    // const result = context[key](...args, ...rest);
    // delete context[key];
    // return result;
    return this.call(context, ...args, ...rest);
  };
};

function fn(a, b) {
  console.log(this, a, b);
  return a + b;
}

const fn1 = fn.myBind({ name: "newbie" }, 1);
const res = fn1(2);
console.log(res);
