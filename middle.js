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

const middle = (array) => {
  const middleElements = [];
  const middleIndexEven = Math.floor(array.length/2);
  const middleIndexOdd = Math.floor(array.length/2 - 1);

  if (array.length < 3) {
    return middleElements;
  } else if ((array.length >= 3) && (array.length % 2 !== 0)) {
    middleElements.push(array[middleIndexEven]);
    return middleElements;
  } else if ((array.length >= 4) && (array.length % 2 === 0)) {
    middleElements.push(array[middleIndexOdd]);
    middleElements.push(array[middleIndexEven]);
    return middleElements;
  }
};

/* // Debugging
// 1 - 2 elements
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
// 3+ odd number of elements
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
// 4+ even number of elements
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4] */