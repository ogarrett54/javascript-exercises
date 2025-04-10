const sumAll = function (intOne, intTwo) {
  let sum = 0;

  if (
    !Number.isInteger(intOne) ||
    intOne < 0 ||
    !Number.isInteger(intTwo) ||
    intTwo < 0
  ) {
    return "ERROR";
  }

  const start = Math.min(intOne, intTwo);
  const end = Math.max(intOne, intTwo);

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
