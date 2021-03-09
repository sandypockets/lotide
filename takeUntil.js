// The function will return a slice of the array with all elements in the array up until it returns a truthy value from the callback.
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

module.exports = takeUntil;