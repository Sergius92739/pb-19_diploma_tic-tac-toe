// Вариант с применением счётчиков
/*
let players = ['x', 'o'];
let activePlayer = 0;
let boardSize = 4;//размер стороны игрового поля 
let board;

function startGame() {
  board = [];
  for (let i = 0; i < boardSize; i++) {
    board.push([]);
    for (let j = 0; j < boardSize; j++) {
      board[i].push('');
    }
  }
  alert('Ход игрока ' + (activePlayer + 1));
  renderBoard(board);
}

function click(row, col) {

  board[row][col] = players[activePlayer];
  renderBoard(board);

  let countRow = 0;
  let countCol = 0;
  let countToLeft = 0;
  let coutToRight = 0;

  for (i = 0; i < boardSize; i++) {
    if (board[row][i] == players[activePlayer]) {
      countRow++;
      if (countRow == boardSize) {
        showWinner(activePlayer);
      }
    }
    if (board[i][col] == players[activePlayer]) {
      countCol++;
      if (countCol == boardSize) {
        showWinner(activePlayer);
      }
    }
    if (board[i][i] == players[activePlayer]) {
      countToLeft++;
      if (countToLeft == boardSize) {
        showWinner(activePlayer);
      }
    }
    if ((board[boardSize - i - 1][i]) == players[activePlayer]) {
      coutToRight++;
      if (coutToRight == boardSize) {
        showWinner(activePlayer);
      }
    }
  }

  activePlayer = activePlayer == 0 ? 1 : 0;
}

*/