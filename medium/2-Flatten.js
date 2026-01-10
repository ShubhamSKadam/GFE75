function flatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let subArray = flatten(arr[i]);
      result.push(...subArray);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let arr = [1, [1, 2]];

const result = flatten(arr);

console.log(result);
