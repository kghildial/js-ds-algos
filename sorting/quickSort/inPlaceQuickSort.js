function sortAroundPivot(arr, start = 0, end = arr.length - 1) {
  let pivotIndex = start;
  const pivot = arr[pivotIndex];
  let swapIndex = pivotIndex;

  for (let i = start; i <= end; i += 1) {
    if (arr[i] < pivot) {
      swapIndex += 1;
      // Original aeeay get's sorted here when we swap
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }

  // Swap the pivot at the final position of swapIndex
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

  // Return the final computed position of the pivot
  return swapIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivot = sortAroundPivot(arr, start, end);

    // LHS sort
    quickSort(arr, start, pivot - 1);

    // RHS sort
    quickSort(arr, pivot + 1, end);
  }

  return arr;
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
