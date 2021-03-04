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

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// Debugging
const debugOne = ['alpha', 'bravo', 'charlie', 'delta', 'echo'];
const debugTwo = ['annual', 'bank', 'conference', 'development', 'economics'];
const debugThree = ['national', 'aeronautics', 'space', 'administration'];
const debugFour = ['not', 'always', 'simple', 'addition'];
const debugFive = ['not', 'always', 'simple', 'addition', 'nasa'];
const debugSix = ['these', 'are', 'some', 'words'];

const results1 = map(debugOne, word => word[0]);
const results2 = map(debugTwo, word => word[0]);
console.log(assertArraysEqual(results1, results2));

const results3 = map(debugThree, word => word[0]);
const results4 = map(debugFour, word => word[0]);
console.log(assertArraysEqual(results3, results4));

const results5 = map(debugFive, word => word[0]);
const results6 = map(debugSix, word => word[0]);
console.log(assertArraysEqual(results5, results6));