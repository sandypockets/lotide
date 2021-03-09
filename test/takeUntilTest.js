const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ['The', 'function', 'stops', 'whenever', 'it', 'detects', 'the', 'word', 'it'];

describe("#takeUntil", () => {
  it("should return [ 1, 2, 5, 7, 2 ] for data1 when callback is x => x < 0", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
  it("should return [ 'I\'ve', 'been', 'to', 'Hollywood' ] for data2 when callback is x => x === ','", () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
  it("should return [ 1, 2, 5, 7, 2 ] for data1 when callback is x => x < 0", () => {
    assert.deepEqual(takeUntil(data3, x => x === 'it'), [ 'The', 'function', 'stops', 'whenever' ]);
  });
});