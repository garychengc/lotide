const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('I am cool', 'I am cool');
assertEqual('I am cool', 'I am very cool');
assertEqual(1, 2);


