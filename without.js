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
  const modifiedArr = source.filter(element => {
    if (!itemsToRemove.includes(element)) {
      return true;
    }
  });
  return modifiedArr;
};


// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// console.log(without([1, 2, 3, 1], [1]));
// assertArraysEqual(without([1, 2, 3, 1], [1]), [2,3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
