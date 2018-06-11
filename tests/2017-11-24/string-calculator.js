// const stringCal = numbers => {
//   if (numbers.indexOf("-") !== -1 && numbers[0] !== "/") {
//     throw new Error(`negatives not allowed`);
//   }
//   let omitNonDigit = numbers.split(/\W/);
//   let addToArray = [];
//   for (let i = 0; i < omitNonDigit.length; i++) {
//     addToArray.push(+(omitNonDigit[i]));
//   }
//   let returnNumbersGreater = addToArray.filter(x => x >= 0);
//   let maped = returnNumbersGreater.reduce((a, b) => a + b, 0);
//   return maped;
// };

function stringCal(numbers) {
  var n = numbers.match(/[-]/);
  if (n !== null) {
    
    throw new Error("negatives not allowed");
    return;
  }
  const splitArgs = numbers.split(/\W/g);
  const reducedVals = splitArgs.reduce((acc, val) => +acc + +val);
  return +reducedVals + 0;
}
module.exports = {
  stringCal
};
