const assertArraysEqual = function (arr1, arr2) {

  /* check if the length is the same */
  if (arr1.length !== arr2.length) {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  } else {

    /* if array is empty */
    if (arr1.length === 0 && arr1.length === 0) {
      console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`)
    }

    /* if array is not empty */
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


assertArraysEqual([], [])
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
