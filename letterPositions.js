const eqArrays = function (arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; ++i) {
    if (sentence[i] !== ' '){
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }    
  return results;
};

// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("lighthouse in the house")['i'], [1, 11]);