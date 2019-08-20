const assertEqual = function(actual, expected) {
  return (actual === expected) ? `✅ Assertion Passed: ${actual} === ${expected}` : `❌ Assertion Failed: ${actual} !== ${expected}`
};

const countLetters = function(string) {
  let letterObj = {};
  const str = string.split(' ').join('');
  for (let word of str) {
    if (!letterObj[word]) {
      letterObj[word] = 1;
    } else {
      letterObj[word] += 1;
    }
  }
  return letterObj;
}

// console.log(assertEqual(countLetters("lighthouse in the house")['l'], 1));
