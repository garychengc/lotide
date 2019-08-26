const tail = require('../tail');
const assertEqual = require('../assertEqual');

/* modified assertFunction for array  */
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse".
console.log(assertEqual(result[1], "Labs"));  // ensure the second element is "Labs".


/* ensure the original array is not modified.  */
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
console.log(assertEqual(words.length, 3));

/* Testing Cases */
// const testing1 = [1];
// console.log(assertEqual(tail(testing1), []));

// const testing2 = [];
// console.log(assertEqual(tail(testing2), []));
