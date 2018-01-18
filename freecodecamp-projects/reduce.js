function reducer(a, value) {
  if (a.length === 0) return value;
  else {
    value += a.pop();
    reducer(a, value);
  }
}
console.log(reducer([1,2,3,4], 0));
