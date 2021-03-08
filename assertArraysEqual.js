const eqArrays = require('./eqArrays');

const assertArraysEqual = (array1, array2) => {
  let message;
  let passMsg = `🟢🟢🟢 Assertion Passed: ${array1} === ${array2}`;
  let failMsg = `🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`;
  if (eqArrays(array1, array2) === true) {
    message = passMsg;
  } else {
    message = failMsg;
  }
  return message;
};

module.exports = assertArraysEqual;