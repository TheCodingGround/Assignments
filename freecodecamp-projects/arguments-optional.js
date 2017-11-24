function addTogether(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (!y) {
    return function(a) {
      return x + a;
    };
  }
}
console.log(addTogether(2)(3));
