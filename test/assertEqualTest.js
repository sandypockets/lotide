const { assert } = require('chai');
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("shouldn't return equal for 'Lighthouse Labs', 'Bootcamp'", () => {
    assert.equal(assertEqual('Lighthouse Labs', 'Bootcamp'));
  });
  it("should return equal for 1, 1", () => {
    assert.equal(assertEqual(1, 1));
  });
  it("shouldn't return equal for 12, 12.1", () => {
    assert.equal(assertEqual(12, 12.1));
  });
  it("shouldn't return equal for 'wow' and 'whoa'", () => {
    assert.equal(assertEqual('wow', 'whoa'));
  });
  it("should return equal for 'same', and 'same'", () => {
    assert.equal(assertEqual('same', 'same'));
  });
});