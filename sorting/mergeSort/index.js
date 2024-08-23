function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i += 1;
    } else {
      result.push(arr2[j]);
      j += 1;
    }

    // If i limit reached. Then push all remaining elements to result tracked by j
    if (i === arr1.length && j < arr2.length) {
      while (j < arr2.length) {
        result.push(arr2[j]);
        j += 1;
      }
    }

    // If j limit reached. Then push all remaining elements to result tracked by i
    if (j === arr2.length && i < arr1.length) {
      while (i < arr1.length) {
        result.push(arr1[i]);
        i += 1;
      }
    }
  }

  return result;
}

const arrOne = [1, 3, 5, 7];
const arrTwo = [2, 4, 6, 8];

// console.log(merge(arrOne, arrTwo));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = margeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
