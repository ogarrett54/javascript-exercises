const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  let fibSeq = [0, 1];
  for (let i = 2; i <= n; i++) {
    const Fi = fibSeq[i - 1] + fibSeq[i - 2];
    fibSeq.push(Fi);
  }
  return fibSeq[n];
};

// Do not edit below this line
module.exports = fibonacci;
