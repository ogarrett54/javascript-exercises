const findTheOldest = function (arr) {
  let sorted = arr.slice(0, arr.length);
  sorted.sort((a, b) => {
    if (!a.yearOfDeath) {
      a.yearOfDeath = new Date().getFullYear();
    } else if (!b.yearOfDeath) {
      b.yearOfDeath = new Date().getFullYear();
    }
    return -(a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth));
  });
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
