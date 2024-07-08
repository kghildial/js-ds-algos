/**
 * Binary Search
 */

function binarySearch(arr, searchTerm) {
  let start = 0;
  let end = arr.length - 1;
  let halfWayPoint = Math.round((start + end) / 2);
  let interations = 0;

  while (start < end) {
    interations += 1;
    if (arr[halfWayPoint] === searchTerm) {
      console.log('iterations = ', interations);
      return halfWayPoint;
    }

    if (arr[halfWayPoint] > searchTerm) {
      end = halfWayPoint;
    } else {
      start = halfWayPoint;
    }

    halfWayPoint = Math.round((start + end) / 2);
  }

  console.log('iterations = ', interations);
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
