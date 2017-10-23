function getLastIndex(list) {
    list = Array.from(arguments);
    var result = "";
    var lastIndex = list.length - 1;
    result = list[lastIndex];
    if (list.length === 1) {
        var arrIndex = list[lastIndex].length - 1;
        result = list[lastIndex][arrIndex];
    }
    return result;
}

console.log(getLastIndex("xyz"));
console.log(getLastIndex([4, 3, 2, 1, -1]));
console.log(getLastIndex(12, 11, 12, 991, ));