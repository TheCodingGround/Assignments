result = "";

function verifyNumbers(numbers) {
    numbers = Array.from(arguments);
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i]) {
            isNaN(numbers[i])
        } else {
            result = ` this is not a number ${i} false`;
        }
    }
    return result;
}
console.log(verifyNumbers(1, 3, 4, "a", "5", ));