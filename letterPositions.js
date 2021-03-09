const letterPositions = (sentence) => {
  const results = {};
  sentence = sentence.toLowerCase();
  const array = sentence.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== ' ') {
      if (!results[array[i]]) {
        // Creates new array if one does not exist
        results[array[i]] = [i];
      } else {
        // If the array exists, another character index is added to it
        results[array[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;