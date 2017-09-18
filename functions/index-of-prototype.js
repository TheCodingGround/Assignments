Array.prototype.ourIndexOf = function ourIndexOf(value){
    for(var i = 0; i < this.length; i++){
        if (this[i] === value){
            return i;
        }
    }
    return -1;
}

var numbers = [1,2,3,4,5,6];

var indexOf = numbers.ourIndexOf(1);

console.log("The index is", indexOf);
