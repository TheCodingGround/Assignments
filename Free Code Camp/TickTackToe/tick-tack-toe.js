var currentGameState;

restartGame();

//0 is bottom left for both x and y
function makeMove(x, y, player){
  currentGameState.board[x][y] = player;

  if (hasWinner()){
    currentGameState.inProgress = false;
  }
}

function hasWinner(board){
  if (checkRowsAndColumnsForWinner(board)) return true;
  else if (checkDiagonalsForWinner(board)) return true;

  return false;
}

function checkDiagonalsForWinner(){
  var board = currentGameState.board;

  var topLeftToBottomRight = [board[0][2], board[1][1], board[2][0]];
  var bottomLeftToTopRight = [board[0][0], board[1][1], board[2][2]];

  if (isWinningCombination(topLeftToBottomRight)){
    markWinner(topLeftToBottomRight);
    return true;
  }else if (isWinningCombination(bottomLeftToTopRight)){
    markWinner(bottomLeftToTopRight);
    return true;
  }

  return false;
}

function markWinner(combinations){
  currentGameState.winner = combinations[0];
}

function isWinningCombination(row){
  return (
    row[0] != null && 
    row[0] === row[1] && 
    row[1] === row[2]
  )
}

function isWinningCombination(row){
  return (
    row[0] != null && 
    row[0] === row[1] && 
    row[1] === row[2]
  )
}

function getCurrentGameState(){
  return currentGameState;
}

function getCurrentBoard(){
  return currentGameState.board;
}

function isInProgress(){
  return currentGameState.inProgress;
}

function getWinner(){
  return currentGameState.winner;
}

function restartGame(){
  currentGameState = {
    board: [
      new Array(3).fill(null), 
      new Array(3).fill(null), 
      new Array(3).fill(null), 
    ],
    inProgress: true,
    winner: null
  };
}


function getColumn(rowNumber){
  var board = currentGameState.board;
  return board[rowNumber];
}

function getRow(columnNumber){
  var board = currentGameState.board;

  return [board[0][columnNumber],
  board[1][columnNumber],
  board[2][columnNumber]];
}

module.exports = {makeMove, getCurrentBoard, isInProgress, getWinner, restartGame};


