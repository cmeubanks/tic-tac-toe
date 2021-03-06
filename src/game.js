class Game {
  constructor(player1, player2) {
  this.gameStart = false;
  this.playCount = 0;
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = player1.token;
  this.playsByPlayer1 = [];
  this.playsByPlayer2 = [];
  this.winningCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
  ];
  }

  updateGameData() {
    if(this.player1.id)
    this.playsByPlayer1.push(this.player1.id);

  }

  switchTurn() {
    //modifies this.playerTurn

  }

  checkForWin() {
    //loops through this.winningCombos and compairs to current player combos
  }

  drawGame() {
    //runs through players current plays to see if they equal a certain #
    // && do not match a winning combo
  }

  resetGame() {
    //button to reset game?
  }
}
