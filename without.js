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
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // Debugging

const without = (source, itemsToRemove) => {
  let cleanedArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (typeof source[i] === typeof itemsToRemove[j]) {
        if (source[i] !== itemsToRemove[j]) {
          cleanedArray.push(source[i]);
        }
      }
    }
  }
  return cleanedArray;
};



// Test cases
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));