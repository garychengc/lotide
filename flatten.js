const flatten = function(array) {
  let flattenedArray = [];

  array.forEach(num => {
    if (!Array.isArray(num)) {
      return flattenedArray.push(num);
    } else {
      return flattenedArray = flattenedArray.concat(flatten(num));
    }
  });
  return flattenedArray;
};
module.exports = flatten;

