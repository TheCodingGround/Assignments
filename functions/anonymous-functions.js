//Here we are going to go through a normal named function, 
//a method (anonymous function in an object) and 
//an anonymous object assigned to a variable.

//example of normal function


//There are 2 main differences between standalone functions
//and methods:
//1: A method has access to it's parent's object scope by 
//   using this.
//2: You have to call it through it's parent, 
//   i.e. user.toString() as you would any other property

function logHelloTo(name, surname){
    console.log("Hello " + name + " " + surname);
}

logHelloTo("Vuyisile", "Weni");

// method

var user = {
    name: "Cindy",
    surname: "Mahlangu",
    logHello: function(timeOfDayGreeting){
        console.log(`${timeOfDayGreeting} ${this.name} ${this.surname}`);
    }
};

user.logHello("Good morning");

var user2 = {
    name: "Mary",
    surname: "Mafa"
};

Object.prototype.logHelloProto = function(){
    console.log(`${this.name} ${this.surname} from Prototype`);
}

user.logHelloProto();
user2.logHelloProto();

String.prototype.log = function(prependValue = ""){
    console.log(prependValue + this.toLowerCase());
};

"This should be logged".log("Hello");

user.name.log();

var logAsdf = function(){
    console.log("asdf");
}

function logAsdf1(){
    console.log("asdf");
}

function logResultOfTwoFunctions(function1, function2){
    var firstFunctionResult = function1();
    var secondFunctionResult = function2();
    console.log(`${firstFunctionResult} and ${secondFunctionResult}`);
}

var function1 = function(){
    return "Result of function 1";
}

var function2 = function(){
    return "Result of function 2";
}

logResultOfTwoFunctions(function1, function2);

logAsdf();
logAsdf1();