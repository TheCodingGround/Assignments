function getLastIndex(list) {
    list = Array.from(arguments);
    console.log(list);
    var theLastindex = list.slice(-1);
    return theLastindex;
}
console.log(getLastIndex(1, 2, 3, 4, 5));
console.log(getLastIndex(4, 3, 2, 1, -1));
console.log(getLastIndex(12, 11, 12, 991, ));