function encode(input_text) {
  var output = "";
  var seed = 13;
  var last = 122;
  for (var i = 0; i < input_text.length; i++) {
    var codeWithSeed = input_text.charCodeAt(i) + seed;
    if (codeWithSeed > last) {
      codeWithSeed = input_text.charCodeAt(i) - seed;
    }
    output += String.fromCharCode(codeWithSeed);
  }
  return output;
}
var text = "abdcdefghijklmnopqrstuvwxyz";
console.log(`${text} becomes ${this.encode(text)}`);
