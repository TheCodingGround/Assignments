var tickTacToe = require('../tick-tack-toe');
var expect = require('chai').expect;

var minMaxAi = require('../min-max-ai');

const playerOne = "O";
const playerTwo = "X";

describe('Tic Tac Toe', function(){
  it("The computer can make a move", function () {
    tickTacToe.restartGame();

    tickTacToe.makeMove(0, 0, playerOne);

    var currentBoard = tickTacToe.getCurrentBoard();
    var aiMove = minMaxAi(currentBoard, playerTwo);

    expect(aiMove.x).to.eql(0);
    expect(aiMove.y).to.eql(1);
  });
});
