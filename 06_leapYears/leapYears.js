const leapYears = function (year) {
  if (Number(year) % 4 === 0) {
    if (Number(year) % 100 === 0) {
      if (Number(year) % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
