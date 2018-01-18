function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var n = 3.14159265359;
  var earthRadius = 6367.4447;
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    var altitude = arr[i].avgAlt;
    var total = earthRadius + altitude;
    var cube = Math.pow(total, 3);
    var all = 2 * n * Math.sqrt(cube / GM);
    var ars = Math.round(all);
    results.push({ name: arr[i].name, orbitalPeriod: ars });
  }
  return results;
}

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
  ])
);
