/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 */

/**
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting'); // true
 * isSubsequence('abc', 'abracadabra'); // true
 * isSubsequence('abc', 'acb'); // false (order matters)
 */

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  let i = 0,
    j = 0;

  if (str1.length > str2.length) return false;

  while (j < str2.length) {
    if (i === str1.length) return true;

    if (str2[j] !== str1[i]) {
      // Order of elements broken
      if (str1.indexOf(str2[j]) !== -1 && str1.indexOf(str2[j]) > i) {
        return false;
      }

      j += 1;
    } else {
      i += 1;
      j += 1;
    }
  }

  if (i === str1.length) return true;
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
