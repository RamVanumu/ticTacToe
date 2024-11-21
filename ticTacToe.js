let board = ['', '', '', '', '', '', '', '', ''];

let currentPlayer = 'X';

function printBoard() {
    console.log('\n');
    console.log(board[0], '|', board[1], '|', board[2]);
    console.log('---------');
    console.log(board[3], '|', board[4], '|', board[5]);
    console.log('---------');
    console.log(board[6], '|', board[7], '|', board[8]);
    console.log('\n');
}

function hasRowsMatched(player) {
  if (board[0] === player && board[1] === player && board[2] === player) {
    return true;
  }
  if (board[3] === player && board[4] === player && board[5] === player) {
    return true;
  }
  return board[6] === player && board[7] === player && board[8] === player;
}

function hasColumnsMatched(player) {
  if (board[0] === player && board[3] === player && board[6] === player) {
    return true;
  }
  if (board[1] === player && board[4] === player && board[7] === player) {
    return true;
  }
  return board[2] === player && board[5] === player && board[8] === player;
}

function hasDiagonalsMatched(player) {
  if (board[0] === player && board[4] === player && board[8] === player) {
    return true;
  }
  if (board[2] === player && board[4] === player && board[6] === player) {
    return true;
  }
}

function isWinner(player) {
  if(hasRowsMatched(player)) {
    return true;
  }
  
  if(hasColumnsMatched(player)) {
    return true;
  }
  
  return hasDiagonalsMatched(player);
}


function isBoardFull() {
  for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
          return false;
      }
  }
  return true;
}

function playerMove() {
  let validMove = false;
  while (!validMove) {
      let cell = prompt('Player ' + currentPlayer + ', enter a number (0-8):');

      if (cell >= 0 && cell <= 8 && board[cell] === '') {
          board[cell] = currentPlayer;
          validMove = true;
      } else {
          alert('Invalid move! Choose an empty cell number between 1 and 9.');
      }
  }
}

function switchPlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

function playGame() {
    let gameOver = false;

    while (!gameOver) {
        printBoard();
        playerMove();

        if (isWinner(currentPlayer)) {
            printBoard();
            console.log('Player ',currentPlayer, ' wins! 🎉');
            gameOver = true;
        } else if (isBoardFull()) {
            printBoard();
            console.log("It's a draw! 🤝");
            gameOver = true;
        } else {
            switchPlayer();
        }
    }

    if (confirm('Do you want to play again?')) {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        playGame();
    } else {
        console.log('Thanks for playing!');
    }
}

playGame();
