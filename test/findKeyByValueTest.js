const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("should return drama for bestTVShowsByGenre, 'The Wire'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it("should return comedy for bestTVShowsByGenre, 'That '70s Show'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("should return sci_fi for bestTVShowsByGenre, 'The Expanse'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sci_fi');
  });
});