1. Will the functions below return the same results? Clearly state the reason(s) for your answer?
function bragFirst()
{
  return {
      brag: "Ska ba forgiva!"
  };
}

function bragAgain()
{
  return
  {
      brag: "Ska ba forgiva!"
  };
}


2. What is the output of the following code? Explain your answer?

var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

3. Write a multiply method which will perform correctly when called using either syntax below.

console.log(multiply(3,3));   //Output 9
console.log(multiply(3)(3));  // Outputs 9
