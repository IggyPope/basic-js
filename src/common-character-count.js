const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1arr = s1.split('');
  let s2arr = s2.split('');

  let commonCharCount = 0;

  while (s1arr.length) {
    const char = s1arr[0];

    const s1CharCount = s1arr.filter((c) => c === char).length;
    const s2CharCount = s2arr.filter((c) => c === char).length;

    commonCharCount += Math.min(s1CharCount, s2CharCount);

    s1arr = s1arr.filter((c) => c !== char);
  }

  return commonCharCount;
}

module.exports = {
  getCommonCharacterCount,
};
