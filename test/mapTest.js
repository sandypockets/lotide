const assert = require('chai').assert;
const map = require('../map');

const debugOne = ['alpha', 'bravo', 'charlie', 'delta', 'echo'];
const debugTwo = ['annual', 'bank', 'conference', 'development', 'economics'];
const debugThree = ['national', 'aeronautics', 'space', 'administration'];

describe("#map", () => {
  it("should return [ 'a', 'b', 'c', 'd', 'e' ] for debugOne with a callback of word => word[0]", () => {
    assert.deepEqual(map(debugOne, word => word[0]), [ 'a', 'b', 'c', 'd', 'e' ]);
  });
  it("should return [ 'a', 'b', 'c', 'd', 'e' ] for debugTwo with a callback of word => word[0]", () => {
    assert.deepEqual(map(debugTwo, word => word[0]), [ 'a', 'b', 'c', 'd', 'e' ]);
  });
  it("should return [ 'a', 'b', 'c', 'd', 'e' ] for debugThree with a callback of word => word[0]", () => {
    assert.deepEqual(map(debugThree, word => word[0]), [ 'n', 'a', 's', 'a' ]);
  });
});