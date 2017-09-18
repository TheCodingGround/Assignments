function addAllNumbersBelow100(){
    var sum = 0;
    var lastNumber = 1;

    while (lastNumber < 100){
        sum += lastNumber;
        lastNumber++;
    }

    return sum;
}

var sum = addAllNumbersBelow100();
console.log('sum is', sum);
