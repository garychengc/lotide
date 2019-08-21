// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return (`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     return (`❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

function findKey(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
}


// console.log(assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), 'noma'));

