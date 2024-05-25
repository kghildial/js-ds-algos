/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 * Time: O(N)
 */

/**
 * Sample Input:
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 */

function sameFrequency(num1, num2) {
  const digits1 = String(num1).split('');
  const digits2 = String(num2).split('');

  const freq = {};

  for (const digit of digits1) {
    if (digit in freq) {
      freq[digit] += 1;
    } else {
      freq[digit] = 1;
    }
  }

  for (const digit of digits2) {
    if (digit in freq) {
      freq[digit] -= 1;
    }
  }

  console.log(
    Object.values(freq).reduce((result, next) => result + next) === 0
  );
}

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(3589578, 5879385);
sameFrequency(22, 222);
