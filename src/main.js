var gameGrid = document.querySelector('#gameGrid');
var currentGame






////////// Event Listeners /////////
gameGrid.addEventListener('click', trackGamePlay);



//game defaults to player1 turn to start
function startGame () {
  // createPlayer1();
  // createPlayer2();
  trackGamePlay();
}

function createPlayer1() {
  var player1 = new Player(Date.now(),'star', null)
  return player1
}

function createPlayer2() {
  var player2 = new Player(Date.now(),'heart', null)
  return player2
}

// function startNewGame() {
//
// }

function trackGamePlay(event) {
  var boardValue = event.target.getAttribute('id');
  if(!currentGame){
    var player1 = createPlayer1();
    var player2 = createPlayer2();
    currentGame = new Game(player1, player2);
    currentGame.gameStart = true;
    player1.turn = boardValue;
    console.log("I shouldn't come up twice", currentGame);
  }
  }
  //star will later be used in an .innerHTML conditional
