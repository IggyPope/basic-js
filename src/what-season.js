// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  try {
    date.valueOf();
  } catch (error) {
    throw new Error('Invalid date!');
  }

  const dateWrapper = new Date(date);

  if (isNaN(dateWrapper.getMonth())) {
    throw new Error('Invalid date!');
  }

  if (date.getMonth() === 11 || date.getMonth() < 2) {
    return 'winter';
  } else if (date.getMonth() < 5) {
    return 'spring';
  } else if (date.getMonth() < 8) {
    return 'summer';
  } else if (date.getMonth() < 11) {
    return 'autumn';
  }
}

module.exports = {
  getSeason,
};
