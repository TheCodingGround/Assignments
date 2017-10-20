function checkNumbers(numbers) {
    numbers = Array.from(arguments);
    // console.log(numbers);
    for (var i = 0; i < numbers.length; i++) {
        //console.log(numbers[i]);

        for (var b = 1; b < numbers.length; b++) {
            console.log(numbers[b]);
            if (numbers[i] === numbers[b]) {
                console.log(true);
            } else { console.log(false) }
        }
    }
}
checkNumbers(1, 1, 1, 4, 5, 1);
//console.log(checkNumbers(2, "NaN", 1, 4, 5, 1));
//checkNumbers(1, 3, 2, 4, 5, 6);