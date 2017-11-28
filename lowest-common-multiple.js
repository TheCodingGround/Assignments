// 1. Find the lowest common multiple of the two numbers
// 2. The multiple must be divisible by the sequential numbers between the 2 numbers.
// 3. The input numbers are not necessarily sorted

function lowestCommonMultiple(values) {
  var sortedValues = values.sort();
  var lowest = sortedValues[0];
  var highest = sortedValues[1];

  var currentMultiple = highest;

  while (true){
    var allMultiplesAreValid = isValidMultiple(lowest, highest, currentMultiple);
    if (allMultiplesAreValid) {
      break;
    }
    else {
      currentMultiple += highest;
    }
  }

  return currentMultiple;
}

function isValidMultiple(lowest, highest, currentMultiple){
  for (var j = lowest; j <= highest; j++){
    if (currentMultiple % j != 0){
      return false;
    }
  }
  return true;
}

var lowest = lowestCommonMultiple([1,5]);

console.log(`Lowest common multiple between 1 and 5 should be 60 and is ${lowest}`, lowest == 60);

lowest = lowestCommonMultiple([1,13]);

console.log(`Lowest common multiple between 1 and 13 should be 360360 and is ${lowest}`, lowest == 360360);

var lowest = lowestCommonMultiple([5,1]);

console.log(`Lowest common multiple between 5 and 1 should be 60 and is ${lowest}`, lowest == 60);

