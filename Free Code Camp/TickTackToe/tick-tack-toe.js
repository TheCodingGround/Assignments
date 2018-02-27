var currentGameState;

restartGame();

//0 is bottom left for both x and y
function makeMove(x, y, player){
  currentGameState.board[x][y] = player;

  var board = currentGameState.board;

  var currentGameWinner = calculateWinner(board);

  if (currentGameWinner){
    currentGameState.winner = currentGameWinner;
    currentGameState.inProgress = false;
  }
}

function calculateWinner(board){
  var winnerRowsAndColumns = checkRowsAndColumnsForWinner(board);
  var winnerDiagonals = checkDiagonalsForWinner(board);

  if (winnerRowsAndColumns){
    return winnerRowsAndColumns;
  }else if (winnerDiagonals){
    return winnerDiagonals;
  }else if (isDraw(board)){
    return 'draw';//don't like returning draw here, will need to refactor to make it better
  }

  return null;
}

//this function will return true if it's a winner that's why the calling function should first check if there is a winner before calling this function
function isDraw(board){

  for (var row of board){
    for (var cell of row){
      if (!cell) return false;
    }
  }

  return true;
}

function checkRowsAndColumnsForWinner(board){
  for (var x = 0; x < 3; x++){
    var column = getRow(x, board);
    var row = getColumn(x, board);

    if (isWinningCombination(row)) {
      return row[0];
    } else if (isWinningCombination(column)) {
      return column[0];
    }
  }

  return null;
}

function checkDiagonalsForWinner(board){

  var topLeftToBottomRight = [board[0][2], board[1][1], board[2][0]];
  var bottomLeftToTopRight = [board[0][0], board[1][1], board[2][2]];

  if (isWinningCombination(topLeftToBottomRight)){
    return topLeftToBottomRight[0];
  }else if (isWinningCombination(bottomLeftToTopRight)){
    return bottomLeftToTopRight[0];
  }

  return null;
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


function getColumn(rowNumber, board){
  return board[rowNumber];
}

function getRow(columnNumber, board){

  return [board[0][columnNumber],
  board[1][columnNumber],
  board[2][columnNumber]];
}

module.exports = {makeMove, getCurrentBoard, isInProgress, getWinner, restartGame, calculateWinner};


