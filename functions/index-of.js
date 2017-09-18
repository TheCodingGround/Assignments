function ourIndexOf(value, numbers){
    for(var i = 0; i < numbers.length; i++){
        if (numbers[i] === value){
            return i;
        }
    }
    return -1;
}

var numbers = [1,2,3,4,5,6];

var indexOf = numbers.ourIndexOf(1,numbers);

console.log("The index is", indexOf);
