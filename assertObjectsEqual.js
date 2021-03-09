const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // Importing inspect from utils library
  let pass = `🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  let fail = `🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  if (eqObjects(actual, expected)) {
    //console.log(pass);
    return true;
  } else {
    //console.log(fail);
    return false;
  }  
};

module.exports = assertObjectsEqual;