class Game {
  constructor(player1, player2) {
  // this.gameStart = false;
  this.playCount = 0;
  this.player1 = player1;
  this.player2 = player2;
  // this.currentPlayer = player1.token;
  this.playsByPlayer1 = [];
  this.playsByPlayer2 = [];
  this.winningCombos = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
    ["1","4","7"],
    ["2","5","8"],
    ["3","6","9"],
    ["1","5","9"],
    ["3","5","7"],
  ];
  }

  updateGameData() {
    if(this.player1.turn){
    this.playsByPlayer1.push(this.player1.selectedBox);
    }

    if(this.player2.turn){
    this.playsByPlayer2.push(this.player2.selectedBox);
    }
  }

  switchTurn() {
    if(this.player1.turn){
    // currentGame.playCount++
    this.player2.turn = true;
    this.player1.turn = false;
    //switch turn text
    } else {
    // currentGame.playCount++
   this.player2.turn = false;
   this.player1.turn = true;
   //switch turn text
    }
  }

  checkForWin() {
    for(var i = 0; i < this.winningCombos.length; i++) {
      if(this.winningCombos[i].every(index => this.playsByPlayer1.includes(index))){
        this.player1.wins++
      }
      if(this.winningCombos[i].every(index => this.playsByPlayer2.includes(index))){
        this.player2.wins++
      }
    }
  }

  drawGame() {
    //runs through players current plays to see if they equal a certain #
    // && do not match a winning combo
  }

  resetGame() {
    //button to reset game?
  }
}
