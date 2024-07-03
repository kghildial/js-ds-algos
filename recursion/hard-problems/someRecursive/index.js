/**
 * Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 */

function isEven(num) {
  return num % 2 === 0;
}

function someRecursive(arr, cb) {
  const num = arr.pop();

  if (cb(num)) return true;
  if (arr.length === 0) return false;

  const result = someRecursive(arr, cb);

  return result;
}

console.log(someRecursive([1, 3, 5, 7, 9], isEven));
