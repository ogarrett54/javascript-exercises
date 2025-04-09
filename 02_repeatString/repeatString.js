const repeatString = function (string, number) {
  combined_string = "";
  if (number < 0) {
    return "ERROR";
  }
  for (let i = 0; i < number; i++) {
    combined_string += String(string);
  }
  return combined_string;
};

// Do not edit below this line
module.exports = repeatString;
