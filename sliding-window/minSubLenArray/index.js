/**
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 */

/**
 * Examples
 *
 * minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
 * minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
 * minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
 * minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
 */

/**
 * Constraints:
 *
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */

function minSubArrayLen(arr, targetSum) {
  let iStart = 0;
  let iEnd = 2;

  let currentSum = arr[0] + arr[1];
  let currentWinLen = 2;
  let minWinLen = Infinity;

  while (iStart !== arr.length - 1) {
    // if sum is less than target sum, then increase window size and add the next element
    if (currentSum < targetSum && iEnd <= arr.length - 1) {
      currentSum += arr[iEnd];
      iEnd += 1;
      currentWinLen += 1;
    } else if (currentSum >= targetSum) {
      // Set minWinLen since we reached the desired outcome
      if (currentWinLen < minWinLen && currentSum >= targetSum)
        minWinLen = currentWinLen;

      // try and see if smaller window sum will fill the target sum criteria, if yes, then reduce window size and set minWinLen
      currentSum -= arr[iStart];
      currentWinLen -= 1;
      iStart += 1;

      if (currentSum >= targetSum && currentWinLen < minWinLen) {
        minWinLen = currentWinLen;
      }
    } else {
      break;
    }
  }

  if (minWinLen === Infinity) console.log(0);
  else console.log(minWinLen);
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
minSubArrayLen([2, 1, 6, 5, 4], 9);
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11);
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);
