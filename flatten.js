const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} === ${arr2}`);
  }
};

const flatten = function(array) {
  let flattenedArray = [];
  array.map(num => {
    if (!Array.isArray(num)) {
      flattenedArray.push(num);
    } else {
      flattenedArray = flattenedArray.concat(num);
    }
  });
  return flattenedArray;
};

// console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
// console.log(flatten([1, [2, [3, [4]], 5]]));