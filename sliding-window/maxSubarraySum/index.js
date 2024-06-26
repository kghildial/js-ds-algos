/**
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
 *
 * Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 */

/**
 * Examples:
 * maxSubarraySum([100,200,300,400], 2) // 700
 * maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
 * maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
 * maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
 * maxSubarraySum([2,3], 3) // null
 */

/**
 * Constraints:
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */

function maxSubarraySum(arr, num) {
  if (arr.length === 0 || num > arr.length) return null;

  let maxSum = arr.slice(0, num).reduce((acc, next) => acc + next);
  let tempMaxSum = maxSum;

  for (let i = num; i < arr.length; i += 1) {
    tempMaxSum = tempMaxSum - arr[i - num] + arr[i];

    if (tempMaxSum > maxSum) maxSum = tempMaxSum;
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
