const without = (source, itemsToRemove) => {
  let cleanedArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (typeof source[i] === typeof itemsToRemove[j]) {
        if (source[i] !== itemsToRemove[j]) {
          cleanedArray.push(source[i]);
        }
      }
    }
  }
  return cleanedArray;
};

module.exports = without;