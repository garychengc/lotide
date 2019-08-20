const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) {
        console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
        break;  
      }

      if (i === arr1.length - 1) {
        console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
      }
    }
  }
}

// eqArrays([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [3, 2, 1]);
// eqArrays(["1", "2", "3"], ["1", "2", "3"]);
// eqArrays(["1", "2", "3"], ["1", "2", 3]);
// eqArrays([1, 2, 3], [1, 2, 3]);
