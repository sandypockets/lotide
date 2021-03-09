const assertEqual = require('./assertEqual');

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

module.exports = findKey;