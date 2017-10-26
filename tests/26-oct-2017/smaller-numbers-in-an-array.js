function getSmallerelements(arr, givenNum) {
    var smallerNumbers = [];
    for (var n = 0; n < arr.length; n++) {
        if (arr[n] < givenNum) {
            smallerNumbers.push(arr[n]);
        }
    }
    return smallerNumbers;
}
console.log(getSmallerelements([1, 3, 4, 5, 6, 7, 9, 12, 29, 14], 10));
console.log(getSmallerelements([1.3, 3.3, 4, 5, 6, 7.3, 9, 12, 29, 1.4], 5));
console.log(getSmallerelements([1, 3, 4, 5, 6, 7, 9, 12, 2.9, 144], 3.0));