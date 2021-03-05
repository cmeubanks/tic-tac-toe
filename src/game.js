class Game {
  constructor() {
  this.id = Date.now();
  this.winningCombos = []; //figure out which boxes count as wins and add here
  // this.player1 = player1;
  // this.player2 = player2;
  this.playerTurn = playerInstance.token;
  this.currentPlaysPlayer1 = [];
  this.currentPlaysPlayer2 = [];

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
