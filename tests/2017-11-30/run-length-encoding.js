const runLength = rLE => {
  let output = [];
  let count = 0;
  let currentChar = "";
  let input = rLE.toLowerCase();
  for (var i = 0; i < input.length; i++) {
    if (i === 0) {
      count++;
      currentChar = input[i];
    } else if (
      input[i] === currentChar[i - 1] &&
      input[i] === currentChar[i + 1]
    ) {
      count++;
    } else if (
      input[i] !== currentChar[i - 1] &&
      input[i] !== currentChar[i + 1]
    ) {
      output.push(`${count}${input[i - 1]}`);
    }
  }

  return output.join("");
dorid}
console.log(runLength("BookDash"));
