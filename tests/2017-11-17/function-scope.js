var age =  22;

var moreki = function() {
console.log(age);
var age = 27;
console.log(age);
};
//age =age;
console.log(moreki());

// the above code s output will not be 22 the variable at the global scope.

// and this is becauses there is a local scope variable wich is unreachable after the console.log

// so the because of this the output will will return the default value of undefined.