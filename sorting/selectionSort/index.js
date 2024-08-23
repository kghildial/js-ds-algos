/**
 * Selection sorting
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }

  return arr;
}

console.log(selectionSort([1, 5, 6, 2, 3, 9, 7]));
