
function findElement(arr, func) {
return arr.filter(func)[0];
}

findElement([4, 8, 12, 7], function(num){ return num % 2 === 0; });
