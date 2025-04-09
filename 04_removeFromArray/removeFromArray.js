// const removeFromArray = function (array, valueToRemove) {
//   let trimmedArray = array;
//
//   // To support multiple values to remove, call them from the arguments
//   const valuesToRemove = [];
//   for (var i = 1; i < arguments.length; ++i) valuesToRemove[i] = arguments[i];
//
//   for (valueToRemove of valuesToRemove) {
//     let valueOccurances = 0;
//     for (value of array) {
//       if (value === valueToRemove) {
//         ++valueOccurances;
//       }
//     }
//     for (let occurance = 0; occurance < valueOccurances; occurance++) {
//       for (let index = 0; index < trimmedArray.length; index++) {
//         if (trimmedArray[index] === valueToRemove) {
//           trimmedArray.splice(index, 1);
//         }
//       }
//     }
//   }
//   return trimmedArray;
// };

// Let's see if I can recreate the solution without looking
const removeFromArray = function (array, ...args) {
  let trimmedArray = [];

  array.forEach((value) => {
    if (!args.includes(value)) trimmedArray.push(value);
  });
  return trimmedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
