// @ts-nocheck

Function.prototype.myApply = function (context = window, args: any[]) {
  const key = Symbol("key");
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
}

function foo(a, b) {
  console.log(this, a, b);
  return a + b;
}

const res = foo.myApply({ name: "why" }, [1, 2]);
console.log(res);

