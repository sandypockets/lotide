const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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
  return;
};

module.exports = middle;