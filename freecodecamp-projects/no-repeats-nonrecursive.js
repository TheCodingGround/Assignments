function generate(str, counter = str.length) {
  var arr = [];
  var c = [];

  for (var i = 0; i < str.length; i++) {
    c[i] = 0;
  }
  arr.push(str);

  var i = 0;
  while (i < counter) {
    if (c[i] < i) {
      if (i % 2 === 0) {
        var splited = str.split("");
        const temp0 = str[0];
        const temp1 = str[i];
        splited[0] = temp1;
        splited[i] = temp0;
        arr.push((str = splited.join("")));
      } else {
        var splited = str.split("");
        const temp0 = str[c[i]];
        const temp1 = str[i];
        splited[c[i]] = temp1;
        splited[i] = temp0;
        arr.push((str = splited.join("")));
      }
      console.log(str);
      c[i] += 1;
      i = 0;
    } else {
      c[i] = 0;
      i += 1;
    }
  }
  var permutations = arr.filter(function(letters) {
    return !letters.match(/([a-z])\1+/g);
  });

  return permutations.length;
}
console.log(generate("abcdefa"));
