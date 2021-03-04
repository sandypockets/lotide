const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Scan the object and return the first key for which the callback returns a truthy value.
//If no key is found, then it should return undefined.
const findKey = (obj, callback) => {
  let listKeys = Object.keys(obj);
  for (let key of listKeys) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return;
};

// Debugging
/* assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');
// Expected results 'noma' */