// @ts-nocheck

Function.prototype.myCall = function (context: any, ...args: any[]) {
  context = context || window;
  const key = Symbol("key");
  // this => function
  context[key] = this;
  // 谁调用函数，函数指向谁
  const result = context[key](...args);
  delete context[key];
  return result;
};

function fn(a, b) {
  console.log(this);
  console.log(this.name);
  return a + b;
}

const res = fn.myCall({ name: "hahaha" }, 1, 2);
console.log(res);
