const eqArrays = function (arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const middle = function (arr) {
  if (arr.length === 1 || arr.length === 2) return [];
  mid = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) return arr.slice(mid, mid + 1);
  if (arr.length % 2 === 0) return arr.slice(mid - 1, mid + 1);
}



assertArraysEqual(eqArrays(middle([1,2]), []), true);
assertArraysEqual(eqArrays(middle([1,2,3]), [2]), true);
assertArraysEqual(eqArrays(middle([1,2,3,4,5]), [3]), true);
assertArraysEqual(eqArrays(middle([1,2,3,4]), [2,3]), true);
assertArraysEqual(eqArrays(middle([1,2,3,4,5,6]), [3,4]), true);
