Array.prototype.myReduce = function (callbackFn, initialValue) {
  let acc;
  let startingIndex;

  if (arguments.length >= 2) {
    startingIndex = 0;
    acc = initialValue;
  } else {
    startingIndex = 1;
    if (this.length == 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = this[0];
  }

  for (let i = startingIndex; i < this.length; i++) {
    if (i in this) {
      acc = callbackFn(acc, this[i], i, this);
    }
  }

  return acc;
};

let result = [10, 20, 30].myReduce((acc, curr) => {
  return acc + curr;
});

console.log(result);
