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


const letterPositions = (sentence) => {
  const results = {};
  sentence = sentence.toLowerCase();
  const array = sentence.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== ' ') {
      if (!results[array[i]]) {
        // Creates new array if one does not exist
        results[array[i]] = [i];
      } else {
        // If the array exists, another character index is added to it
        results[array[i]].push(i);
      }
    }
  }
  return results;
};

// Debugging
/* console.log(letterPositions('Lighthouse Labs'));
console.log(assertArraysEqual(letterPositions("hello").e, [1])); //confirms if e has a positoin of 1 */