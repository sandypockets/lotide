const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

/*
// First tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

// Second tests
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
*/