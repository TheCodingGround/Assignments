function multiply(number1,number2) {
  if(!number2){
  return function multiply(b){
  return number1 * b;  }}
 else{ 
    return number1 * number2; }
}
console.log(multiply(3, 3));
console.log(multiply(3)(3));
console.log(multiply(5)(2));
