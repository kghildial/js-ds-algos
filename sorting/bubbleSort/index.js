/**
 * Bubble sort
 */

function bubbleSort(arr) {
  for (let i = arr.length; i >= 0; i -= 1) {
    console.log('Sort Iteration: ', arr);
    for (let j = 0; j < i; j += 1) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
}

// console.log(bubbleSort([1, 20, 15, 4, 3, 10, 2, 5]));

function bubbleSortEfficient(arr) {
  let noSwaps = true;
  let end = arr.length - 1;
  let i = 0;

  while (end > 0) {
    if (arr[i] > arr[i + 1]) {
      noSwaps = false;
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    if (i === end - 1) {
      if (noSwaps) {
        console.log('no swaps found!');
        break;
      } else {
        i = 0;
        end -= 1;
      }
    } else {
      i += 1;
    }
  }

  return arr;
}

// console.log(bubbleSortEfficient([5, 4, 3, 2, 1]));
console.log(bubbleSortEfficient([1, 20, 15, 4, 3, 10, 2, 5]));
