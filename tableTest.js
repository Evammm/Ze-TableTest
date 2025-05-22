let board = document.getElementById("table");
let size = 10;
let totalBombs = 25;
let board1 = buildArrays();





function whap() {
board.innerHTML = `<tr>${'<td class="game-cell">cell</td>'.repeat(size)}</tr>`.repeat(size);
document.getElementById("whar").innerText = "boom";
}

function buildCells(){
    board1.forEach(function(rowArr, rowIdx) {
      rowArr.forEach(function(slot, colIdx) {
        board1[rowIdx][colIdx] = new Cell(rowIdx, colIdx, board1);
      });
    });
    addBombs();
    runCodeForAllCells(function(cell){
      cell.calcAdjBombs();
    });
  };

function addBombs() {
  var currentTotalBombs = totalBombs;
  while (currentTotalBombs !== 0) {
    var row = Math.floor(Math.random() * size);
    var col = Math.floor(Math.random() * size);
    var currentCell = board1[row][col]
    if (!currentCell.bomb){
      currentCell.bomb = true
      currentTotalBombs -= 1
    }
  }
  document.getElementById("why").innerText = "boom";
};

function buildArrays() {
    var arr = Array(size).fill(null);
    arr = arr.map(function() {
      return new Array(size).fill(null);
    });
    return arr;
  };

  function runCodeForAllCells(cb) {
    board1.forEach(function(rowArr) {
      rowArr.forEach(function(cell) {
        cb(cell);
      });
    });
  }

  function check() {
    runCodeForAllCells(function(cell) {
        if (cell.bomb = true) {
            cell.innerText = "bomb";
        }
    });
  }