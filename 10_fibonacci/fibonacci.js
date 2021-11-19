const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  const numCheck = Number(num);
  let numSeq = Array(numCheck + 1);
  for (let i = 0; i < numSeq.length; i++) {
    if (i > 1) {
      numSeq[i] = numSeq[i - 1] + numSeq[i - 2];
    } else {
      numSeq[i] = i;
    }
  }
  return numSeq[numSeq.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
