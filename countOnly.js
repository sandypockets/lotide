const assertEqual = require('./assertEqual');

const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const items of allItems) {
    if (itemsToCount[items]) {
      if (results[items]) {
        results[items] += 1;
      } else {
        results[items] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;