const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));