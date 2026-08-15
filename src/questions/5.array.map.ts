// @ts-nocheck

Array.prototype.myMap = function (callback: Function) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};

console.log([1, 2, 3].myMap((item) => item * 2));
