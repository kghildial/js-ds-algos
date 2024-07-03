/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 */

function reverse(str) {
  function recursiveReverse(n) {
    if (n === -1) return '';
    return str[n] + recursiveReverse(n - 1);
  }

  const reversedString = recursiveReverse(str.length - 1);

  return reversedString;
}

function isPalindrome(str) {
  const reversedString = reverse(str);

  return reversedString === str;
}

console.log(isPalindrome('tacocat'));
