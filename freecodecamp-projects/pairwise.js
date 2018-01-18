function pairwise(arr, arg) {
  var raa = arr.slice();
  var rra = 0;
  for (var i = 0; i < raa.length; i++) {
    for (var h =i + 1; h < raa.length; h++) {
      if (raa[i] + raa[h] === arg) {
        rra += raa.indexOf(raa[i]);
        rra += raa.indexOf(raa[h]);
        raa[h] = raa[i] = NaN;
      }
    }
  }
  return rra;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise([1, 3, 2, 4], 4));
console.log(pairwise([1, 1, 1], 2));
