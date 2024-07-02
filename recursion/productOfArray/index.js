/**
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 */

function productOfArray(arr) {
  if (arr.length === 1) return arr.pop();

  return arr.pop() * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
