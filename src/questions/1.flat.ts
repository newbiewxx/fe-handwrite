// 数组扁平化
type DeepArray = (number | DeepArray)[];

const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]

// 1.数组 flat
const newArr01 = arr.flat(Infinity);
console.log(newArr01);

// 2.JSON + 正则
const newArr02 = JSON.stringify(arr).replace(/\[|\]/g, "").split(",").map(Number);
console.log(newArr02);

// 3.reduce
const flatten = (arr: DeepArray): DeepArray => {
  return arr.reduce((acc: DeepArray, cur) => {
    return acc.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};
const newArr03 = flatten(arr);
console.log(newArr03);

// 4.recursive
const flatten02 = (arr: DeepArray, newArr: DeepArray = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten02(arr[i] as DeepArray, newArr);
    } else {
      newArr.push(arr[i] as number);
    }
  }
  return newArr;
};

const newArr04 = flatten02(arr, []);
console.log(newArr04);
