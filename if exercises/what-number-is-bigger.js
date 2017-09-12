function greaterNum(firstNumber, secondNumber) {
    var theGreaterNumber;

    if (secondNumber > firstNumber) {
        theGreaterNumber = secondNumber;
    } 
    else if (firstNumber > secondNumber) {
        theGreaterNumber = firstNumber;
    }
    else if (firstNumber == secondNumber) {
        theGreaterNumber = firstNumber;
    }
    else {
        throw new Error("Unsupported value");
    }
    return theGreaterNumber;
}

function logTheGreaterNumberBetween(first,second){
    var greaterNumber = greaterNum(first,second);
    console.log(`The greater numbers between ${first} and ${second} is: ${greaterNumber}.`);
}

logTheGreaterNumberBetween(1,5);
logTheGreaterNumberBetween(2,5);
logTheGreaterNumberBetween(6,5);
logTheGreaterNumberBetween(9,10);
logTheGreaterNumberBetween(1,1);
logTheGreaterNumberBetween(1,"a");