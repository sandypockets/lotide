const assert = require('chai').assert;
const reverse = require('../reverse');

describe("#reverse", () => {
  it("should return 'olleh' for 'hello'", () => {
    assert.equal(reverse('hello'), 'olleh');
  });
  it("should return 'dlrow' for 'world'", () => {
    assert.equal(reverse('world'), 'dlrow');
  });
  it("should return 'OLLEH' for 'HELLO'", () => {
    assert.equal(reverse('HELLO'), 'OLLEH');
  });
});