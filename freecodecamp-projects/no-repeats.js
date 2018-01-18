var temp;
var permus = [];
function perms(str,counter) {
  if (!counter) {
    counter = str.length;
    console.log("start");
  }
  temp = str;
  if (counter === 1) {
  } else {
    for (var i = 0; i < counter - 1; i++) {
      perms(temp,counter - 1);

      if (counter % 2 === 0) {
        let splited = temp.split("");
        splited.splice(i, 1, temp[counter - 1]);
        splited.splice(counter - 1, 1, temp[i]);
        temp = splited.join("");
        permus.push(temp);
      } else {
        let splited = temp.split("");
        splited.splice(0, 1, temp[counter - 1]);
        splited.splice(counter - 1, 1, temp[0]);
        temp = splited.join("");
        permus.push(temp);
      }
    }
    perms(temp, counter - 1);
  }


  var permutations = permus.filter(function(letters) {
    return !letters.match(/([a-z])\1+/g);
  });

  return permutations.length;
}
console.log(perms("aaabbc"));
