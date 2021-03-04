// The function will return a slice of the array with elements taken from the beginning.
// It should keep going until the callback returns a truthy value.

const takeUntil = (array, callback) => {
  let result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    }
    if (callback(item)) {
      break;
    }
  }
  return result;
};

// Debugging
/* const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // Expected output: [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // Expected output: [ 'I\'ve', 'been', 'to', 'Hollywood' ]

console.log('---');

const data3 = ['The', 'function', 'stops', 'whenever', 'it', 'detects', 'the', 'word', 'it'];
const results3 = takeUntil(data3, x => x === 'it'); // Expected output: [ 'The', 'function', 'stops', 'whenever' ]
console.log(results3); */