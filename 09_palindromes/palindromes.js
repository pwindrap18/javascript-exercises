const onlyWords = function (words) {
  let wordsLower = words.toLowerCase();
  let wordsOnly = "";
  for (let i = 0; i < wordsLower.length; i++) {
    if (wordsLower[i].match("[a-zA-z]") && wordsLower[i] != " ") {
      wordsOnly += wordsLower[i];
    }
  }
  return wordsOnly;
};

const reversedWord = function (words) {
  let reversed = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i];
  }
  return reversed;
};

const palindromes = function (words) {
  let wordsOnly = onlyWords(words);
  let reversed = reversedWord(wordsOnly);
  if (wordsOnly === reversed) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
