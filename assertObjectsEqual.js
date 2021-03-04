const eqArrays = (firstArray, secondArray) => {
  let accumulator = 0;
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        accumulator++;
      }
    }
  }
  if (accumulator === firstArray.length) {
    return true;
  } else {
    return false;
  }
};

const eqObjects = (firstObject, secondObject) => {
  const firstObjKeys = Object.keys(firstObject);
  const secondObjKeys = Object.keys(secondObject);
  let result;
  let accumulator = 0;
  if (firstObjKeys.length === secondObjKeys.length) {
    for (let i = 0; i < firstObjKeys.length; i++) {
      for (let j = 0; j < secondObjKeys.length; j++) {
        if (firstObjKeys[i] === secondObjKeys[j]) {
          if (eqArrays(firstObject[firstObjKeys[i]], secondObject[secondObjKeys[j]])) {
            accumulator++;
          } else {
            result = false;
          }
        }
      }
    }
    if (accumulator === firstObjKeys.length) {
      result = true;
    }
  } else {
    result = false;
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // Importing inspect from utils library
  let pass = `🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  let fail = `🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  if (eqObjects(actual, expected)) {
    return pass;
  } else {
    return fail;
  }  
};


/* // Debugging
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); */