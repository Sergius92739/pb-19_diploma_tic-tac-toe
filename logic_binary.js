// Вариант с применением двоичной логики

let players = ['x', 'o'];
let activePlayer = 0;
let boardSize = 4;//размер стороны игрового поля 
let board;
let countMoves = 0;

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
  countMoves = 0;
}

function click(row, col) {

  board[row][col] = players[activePlayer];
  renderBoard(board);
  let countRow = true;
  let countCol = true;
  let countToLeft = true;
  let countToRight = true;

  for (i = 0; i < boardSize; i++) {
    //Проверка диагонали сверху слева вниз направо.
    countToLeft = countToLeft && (board[i][i] == players[activePlayer]);
    //Проверка диагональ снизу слева вверх направо
    countToRight = countToRight && ((board[boardSize - i - 1][i]) == players[activePlayer]);
    //Проверка вертикальных линий
    countCol = countCol && (board[i][col] == players[activePlayer]);
    // Проверка горизонтальный линий
    countRow = countRow && (board[row][i] == players[activePlayer]);
  }
  // Проверка на победителя
  if (countToLeft || countToRight || countCol || countRow) return showWinner(activePlayer);
  // Проверка на ничью
  if (board[row][col] == players[activePlayer]) {
    countMoves++;
    console.log(countMoves);
    if ((countMoves == (boardSize * boardSize)) && (!countToLeft && !countToRight && !countCol && !countRow)) return countMoves = 0, alert('Ничья');  
  }
  // Смена игрока
  activePlayer = activePlayer == 0 ? 1 : 0;
}