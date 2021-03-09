// Scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
const findKeyByValue = (object, value) => {
  const listKeys = Object.keys(object);
  let matchedKey;
  for (let key of listKeys) {
    if (object[key] === value) {
      matchedKey = key;
    }
  }
  return matchedKey;
};

module.exports = findKeyByValue;