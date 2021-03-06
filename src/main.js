var gameGrid = document.querySelector('#gameGrid');
var currentGame






////////// Event Listeners /////////
gameGrid.addEventListener('click', trackGamePlay);



//game defaults to player1 turn to start
function startGame () {
  trackGamePlay(event);
  // if(currentGame.gameStart){
  //   secondPlay()
  // }
}

function createPlayer1() {
  var player1 = new Player(Date.now(),'star', null)
  return player1
}

function createPlayer2() {
  var player2 = new Player(Date.now()-1,'heart', null)
  return player2
}

// function startNewGame() {
//
// }

function trackGamePlay(event) {
  var boardValue = event.target.getAttribute('id');
  var player1
  var player2
  if(!currentGame){
    player1 = createPlayer1();
    player2 = createPlayer2();
    currentGame = new Game(player1, player2);
    player1.selectedBox = boardValue;
    player1.turn = true;
    currentGame.updateGameData();
    console.log("first move", currentGame)

    }
    secondPlay();
  }

  function secondPlay() {
    var boardValue = event.target.getAttribute('id');
    currentGame.playCount++
    if(currentGame.playCount > 1){
      currentGame.switchTurn();
      //change who's turn it is text
      if(!currentGame.player1.turn){
      currentGame.player2.selectedBox = boardValue;
      currentGame.updateGameData();
      console.log("next move", currentGame)
    } else {
      currentGame.player1.selectedBox = boardValue;
      currentGame.updateGameData();
      console.log("next move", currentGame)
    }
    }
  }
  //star will later be used in an .innerHTML conditional
