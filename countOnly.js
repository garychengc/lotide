const countOnly = function(allItems, itemsToCount) {
  let nameObj = {};
  allItems.forEach(name => {
    if (itemsToCount[name]){
      if (!nameObj[name]) {
        nameObj[name] = 1;
      } else {
        nameObj[name] += 1;
      }
    }
  });
  return nameObj;
}
module.exports = countOnly;