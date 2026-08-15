// @ts-nocheck

Array.prototype.myReduce = function (callback: Function, initialValue: any) {
  if (this.length === 0 && !initialValue) throw new Error('Reduce of empty array with no initial value');

  let accumulator = initialValue;
  let i = 0;

  if (!accumulator) {
    accumulator = this[i++];
  }

  for (; i < this.length; i++) {
    accumulator = callback(accumulator, arr[i], i, this);
  }

  return accumulator;
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.myReduce((acc, cur) => acc + cur));
console.log(arr.myReduce((acc, cur) => acc + cur, 10));
console.log([].myReduce((acc, cur) => acc + cur));