const reverseString = function (string) {
  let reversedString = "";
  for (let i = 1; i <= string.length; i++) {
    reversedString += string.at(-i);
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
