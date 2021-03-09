const assert = require('chai').assert;
const findKey = require('../findKey');

const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("#findKey", () => {
  it("should return 'noma' when the x => x.stars === 2 callback is called", () => {
    assert.equal(findKey(testObject, x => x.stars === 2), 'noma');
  });
  it("should return 'Akaleri' when the x => x.stars === 2 callback is called", () => {
    assert.equal(findKey(testObject, x => x.stars === 3), 'Akaleri');
  });
  it("should return 'Blue Hill' when the x => x.stars === 1 callback is called", () => {
    assert.equal(findKey(testObject, x => x.stars === 1), 'Blue Hill');
  });
  it("should return 'undefined' when the x => x.stars === 10 callback is called, since 10 stars does not exist", () => {
    assert.equal(findKey(testObject, x => x.stars === 10), undefined);
  });
});