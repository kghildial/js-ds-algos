/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

/**
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 */

/**
 * Restrictions
 * Time - O(n)
 * Space - O(n)
 *
 * Bonus:
 * Time - O(n log n)
 * Space - O(1)
 */

const areThereDuplicates = (...args) => {
  if (args.length <= 1) return false;

  const argsFreq = {};

  for (const arg of args) {
    if (arg in argsFreq) {
      return true;
    } else {
      argsFreq[arg] = arg;
    }
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
