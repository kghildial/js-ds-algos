/**
 * Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.
 */

function stringifyNumbers(obj) {
  const result = {};
  const entries = Object.entries(obj);

  function parse(index) {
    if (index === entries.length) return;

    const [key, value] = entries[index];

    if (typeof value === 'number') {
      result[key] = String(value);
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      result[key] = stringifyNumbers(value);
    } else {
      result[key] = value;
    }

    parse(index + 1);
  }

  parse(0);

  return result;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
