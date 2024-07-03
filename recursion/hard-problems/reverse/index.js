/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */

function reverse(str) {
  function recursiveReverse(n) {
    if (n === -1) return '';
    return str[n] + recursiveReverse(n - 1);
  }

  const reversedString = recursiveReverse(str.length - 1);

  return reversedString;
}

console.log(reverse('hello'));
