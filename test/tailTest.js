const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [ 'This is Lighthouse', 'Labs' ] for ['Hello', 'This is Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'This is Lighthouse', 'Labs' ]), [ 'This is Lighthouse', 'Labs' ]);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] when passed an empty array []", () => {
    assert.deepEqual(tail([]), []);
  });
});