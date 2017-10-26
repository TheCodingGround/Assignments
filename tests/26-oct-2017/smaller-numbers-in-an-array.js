function getSmallerelements(arr, givenNum) {
    arr.join(" , ");
    console.log(arr);
    var smallerNumbers = [];
    for (var n = 0; n < arr.length; n++) {
        if (arr[n] < givenNum) {
            smallerNumbers.push(arr[n]);
        }
    }
    return smallerNumbers;
}
console.log(getSmallerelements([1, 3, 4, 5, [6], 7, 9, 11, [9], 34], 10));