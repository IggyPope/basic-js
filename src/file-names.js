const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const deduplicatedNames = names.reduce((acc, curr) => {
    if (acc.includes(curr)) {
      let index = 1;
      let newName = `${curr}(${index})`;
      while (acc.includes(newName)) {
        index++;
        newName = `${curr}(${index})`;
      }
      acc.push(newName);
      return acc;
    }
    acc.push(curr);
    return acc;
  }, []);

  return deduplicatedNames;
}

module.exports = {
  renameFiles,
};
