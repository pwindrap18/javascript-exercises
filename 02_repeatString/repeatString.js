const repeatString = function (word, repeatNumber) {
  let repeatedWord = "";
  if (repeatNumber < 0) return "ERROR";
  for (i = 0; i < repeatNumber; i++) {
    repeatedWord += word;
  }
  return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
