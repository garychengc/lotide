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

const without = function(source, itemsToRemove) {
  source.map(element => {
    if (itemsToRemove.includes(element)) source.splice(source.indexOf(element), 1);
  });
  return source;
};

// assertArraysEqual(without([1, 2, 3, 1], [1]), [2,3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
