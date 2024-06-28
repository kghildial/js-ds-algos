/**
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
 */

/**
 * Examples
 *
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbb') // 1
 * findLongestSubstring('longestsubstring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 */

/**
 * Constraints
 * Time Complexity - O(n)
 */

function findLongestSubstring(str) {
  let subStr = str[0];
  let start = 0;
  let end = 1;
  let longestSubStrLen = 0;
  let currentSubStrLen = 1;

  if (str.length > 0) {
    while (start !== str.length - 1) {
      if (subStr.indexOf(str[end]) === -1 && end < str.length) {
        subStr += str[end];
        end += 1;
        currentSubStrLen += 1;
      } else {
        if (currentSubStrLen > longestSubStrLen)
          longestSubStrLen = currentSubStrLen;
        subStr = subStr.substring(1, subStr.length);
        start += 1;
        currentSubStrLen -= 1;
      }
    }
  }
  console.log(longestSubStrLen);
}

findLongestSubstring('');
findLongestSubstring('rithmschool');
findLongestSubstring('thisisawesome');
findLongestSubstring('thecatinthehat');
findLongestSubstring('bbbbbb');
findLongestSubstring('longestsubstring');
findLongestSubstring('thisishowwedoit');
