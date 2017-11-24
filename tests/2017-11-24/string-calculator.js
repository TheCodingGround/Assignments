function StringCal(numbers) {
  if (numbers.indexOf("-") !== -1) {
    throw new Error("no negative numbers please!");
  }
  numbers.split("", "");
  var arr = [];
  for (var i = 0; i < numbers.length; i++) {
    arr.push(parseInt(numbers[i]));
  }
  var filled = arr.filter(x => x > 0);
  var maped = filled.reduce((a, b) => a + b, 0);
  return maped;
}
console.log(StringCal("//;/n1;2;3;3"));
console.log(StringCal("//:/n1:2:3:3"));
console.log(StringCal("1,2,3"));
console.log(StringCal("1,2,3"));
console.log(StringCal("1\n"));
console.log(StringCal(""));
console.log(StringCal("//;/n1;-2;-3;-3"));
