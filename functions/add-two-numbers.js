function addTwoNumbers(number1, number2){
    return number1 + number2;
}

function addTwoNumbersAndLog(number1, number2){
    var result = addTwoNumbers(number1, number2);
    console.log(`The result of adding ${number1} + ${number2} the 2 numbers is: `, result);
}

addTwoNumbersAndLog(1,2);
addTwoNumbersAndLog(1,3);
addTwoNumbersAndLog(5,3);
