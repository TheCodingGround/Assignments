function steamrollArray(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((accum, arr) => {
      return accum.concat(steamrollArray(arr));
    }, []);
  } else {
    return arr;
  }
}
steamrollArray([1, {}, 3, [[4]]]);
