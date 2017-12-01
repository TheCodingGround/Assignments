// Write a
 //function that takes 3 arguments, an array of numbers, a number
//  und a string that will either be "GreaterOrEqual" or "LessThan"
//   and return an array of numbers where the numbers are Greater Or
//   Equal if the third argument is "GreaterOrEqual", or less than if
//   the third argument is "LessThan". Give an appropriate name for the
//   function.
// This function should use a for loop.
// ExampleFunction([1,2,3,4,5,6,7], 3, "GreaterOrEqual") = [3,4,5,6,7]
// ExampleFunction([1,2,3,4,5,6,7], 5, "LessThan") = [1,2,3,4]
const isEqualOrNOt = (arr, num, string) => {
    let emptyA = [];
  for (var i = 0; i<arr.length; i++) {
    if (string === "GreaterOrEqual" && arr[i] >= num) {
      emptyA.push(arr[i]);
    } else if (string === "Lessthan" && arr[i] < num) {
      emptyA.push(arr[i]);
    }
  }return emptyA;
}
console.log(isEqualOrNOt([1, 2, 3, 4, 5, 6, 7], 3, "GreaterOrEqual"))
console.log(isEqualOrNOt([1, 2, 3, 4, 5, 6, 7], 5, "Lessthan"))
console.log(isEqualOrNOt([1, 2, 3, 4, 5, 6, 7], 3, "GreaterOrEqual"))
