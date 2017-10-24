function checkNumbers(list) {
    var argumentsArray = Array.from(arguments);

    for (var i = 0; i < argumentsArray.length; i++) {
        if (typeof argumentsArray[i] === "string") {
            return false;
        }
    }
    return true;
}

console.log(checkNumbers(1, "a", 1, 4, 5, 1));
console.log(checkNumbers(2, "NaN", 1, 4, 5, 1));
console.log(checkNumbers(1, 3, 1, 4, 5, 1));
console.log(checkNumbers(1, "a", 1, 4, 5, 1));
console.log(checkNumbers(2, "NaN", 1, 4, 5, 1));