const reverseString = function (str) {
  let strArr = str.split("");
  let reversed = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversed += strArr[i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
