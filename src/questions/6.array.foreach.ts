// @ts-nocheck

Array.prototype.myForeach = function (callback: Function) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

[1, 2, 3].myForeach(console.log);
