function flatten(arr, depth = 0) {
  let result = [];

  if (depth == 0) {
    return [...arr];
  }

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let subArray = flatten(arr[i], depth - 1);
      result.push(...subArray);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let arr = [1, [1, 2, [1, 2, 3]]];
let depth = 1;

const result = flatten(arr, depth);

console.log(result);
