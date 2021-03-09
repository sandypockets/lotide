const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("should return { L: 4, H: 2 } for 'LHL LHL", () => {
    assert.deepEqual(countLetters('LHL LHL'), { L: 4, H: 2 });
  });
  it("should return { L: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'Lighthouse in the house'", () => {
    assert.deepEqual(countLetters('Lighthouse in the house'), { L: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});