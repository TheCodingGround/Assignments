// ```Create a simple String calculator with a method int Add(string numbers):

// The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
// Start with the simplest output of an empty string and move to 1 and two numbers
// Remember to solve things as simply as possible so that you force yourself to write test scenarios you did not think about
// Remember to refactor after each successful outpuAllow the Add method to handle an unknown amount of numbers```;
var simplestringCalc = numbers => {
  var arr = [];
  for (var i = 0; i < numbers.length; i++) {
    arr.push(parseFloat(numbers[i]));
  }
  console.log(arr);
  return arr
    .filter(x => {
      return x > 0;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);
};
console.log(simplestringCalc(""));
console.log(simplestringCalc("1"));
console.log(simplestringCalc("1,2"));
console.log(simplestringCalc("2,2,3,3,2"));
