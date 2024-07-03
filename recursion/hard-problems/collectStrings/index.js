/**
 * Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
 */

function collectStrings(obj) {
  let result = [];
  const values = Object.values(obj);

  function parse(index) {
    if (index === values.length) return;

    const value = values[index];

    if (typeof value === 'string') {
      result.push(value);
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      const extractedStrings = collectStrings(value);
      result = [...result, ...extractedStrings];
    }

    parse(index + 1);
  }

  parse(0);

  return result;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));
