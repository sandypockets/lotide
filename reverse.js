const reverse = function(word) {
  let reversedWords = '';
  for (let i = word.length-1; i >= 0; i--) {
    reversedWords += word[i];
  }
  return reversedWords;
};

module.exports = reverse;