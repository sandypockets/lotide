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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));