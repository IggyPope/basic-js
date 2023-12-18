const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str
    .split('')
    .reduce((acc, curr, i) => {
      if (i > 0 && str[i - 1] === curr) {
        acc[acc.length - 2]++;
        return acc;
      } else {
        return [...acc, 1, curr];
      }
    }, [])
    .filter((el) => el !== 1)
    .join('');
}

module.exports = {
  encodeLine,
};
