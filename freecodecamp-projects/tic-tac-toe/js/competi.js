let = player = [];
let = artificial = [];
var computerMarker = "";
var compute = [];
var arr = [];
var ids = ["boxone1", "boxone2", "boxone3", "boxone4", "boxone5", "boxone6", "boxone7", "boxone8", "boxone9",]
var marker = "";
var position = "";
var marker = "";

function selectCharacter(mark) {
  marker = document.getElementById().innerHTML = mark;
position = document.getElementById(playerMarker).innerHTML;
player.push(playerMarker);
console.log(playerMarker);
compute.push(playerMarker);
document.getElementById(playerMarker).innerHTML = marker;
position = "";
machine();
}


function machine() {
var RandomNumber = Math.floor(Math.random() * 8);
if (compute.indexOf(ids[RandomNumber]) === -1) {
console.log(computerMarker);
document.getElementById(`${ids[RandomNumber]}`).innerHTML = computerMarker;
artificial.push(ids[RandomNumber]);
compute.push(ids[RandomNumber]);

} else {
machine();
}
checksWin();
}
function checksWin() {
var lines = [
["boxone1", "boxone2", "boxone3"],
["boxone4", "boxone5", "boxone6"],
["boxone7", "boxone8", "boxone9"],
["boxone1", "boxone4", "boxone5"],
["boxone2", "boxone5", "boxone8"],
["boxone3", "boxone6", "boxone9"],
["boxone1", "boxone5", "boxone9"],
["boxone3", "boxone5", "boxone7"],
];   
if(comopute.length ===6){
    console.log("this is working");
    console.log(compute);
location.reload(); 
}       
}
