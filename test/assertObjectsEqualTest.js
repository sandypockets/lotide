const assertObjectsEqual = require('../assertObjectsEqual');
const assert = require('chai').assert;

describe("#assertObjectsEqual", () => {
  it("should return true for { a: '1', b: '2' } and { b: '2', a: '1' };", () => {
    assert.isTrue(assertObjectsEqual({ a: '1', b: '2' }, { b: '2', a: '1' }));
  });
  it("should return false for { a: '1', b: '2' } and { a: '1', b: '2', c: '3' }", () => {
    assert.isFalse(assertObjectsEqual({ a: '1', b: '2', c: '3' }, { a: '1', b: '2' }));
  });
  it("should return true for { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1' }", () => {
    assert.isTrue(assertObjectsEqual({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }));
  });
  it("should return false for { c: '1', d: ['2', 3] } and { c: '1', d: ['2', 3, 4] }", () => {
    assert.isFalse(assertObjectsEqual({ c: '1', d: ['2', 3] }, { c: '1', d: ['2', 3, 4] }));
  })
});