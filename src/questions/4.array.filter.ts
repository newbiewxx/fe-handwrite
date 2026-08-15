// polyfill array filter

// @ts-ignore
Array.prototype.myFilter = function(callback: Function) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// @ts-ignore
const res = arr.myFilter(item => item % 2 === 0);
console.log(res);