/* assertFunction */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* tail function - return everything but the first element */
const tail = function(arr) {
  return arr.slice(1);
};

/* modified assertFunction for array  */
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse".
assertEqual(result[1], "Labs");  // ensure the second element is "Labs".


/* ensure the original array is not modified.  */
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);


/* Testing Cases */
const testing1 = [1];
console.log(tail(testing1));

const testing2 = [];
console.log(tail(testing2));
