// 1.Array.from
Array.from(document.querySelectorAll('div'));

// 2.slice
Array.prototype.slice.call(document.querySelectorAll('div'));

// 3.拓展运算符 (常用)
[...document.querySelectorAll('div')];

// 4.concat
Array.prototype.concat.apply([], document.querySelectorAll('div') as any);