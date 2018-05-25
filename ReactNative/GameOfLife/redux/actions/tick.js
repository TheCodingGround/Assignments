import actionTypes from '../actionTypes/grid'

const cellState = {ALIVE: 'Alive', DEAD: 'Dead'}

export const tick = (grid) => {
    var newAliveCells = generateNextGeneration(grid);
    console.log('n',newAliveCells);

  return {
    type: actionTypes.SET_GRID,
    value: newAliveCells
  }
}

const generateNextGeneration  = (grid) => {
  var lowestX = getLowest(grid, 'x') - 1;
  var highestX = getHighest(grid, 'x') + 1;
  var lowestY = getLowest(grid, 'y') - 1;
  var highestY = getHighest(grid, 'y') + 1;

  const nextGeneration = [];

  for (var x = lowestX; x <= highestX; x++) {
    for (var y = lowestY; y <= highestY; y++) {
      const cell = grid.find(cell => cell.x == x && cell.y == y);
      const status = cell ? cellState.ALIVE : cellState.DEAD;

      var newStatus = cellState.DEAD;

      const count = getNeighbourCount(grid, x, y);
      console.log(cell, count);

      if (count === 3) {newStatus = cellState.ALIVE;}
      if (count == 2 && status == cellState.ALIVE) {newStatus = cellState.ALIVE;}

      const newCell = { x, y, status };
      if (newStatus == cellState.ALIVE) {
          nextGeneration.push(newCell);
      }
    }
  }
  return nextGeneration;
}

const getNeighbourCount = (grid, cellX, cellY) => {
    // const n1 = grid.find(existingCell => existingCell.x == cell.x - 1 && existingCell.y == cell.y - 1)   
    // const n2 = grid.find(existingCell => existingCell.x == cell.x - 1 && existingCell.y == cell.y)   
    // const n3 = grid.find(existingCell => existingCell.x == cell.x - 1 && existingCell.y == cell.y + 1)   
    // const n4 = grid.find(existingCell => existingCell.x == cell.x && existingCell.y == cell.y - 1)   
    // const n5 = grid.find(existingCell => existingCell.x == cell.x && existingCell.y == cell.y + 1)   
    // const n6 = grid.find(existingCell => existingCell.x == cell.x + 1 && existingCell.y == cell.y - 1)   
    // const n7 = grid.find(existingCell => existingCell.x == cell.x + 1 && existingCell.y == cell.y)   
    // const n8 = grid.find(existingCell => existingCell.x == cell.x + 1 && existingCell.y == cell.y + 1)   

    var count = 0;
    for (var x = cellX - 1; x <= cellX + 1; x++){
        for (var y = cellY - 1; y <= cellY + 1; y++){
            if (x == cellX && y == cellY) continue;
            const neighbour = grid.find(existingCell => existingCell.x == x && existingCell.y == y)
            if (neighbour) count++;
        }
    }
    return count;
}

const getLowest = (cells, coordName) => {
  return cells.reduce((acc, value) => Math.min(acc, value[coordName]), Number.MAX_SAFE_INTEGER);
}

const getHighest = (cells, coordName) => {
  return cells.reduce((acc, value) => Math.max(acc, value[coordName]), Number.MIN_SAFE_INTEGER);
}
