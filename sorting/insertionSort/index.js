/**
 * Insertion sorting
 */

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j >= 0; j -= 1) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
