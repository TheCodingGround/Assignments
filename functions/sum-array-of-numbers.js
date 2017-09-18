function sumNumbers(numbers) {
    return numbers.reduce(function(x,y){
        return x+y;
    });
}

var sum = sumNumbers([1,2,3,4,5]);
console.log("The sum is: ", sum);



