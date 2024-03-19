/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array,
 * has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 */

// same(arr1, arr2) => true / false
/**
 * examples
 * [1, 2, 3] => [4, 1, 9] // true
 * [1, 2, 3] => [1, 9] // false
 * [1, 2, 1] => [4, 4, 1] // false
 */

// input checks to give false
// length check
// null, undefined check

// Steps
// return false if
// wrong input cases
// length check
// compare square of values
// search in array is O(n), hence let's make array into object;

const isEmpty = arr => arr === undefined || arr === null || arr.length === 0;

const same = (base, squared) => {
  if (isEmpty(base) || isEmpty(squared) || base.length !== squared.length) {
    return false;
  }

  const squaredObj = {};

  for (num of squared) {
    if (num in squaredObj) {
      squaredObj[num] += 1;
    } else {
      squaredObj[num] = 0;
    }
  }

  for (num of base) {
    const numSquare = Math.pow(num, 2);

    if (!(numSquare in squaredObj)) {
      return false;
    } else {
      squaredObj[numSquare] -= 1;
    }
  }

  // Sum of all the frequencies of the nums squaredObj should be zero for answer to be true
  const sumOfSquaredObjFreq = Object.values(squaredObj).reduce(
    (prev, num) => prev + num
  );

  if (!sumOfSquaredObjFreq === 0) return false;

  return true;
};

console.log('[1, 2, 3] & [4, 1, 9] => ', same([1, 2, 3], [4, 1, 9]));
console.log('[1, 2, 3] & [1, 9] => ', same([1, 2, 3], [1, 9]));
console.log('[1, 2, 1] & [4, 4, 1] => ', same([1, 2, 3], [4, 4, 1]));
