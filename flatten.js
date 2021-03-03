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

// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

const flatten = (arraysToFlatten) => {
  let result = [];
  if (Array.isArray(arraysToFlatten)) {
    for (let i = 0; i < arraysToFlatten.length; i++) {
      if (Array.isArray(arraysToFlatten[i])) {
        result = arraysToFlatten.flat();
      }
    }
  } else {
    result = 'The supplied value is not an array.';
  }
  if (result.length === 0) {
    result = 'The array does not need to be flattened.';
  }
  return result;
};

// Debugging
// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, 2, [3, [4]], 5, [6]]));
// console.log(flatten([1, 2, 3, 4, 5, 6]));
// console.log(flatten('pizza'));