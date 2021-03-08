class Game {
  constructor() {
  this.playCount = 0;
  this.gameWin = false;
  this.player1 = new Player(Date.now(), 'star', null)
  this.player2 = new Player(Date.now(), 'heart', null)
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
    this.player2.turn = true;
    this.player1.turn = false;
    } else {
   this.player2.turn = false;
   this.player1.turn = true;
    }
  }

  checkForWin() {
    for(var i = 0; i < this.winningCombos.length; i++) {
      if(this.winningCombos[i].every(index => this.playsByPlayer1.includes(index))){
        this.player1.wins++
        this.gameWin = true;
        statement.innerText = "Player 1 Wins!"
      } else if (this.winningCombos[i].every(index => this.playsByPlayer2.includes(index))){
        this.player2.wins++
        this.gameWin = true;
        statement.innerText = "Player 2 Wins!"
      } else if(this.playCount === 9){
         this.gameWin = false;
      }
    }
  }

  drawGame() {
    if(this.playCount === 9 && this.gameWin === false){
      statement.innerText = "It's a draw!";
    }
  }

  resetGame() {
    //add player wins to page from local storage
      this.playCount = 0;
      this.gameWin = false;
      this.player1 = new Player(Date.now(), 'heart', null);
      this.player2 = new Player(Date.now(), 'star', null);
      this.playsByPlayer1 = [];
      this.playsByPlayer2 = [];
      statement.innerText = "It's player 1's turn!";
      //saveWinsToStorage
    }
  }
