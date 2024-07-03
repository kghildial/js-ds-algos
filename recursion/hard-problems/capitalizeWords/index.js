/**
 * Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 */

function capitalizedWords(arr) {
  const result = [];

  function capitalize(index) {
    if (index === arr.length) return;
    result.push(arr[index].toUpperCase());

    capitalize(index + 1);
  }

  capitalize(0);

  return result;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words));
