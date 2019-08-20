const assertEqual = function(actual, expected) {
  return (actual === expected) ? `✅ Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`
};

const countOnly = function(allItems, itemsToCount) {
  let nameObj = {};
  allItems.forEach(name => {
    if (itemsToCount[name]){
      if (!nameObj[name]) {
        nameObj[name] = 1;
      } else {
        nameObj[name] += 1;
      }
    }
  });
  return nameObj;
}


// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true });
// console.log(assertEqual(result1["Jason"], 1));
// console.log(assertEqual(result1["Karima"], undefined));
// console.log(assertEqual(result1["Fang"], 2));
