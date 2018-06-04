const stringCal = numbers => {
  if (numbers.indexOf("-") !== -1 && numbers[0] !== "/") {
    throw new Error(`negatives not allowed`);
  }
  let omitNonDigit = numbers.split(/\W/);
  let addToArray = [];
  for (let i = 0; i < omitNonDigit.length; i++) {
    addToArray.push(+(omitNonDigit[i]));
  }
  let returnNumbersGreater = addToArray.filter(x => x >= 0);
  let maped = returnNumbersGreater.reduce((a, b) => a + b, 0);
  return maped;
};

module.exports = {
  stringCal
}