const arr = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]

// 1.use set
const res01 = [...new Set(arr)];
console.log(res01);

// 2.foreach
const uniqueFn = (arr: any[]) => {
  const res: any[] = [];
  arr.forEach(item => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });
  return res;
};
console.log(uniqueFn(arr));

// 3.indexOf
const uniqueFn2 = (arr: any[]) => {
  const res: any[] = [];
  arr.forEach(item => {
    if (res.indexOf(item) === -1) {
      res.push(item);
    }
  });
  return res;
};
console.log(uniqueFn2(arr));

// 4.filter
const uniqueFn3 = (arr: any[]) => {
  // 只考虑自身，indexOf 从头往后找
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
console.log(uniqueFn3(arr));
