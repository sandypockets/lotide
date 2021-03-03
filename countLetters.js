const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  const resultObj = {};
  const array = str.split('');
  for (let letter of array) {
    if (letter !== ' ') {
      if (!resultObj[letter]) {
        resultObj[letter] = 1;
      } else {
        resultObj[letter]++;
      }
    }
  }
  return resultObj;
};

// Debugging
/* const debugString = 'LHL LHL';
console.log(countLetters(debugString));
console.log(countLetters('Lighthouse in the house')); */