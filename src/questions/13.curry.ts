// @ts-nocheck

const container: number[] = [];
const curry = (...args: number[]) => {
  container.push(...args);
  if (container.length === 4) {
    return container.reduce((a, b) => a + b);
  } else {
    return curry;
  }
};

const curryFn = (count: number) => {
  const res: number[] = [];
  return function fn(...args: number[]) {
    res.push(...args);
    if (res.length >= count) {
      const result = res.slice(0, count).reduce((a, b) => a + b);
      res.length = 0;
      return result;
    } else {
      return fn;
    }
  };
};

console.log(curry(1)(2)(3)(4));

const countThreeNum = curryFn(3);
console.log(countThreeNum(1)(2)(3));
console.log(countThreeNum(4)(5)(6));
// console.log(countThreeNum(1)(2)(3)(4));
console.log(curryFn(5)(2)(3)(4)(5)(6));c


