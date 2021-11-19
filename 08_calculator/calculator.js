const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (num) {
  let sumNum = 0;
  for (let i = 0; i < num.length; i++) {
    sumNum += num[i];
  }
  return sumNum;
};

const multiply = function (num) {
  let numMultiplied = 1;
  for (let i = 0; i < num.length; i++) {
    numMultiplied *= num[i];
  }
  return numMultiplied;
};

const power = function (num1, num2) {
  let powerResult = 1;
  for (let i = 0; i < num2; i++) {
    powerResult *= num1;
  }
  return powerResult;
};

const factorial = function (num) {
  if (num === 0) return 1;
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
