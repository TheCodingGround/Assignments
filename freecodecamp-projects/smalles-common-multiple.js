function smallestCommons(arr) {
  function checkIfMultiple(cm, min, max) {
    for (var i = min; i < max; i++) {
      if (cm % i !== 0) {
        return false;
      }
    }
    
    return true;
  }
  // 
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var currentMultiple = max;

  while (!checkIfMultiple(currentMultiple, min, max)) {
    currentMultiple += max;
  }
  
  return currentMultiple;
}


console.log(smallestCommons([23,18]));
