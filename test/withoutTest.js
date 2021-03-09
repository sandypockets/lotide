const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("should return [2, 3] for [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("should return ['Hello', 'world'] for ['Hello', 'world', 'lighthouse'], [lighthouse]", () => {
    assert.deepEqual(without(['Hello', 'world', 'lighthouse'], ['lighthouse']), ['Hello', 'world']);
  });
});