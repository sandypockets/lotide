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

module.exports = countLetters;