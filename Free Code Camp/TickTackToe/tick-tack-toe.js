var currentGameState;

restartGame();

//0 is bottom left for both x and y
function makeMove(x, y, player){
  currentGameState.board[x][y] = player;

  if (hasWinner()){
    console.log('winner');
    currentGameState.inProgress = false;
  }
}
function hasWinner(){
  var board = currentGameState.board;

  for (var x = 0; x < 3; x++){
    if (blah(board[x])) return true;
  }

  for (var y = 0; y < 3; y++){
    var row = [board[y][0],
               board[y][1],
               board[y][2]];
    console.log(`row = ${y}`, row);
    if (blah(row)) return true;
  }

  return false;
}

function blah(row){
    for (var y = 0; y < 3; y++){
      var value = row[y];
      if (!value) break;

      if (row[y] != value) break;
      if (y == 2) {
        console.log('winner found');
        currentGameState.winner = row[y];
        return true;
      }
    }
  return false;
}


//0,0 0,1 0,2 | 1,0 1,1 1,2 | 2,0 2,1 22

function hasWinnerOld(){
  var board = currentGameState.board;

  if (board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0]) {
    currentGameState.winner = board[0][0];
    return true;
  }
  else if (board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1]) {
    currentGameState.winner = board[0][1];
    return true;
  }
  else if (board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2]){
    currentGameState.winner = board[0][2];
    return true;
  }
  else if (board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0]) {
    currentGameState.winner = board[0][0];
    return true;
  }
  else if (board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][0]) {
  currentGameState.winner = board[1][0];
  return true;
}
  else if (board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0]){
    currentGameState.winner = board[2][0];
    return true;
  }
else if (board[2][0] == board[1][1] && board[2][0] == board[0][2] && board[2][0]){
  currentGameState.winner = board[2][0];
  return true;
}
  return false;

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
    board: [new Array(3), new Array(3), new Array(3)],
    inProgress: true,
    winner: null
  };
}

module.exports = {makeMove, getCurrentBoard, isInProgress, getWinner, restartGame};
