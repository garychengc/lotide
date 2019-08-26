const without = function(source, itemsToRemove) {
  const modifiedArr = source.filter(element => {
    if (!itemsToRemove.includes(element)) {
      return true;
    }
  });
  return modifiedArr;
};

module.exports = without;
