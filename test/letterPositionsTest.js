const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return 1 for e in 'hello'", () => {
    assert.deepEqual(letterPositions('Hello').e, [1]);
  });
  it("should return 7 for u in 'Lighthouse Labs'", () => {
    assert.deepEqual(letterPositions('Lighthouse Labs').u, [7]);
  });
});