const eqArrays = require('./eqArrays');

const eqObjects = (firstObject, secondObject) => {
  const firstObjKeys = Object.keys(firstObject);
  const secondObjKeys = Object.keys(secondObject);
  let result;
  let accumulator = 0;
  if (firstObjKeys.length === secondObjKeys.length) {
    for (let i = 0; i < firstObjKeys.length; i++) {
      for (let j = 0; j < secondObjKeys.length; j++) {
        if (firstObjKeys[i] === secondObjKeys[j]) {
          if (eqArrays(firstObject[firstObjKeys[i]], secondObject[secondObjKeys[j]])) {
            accumulator++;
          } else {
            result = false;
          }
        }
      }
    }
    if (accumulator === firstObjKeys.length) {
      result = true;
    }
  } else {
    result = false;
  }
  return result;
};

module.exports = eqObjects;