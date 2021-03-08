const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Debugging
// 1 - 2 elements

console.log(assertArraysEqual((middle([1])), [])); // => []
console.log(assertArraysEqual((middle([1, 2])), [])); // => []
// 3+ odd number of elements
console.log(assertArraysEqual((middle([1, 2, 3])), [2])); // => [2]
console.log(assertArraysEqual((middle([1, 2, 3, 4, 5])), [3])); // => [3]
// 4+ even number of elements
console.log(assertArraysEqual((middle([1, 2, 3, 4])), [2, 3])); // => [2, 3]
console.log(assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4])); // => [3, 4]

