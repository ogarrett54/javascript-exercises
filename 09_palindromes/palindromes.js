const palindromes = function (string) {
  const split = string.toLowerCase().split("");
  const alphanumeric = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const lettersOnly = split.filter((char) => alphanumeric.includes(char));
  return lettersOnly.join() == lettersOnly.reverse().join();
};

// Do not edit below this line
module.exports = palindromes;
