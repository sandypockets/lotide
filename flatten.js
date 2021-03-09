const flatten = (arraysToFlatten) => {
  let result = [];
  if (Array.isArray(arraysToFlatten)) {
    for (let i = 0; i < arraysToFlatten.length; i++) {
      if (Array.isArray(arraysToFlatten[i])) {
        result = arraysToFlatten.flat();
      }
    }
  } else {
    result = 'The supplied value is not an array.';
  }
  if (result.length === 0) {
    result = 'The array does not need to be flattened.';
  }
  return result;
};

module.exports = flatten;