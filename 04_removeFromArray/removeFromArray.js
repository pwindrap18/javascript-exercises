const removeFromArray = function (arr, ...removeArr) {
  for (let i = 0; i < removeArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === removeArr[i]) arr.splice(j, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
