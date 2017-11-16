function sumPrimes(num) {
  var empty = [];
  for (var i = 2; i <= num; i++) {
    empty.push(i);
  }
  function filterred(item, index, array) {
    for (var j = 0; j < index; j++) {
      if (item % array[j] === 0) {
        return false;
      }
    }
    return true;
  }
  return empty.filter(filterred).reduce(function reduced(a, b) {
    return a + b;
  });
}

console.log(sumPrimes(977));
