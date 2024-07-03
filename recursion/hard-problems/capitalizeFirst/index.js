/**
 * Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
 */

function capitalizeFirst(arr) {
  const capitalizedArr = [];

  function capitalise(index) {
    if (index === arr.length) return;

    arr[index][0] = arr[index][0].toUpperCase();

    const word = arr[index];
    const capitalizedWord =
      word[0].toUpperCase() + word.split('').slice(1).join('');

    capitalizedArr.push(capitalizedWord);

    capitalise(index + 1);
  }

  capitalise(0);

  return capitalizedArr;
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
