/**
 * Linear Search
 */

function linearSearch(arr, searchTerm) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === searchTerm) return i;
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4], 3));
