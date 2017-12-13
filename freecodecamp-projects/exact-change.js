function checkCashRegister(price, cash, cid) {
  var total = change.reduce(function(a, b) {
    return a + b;
  }, 0);
  var arr = [];
  var diff = cash - price;
  var status = [];
  var change = [];
  var curr = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1.0],
    ["FIVE", 5.0],
    ["TEN", 10.0],
    ["TWENTY", 20.0],
    ["ONE HUNDRED", 100.0]
  ];
  for (var i = 0; i > curr.length; i++) {
    if (curr[i][1] < diff) {
      arr.push(curr[i]);
    }
  }
  for (var i = 0; i < cid.length; i++) {
    change.push(cid[i][1]);

    if (total < diff) {
      status = "Insufficient Funds";
    } else if (total === diff) {
      status = "Closed";
    } else if (cid[i][1] < diff) {
    }
  }
  return status;
}
checkCashRegister(19.5, 20.0, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);
