import {calculateWinner} from './tick-tack-toe';

const winners = {
  COMPUTER_WINNER: "COMPUTER_WINNER",
  HUMAN_WINNER: "HUMAN_WINNER",
  DRAW: "DRAW"
}

module.exports = function(board, computerSymbol){
  if (calculateWinner(board)){
    return calculateFinalScore(board, computerSymbol);
  }
}

function calculateFinalScore(board, computerSymbol){
  var winner = calculateWinner(board);

  switch (winner){
  case "draw": return 0;
  case computerSymbol: return 10;
  default: return -10;
  }
}
