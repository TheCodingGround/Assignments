function checkNumbers(numbers) {
    numbers = Array.from(arguments);
    for (var i = 0; i < numbers.length; i++) {
        console.log(typeof numbers[i] == typeof 1);
        // console.log(type);
        if (typeof numbers[i] == typeof 1) {
            return false;
        } else {
            // console.log(typeof numbers[i]);
            return true;
        }

    }
}
console.log(checkNumbers(1, "a", 1, 4, 5, 1));
//console.log(checkNumbers(2, "NaN", 1, 4, 5, 1));
//console.log(checkNumbers(1, 3, 1, 4, 5, 1));