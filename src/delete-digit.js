const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = n.toString().split('');

  for (let i = 0; i < nArr.length; i++) {
    if (i === nArr.length - 1) {
      nArr.splice(i, 1);
      break;
    }
    if (nArr[i] < nArr[i + 1]) {
      nArr.splice(i, 1);
      break;
    }
  }

  return Number(nArr.join(''));
}

module.exports = {
  deleteDigit,
};
