/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
 * formed from iceman.
 */

/**
 * examples
 * '' => '' // true
 * aaz => zza // false
 * anagram => nagaram // true
 * rat => car // false
 * awesome => awesom // false
 * qwerty => qeywrt // false
 * texttwisttime => timetwisttext // true
 */

const validAnagram = (line1, line2) => {
  // to count the freq of the number of letters in line1 and match them with the freq of letters in line2

  // If both lines are empty strings return true
  if ((line1 === line2) === '') return true;

  // If both lines are of non simillar lengths
  if (line1.length !== line2.length) return false;

  let result = true;

  const freqCounter1 = {};
  const freqCounter2 = {};

  for (letter of line1) {
    freqCounter1[letter] = (freqCounter1[letter] ?? 0) + 1;
  }

  for (letter of line2) {
    freqCounter2[letter] = (freqCounter2[letter] ?? 0) + 1;
  }

  Object.keys(freqCounter1).forEach(letter => {
    if (
      !(letter in freqCounter2) ||
      freqCounter2[letter] !== freqCounter1[letter]
    )
      result = false;
  });

  return result;
};

console.log("'' => '': ", validAnagram('', ''));
console.log('aaz => zza: ', validAnagram('aaz', 'zza'));
console.log('anagram => nagaram: ', validAnagram('anagram', 'nagaram'));
console.log('rat => car: ', validAnagram('rat', 'car'));
console.log('awesome => awesom: ', validAnagram('awesome', 'awesom'));
console.log('qwerty => qeywrt: ', validAnagram('qwerty', 'qeywrt'));
console.log(
  'texttwisttime => timetwisttext: ',
  validAnagram('texttwisttime', 'timetwisttext')
);
