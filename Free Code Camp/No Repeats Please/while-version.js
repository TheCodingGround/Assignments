function generate(a, n = a.length){
    var results = [];
    var c = []

    for (var i = 0; i < n; i++){
        c[i] = 0;
    }

    results.push(a);

    var i = 0;

    while (i < n){
        if (c[i] < i){
            if (i % 2 === 0){
                const temp0 = a[0];
                const tempi = a[i];

                var splitted = a.split("");

                splitted[0] = tempi;
                splitted[i] = temp0;

                a = splitted.join("")
            }
            else {
                const temp0 = a[c[i]];
                const tempi = a[i];

                var splitted = a.split("");

                splitted[c[i]] = tempi;
                splitted[i] = temp0;

                a = splitted.join("")
            }

            results.push(a);
            c[i]++;
            i = 0;
        }else{
            c[i] = 0;
            i++;
        }
    }

    return results;
}

console.log(generate("ABCD").length);