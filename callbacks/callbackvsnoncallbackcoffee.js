//Callback example using Random Api service
var fetch = require('fetch');

var students = ["Cindy", "Sabelo", "Mercy","Johannes", "Mary", "Vuyisile"];

function showWinner(randomNumber, source){
  var winner = students[randomNumber];
  console.log(`The winning ticket is (using ${source})`, winner);
}

function pickCoffeeMakerCallback(cb){
  fetch.fetchUrl(`https://www.random.org/integers/?num=1&min=0&max=${students.length - 1}&col=1&base=10&format=plain&rnd=new`, function(error, metadata, body){
    var randomNumber = Number(body.toString());
    cb(randomNumber, "Callback");
  });
}

function pickCoffeeMaker(){
  var randomNumber = Math.floor(Math.random() * students.length);
  showWinner(randomNumber, "Synchronous");
}

pickCoffeeMakerCallback(showWinner);

pickCoffeeMaker();
