const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4, 5], [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4, 5], [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return [1, 2, 3, 4, 5, 6] for [[1, 2], [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([[1, 2], [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return [1, 2, 3, 4, 5, 6] for [[1], [2], [3, 4], [5], [6]]", () => {
    assert.deepEqual(flatten([[1], [2], [3, 4], [5], [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return 'The supplied value is not an array.' for 'pizza'", () => {
    assert.deepEqual(flatten('pizza'), 'The supplied value is not an array.');
  });
  it("should return 'The array does not need to be flattened.' for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5, 6]), 'The array does not need to be flattened.');
  });
});