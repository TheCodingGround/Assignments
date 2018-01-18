function remove(array, element) {
  return array.filter(function(e) {
    return e !== element;
  });
}
function updateInventory(arr1, arr2) {
  arr2.forEach(function(element) {
    for (var index = 0; index < arr1.length; index++) {
      if (element[1] === arr1[index][1]) {
        element[0] += arr1[index][0];
        arr1 = remove(arr1, arr1[index]);
      }
    }
    if (arr1.indexOf(element) === -1) {
      arr1.push(element);
    }
  });
  arr1.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });

  return arr1;
}

console.log(
  updateInventory(
    [
      [0, "Bowling Ball"],
      [0, "Dirty Sock"],
      [0, "Hair Pin"],
      [0, "Microphone"]
    ],
    [
      [1, "Hair Pin"],
      [1, "Half-Eaten Apple"],
      [1, "Bowling Ball"],
      [1, "Toothpaste"]
    ]
  )
);
