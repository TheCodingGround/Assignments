function checkNumbers(numbers) {
    var results = ""
    numbers = Array.from(arguments);
    numbers.sort(function(a, b) { return a - b });
    for (var i = 0; i < numbers.length; i++) {
        for (var b = 1; b < numbers.length; b++) {
            if (numbers[i] !== numbers[b++]) {
                results = true;
            } else { results = false; }
        }
    }
    return results;
}


console.log(checkNumbers(1, 2, 3, ));
console.log(checkNumbers(1, 2, 3, 2));
console.log(checkNumbers("1", "2", "3", "2"));