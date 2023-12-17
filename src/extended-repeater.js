const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  return Array.from(
    { length: repeatTimes || 1 },
    () =>
      String(str) +
      Array.from({ length: additionRepeatTimes || 1 }, () =>
        String(options.addition === undefined ? '' : String(addition))
      ).join(additionSeparator || '|')
  ).join(separator || '+');
}

module.exports = {
  repeater,
};
