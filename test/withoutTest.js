const without = require("../without");
const assert = require("chai").assert;

describe("#without", () => {
  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(
      without(["hello", "world", "lighthouse"], ["lighthouse"]),
      ["hello", "world"]
    );
  });

  it("return '[2, 3]' for [1, 2, 3, 1]", () => {
    assert.deepEqual(without([1, 2, 3, 1], [1]), [2, 3]);
  });

  it("return ['1', '2'] for ['1', '2', '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});