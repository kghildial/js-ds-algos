/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */

function flatten(arr) {
  const outputArr = [];

  function recursiveCheck(innerArr, index, maxLen) {
    if (index === maxLen) return;

    const element = innerArr[index];

    if (Array.isArray(element)) {
      const flattenedArr = flatten(element);
      recursiveCheck(flattenedArr, 0, flattenedArr.length);
    } else {
      outputArr.push(element);
      recursiveCheck(innerArr, index + 1, maxLen);
    }
  }

  recursiveCheck(arr, 0, arr.length);

  return outputArr;
}

console.log(flatten([1, 2, [3, 4, [5, 6, 7, [8, 9, 10, 11]]]]));
