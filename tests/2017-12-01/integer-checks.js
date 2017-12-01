// Write a function that will return "And" if both
//the Conditions are met, "Or" if only one of the
// conditions are met or "None" if neither of the
//conditions are met. The function should take one
//argument and should check if it is an integer and if
//it is greater than 0. Name the function yourself.
// ExampleFunction(1) = "And"
// ExampleFunction(-1) = "Or"
// ExampleFunction("a") = "None"
function isInteger(inputs) {
  if (typeof inputs === "string") {
    return "None";
  } else if (typeof inputs === "number" && inputs < 0) {
    return "Or";
  } else {
    return "And";
  }
}
console.log(isInteger(1));
console.log(isInteger(-1));
console.log(isInteger("a"));
