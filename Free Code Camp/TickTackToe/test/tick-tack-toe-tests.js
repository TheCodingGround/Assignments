var tickTacToe = require('../tick-tack-toe');
var expect = require('chai').expect;

const playerOne = "O";
const playerTwo = "X";

describe('Tic Tac Toe', function(){
  it("we can make a move", function () {
    tickTacToe.restartGame();

    tickTacToe.makeMove(0, 1, playerOne);

    var currentBoard = tickTacToe.getCurrentBoard();

    expect(currentBoard[0][1]).to.be.eql(playerOne);
  });

  it("Two players can each make a move", function(){
    tickTacToe.restartGame();
    tickTacToe.makeMove(0,0, playerOne);
    tickTacToe.makeMove(1,1, playerTwo);

    var currentBoard = tickTacToe.getCurrentBoard();

    expect(currentBoard[0][0]).to.be.eql(playerOne);
    expect(currentBoard[1][1]).to.be.eql(playerTwo);
  });

  it("can tell us whether the game is still in progress", function(){
    tickTacToe.restartGame();

    var currentState = tickTacToe.isInProgress();

    expect(currentState).to.be.eql(true);
  });


  it("Will tell us the winner if the game has been won if the winner selects the first vertical row", function(){
    tickTacToe.restartGame();
    /*
     0,2|1,2|2,2
     ___________
     0,1|1,1|2,1
     ___________
     0,0|1,0|2,0
     */

    tickTacToe.makeMove(0,0, playerOne);
    tickTacToe.makeMove(1,1, playerTwo);

    tickTacToe.makeMove(0,1, playerOne);
    tickTacToe.makeMove(1,0, playerTwo);

    tickTacToe.makeMove(0,2, playerOne);

    var currentBoard = tickTacToe.getCurrentBoard();

    var currentState = tickTacToe.isInProgress();
    var winner = tickTacToe.getWinner();

    expect(currentState).to.be.eql(false);
    expect(winner).to.eql(playerOne);
  });

  it("Will tell us the winner if the game has been won if the winner selects the second vertical row", function(){
    tickTacToe.restartGame();
    /*
     0,2|1,2|2,2
     ___________
     0,1|1,1|2,1
     ___________
     0,0|1,0|2,0
     */

    tickTacToe.makeMove(1,0, playerOne);
    tickTacToe.makeMove(2,1, playerTwo);

    tickTacToe.makeMove(1,1, playerOne);
    tickTacToe.makeMove(1,2, playerTwo);

    tickTacToe.makeMove(1,2, playerOne);

    var currentBoard = tickTacToe.getCurrentBoard();

    var currentState = tickTacToe.isInProgress();
    var winner = tickTacToe.getWinner();

    expect(currentState).to.be.eql(false);
    expect(winner).to.eql(playerOne);
  });

  it("Will tell us the winner if the game has been won if the winner selects the third vertical row", function(){
    tickTacToe.restartGame();
    /*
     0,2|1,2|2,2
     ___________
     0,1|1,1|2,1
     ___________
     0,0|1,0|2,0
     */

    tickTacToe.makeMove(2,0, playerOne);
    tickTacToe.makeMove(2,1, playerTwo);

    tickTacToe.makeMove(2,1, playerOne);
    tickTacToe.makeMove(1,2, playerTwo);

    tickTacToe.makeMove(2,2, playerOne);

    var currentBoard = tickTacToe.getCurrentBoard();

    var currentState = tickTacToe.isInProgress();
    var winner = tickTacToe.getWinner();

    expect(currentState).to.be.eql(false);
    expect(winner).to.eql(playerOne);
  });

  it("Will tell us the winner if the game has been won if the winner makes a horizontal selection", function(){
    tickTacToe.restartGame();

    /*
     0,2|1,2|2,2
     ___________
     0,1|1,1|2,1
     ___________
     0,0|1,0|2,0
     */

    tickTacToe.makeMove(0,0, playerOne);
    tickTacToe.makeMove(1,1, playerTwo);

    tickTacToe.makeMove(1,0, playerOne);
    tickTacToe.makeMove(1,2, playerTwo);

    tickTacToe.makeMove(2,0, playerOne);

    var currentBoard = tickTacToe.getCurrentBoard();

    var currentState = tickTacToe.isInProgress();
    var winner = tickTacToe.getWinner();

    expect(currentState).to.be.eql(false);
    expect(winner).to.eql(playerOne);

  });

  it("Will tell us the winner if the game has been won if the winner makes a diagonal from top left to bottom right selection", function(){
    tickTacToe.restartGame();

    /*
     0,2|1,2|2,2
     ___________
     0,1|1,1|2,1
     ___________
     0,0|1,0|2,0
     */

    tickTacToe.makeMove(0,2, playerOne);
    tickTacToe.makeMove(0,1, playerTwo);

    tickTacToe.makeMove(1,1, playerOne);
    tickTacToe.makeMove(1,0, playerTwo);

    tickTacToe.makeMove(2,0, playerOne);

    var currentBoard = tickTacToe.getCurrentBoard();

    var currentState = tickTacToe.isInProgress();
    var winner = tickTacToe.getWinner();

    expect(currentState).to.be.eql(false);
    expect(winner).to.eql(playerOne);
  });

  it("Will tell us the winner if the game has been won if the winner makes a diagonal from bottom left to top right selection", function(){
    tickTacToe.restartGame();

    /*
     0,2|1,2|2,2
     ___________
     0,1|1,1|2,1
     ___________
     0,0|1,0|2,0
     */

    tickTacToe.makeMove(0,0, playerOne);
    tickTacToe.makeMove(0,1, playerTwo);

    tickTacToe.makeMove(1,1, playerOne);
    tickTacToe.makeMove(1,0, playerTwo);

    tickTacToe.makeMove(2,2, playerOne);

    var currentBoard = tickTacToe.getCurrentBoard();

    var currentState = tickTacToe.isInProgress();
    var winner = tickTacToe.getWinner();

    expect(currentState).to.be.eql(false);
    expect(winner).to.eql(playerOne);
  });
});
