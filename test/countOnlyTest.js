const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNamesTesting = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("should return 1 for firstNamesTesting 'Jason'", () => {
    assert.deepEqual(countOnly(firstNamesTesting, { "Jason": true }), { "Jason": 1 });
  });
  it("should return 1 for firstNamesTesting 'Karima'", () => {
    assert.deepEqual(countOnly(firstNamesTesting, { "Karima": true }), {});
  });
  it("should return 1 for firstNamesTesting 'Fang'", () => {
    assert.deepEqual(countOnly(firstNamesTesting, { "Fang": true }), { "Fang": 2 });
  });
  it("should return 1 for firstNamesTesting 'Agouhanna'", () => {
    assert.deepEqual(countOnly(firstNamesTesting, { "Agouhanna": false }), {});
  });
});