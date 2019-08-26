const takeUntil = function(array, callback) {
  let output = [];
  for (let e of array) {
    if (callback(e)) break;
    output.push(e);
  }
  return output;
};
module.exports = takeUntil;