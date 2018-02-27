module.exports = function(board, computerSymbol){
  if (checkForWinner(board)){
    return calculateFinalScore(board, computerSymbol);
  }
}


function calculateFinalScore(board, computerSymbol){
  var winner = getWinner(board);
}
