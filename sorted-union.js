function uniteUnique(arr) {
    var results = [];
    var arrayed = Array.from(arguments).reduce(function(a, b) {
        return a.concat(b);
    }, []);

    for (var i = 0; i < arrayed.length; i++) {
        if (results.indexOf(arrayed[i]) === -1) {
            results.push(arrayed[i]);
        } else {
            arrayed[i]
        };
    }
    console.log(results);
    return results;
}

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));