function combine(lhs, pivot, rhs) {
  lhs.push(pivot);
  return lhs.concat(rhs);
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const randomPivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[randomPivotIndex];
  const lhs = [];
  const rhs = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (i !== randomPivotIndex) {
      if (arr[i] < pivot) lhs.push(arr[i]);
      else rhs.push(arr[i]);
    }
  }

  return combine(quickSort(lhs), pivot, quickSort(rhs));
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));

/**
 * Quick sort with O(logn) space complexity
 */

function getPivotIndex(arr, start = 0, end = arr.length - 1) {
  let pivotIndex = start;
  const pivot = arr[pivotIndex];

  for (let i = start + 1; i <= end; i += 1) {
    if (arr[i] < pivot) {
      [arr[i], arr[pivotIndex]];
      pivotIndex += 1;
    }
  }
}
