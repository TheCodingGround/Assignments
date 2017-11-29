const StringCal = numbers => {
  if (numbers.indexOf("-") !== -1 && numbers[0] !== "/") {
    throw new Error(`negatives not allowed`);
  }
  let yu = numbers.split(/\W/);
  let arr = [];
  for (let i = 0; i < yu.length; i++) {
    arr.push(parseInt(yu[i]));
  }
  let filled = arr.filter(x => x >= 0);
  let maped = filled.reduce((a, b) => a + b, 0);
  return maped;
};

console.log(StringCal(""));
console.log(StringCal("1"));
console.log(StringCal("1,23,2,2"));
console.log(StringCal("1,\n"));
console.log(StringCal("//;1;2"));
console.log(StringCal("//-\n-23-2-2"));
console.log(StringCal("1,-2"));
