var gameGrid = document.querySelector('#gameGrid');
var box = document.querySelectorAll('.box');
var currentGame






////////// Event Listeners /////////
// gameGrid.addEventListener('click', startGame);
gameGrid.addEventListener('click', startGame);


//game defaults to player1 turn to start
function startGame () {
  var boardValue = event.target.getAttribute('id');
  if(!currentGame){
    trackGamePlay(event);
  } else if(!currentGame.playsByPlayer1.includes(boardValue) && !currentGame.playsByPlayer2.includes(boardValue)){
    trackGamePlay(event);
  }
}

function createPlayer1() {
  var player1 = new Player(Date.now(),'star', null)
  return player1
}

function createPlayer2() {
  var player2 = new Player(Date.now()-1,'heart', null)
  return player2
}

function trackGamePlay(event) {
  var boardValue = event.target.getAttribute('id');
  if(!currentGame){
    var player1 = createPlayer1();
    var player2 = createPlayer2();
    currentGame = new Game(player1, player2);
    player1.selectedBox = boardValue;
    player1.turn = true;
    addToken(boardValue);
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
    currentGame.checkForWin();
  }

  function addToken(boardValue) {
    // var boardValue = event.target.getAttribute('id');
    for(var i = 0; i < box.length; i++){
      if(boardValue === box[i].id){
      box[i].innerHTML = `<img class="emoji" src="" alt="heart">`
    }
  }
    // document.querySelector(".box").innerHTML = "❤️"
  }
