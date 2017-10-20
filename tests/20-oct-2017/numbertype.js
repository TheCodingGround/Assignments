function checkNumbers(numbers) {
    numbers = Array.from(arguments);
    for (var i = 0; i < numbers.length; i++) {
        for (var b = 0; b > numbers.length; i--) {
            console.log(numbers[b]);
            console.log(numbers[i]);
        }

    }

}(checkNumbers(1, "a", 1, 4, 5, 1));
//console.log(checkNumbers(2, "NaN", 1, 4, 5, 1));
(checkNumbers(1, 3, 1, 4, 5, 1));