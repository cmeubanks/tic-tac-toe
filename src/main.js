var gameGrid = document.querySelector('#gameGrid');
var box = document.querySelectorAll('.box');
var statement = document.querySelector('#statement');
var currentGame






////////// Event Listeners /////////
// gameGrid.addEventListener('click', startGame);
gameGrid.addEventListener('click', startGame);


//game defaults to player1 turn to start
function startGame () {
  debugger
  var boardValue = event.target.getAttribute('id');
  if(!boardValue){
    return alert("This move has already been made")
  }
  if(!currentGame || currentGame.playCount === 0){
    trackGamePlay(event);
  } else if(!currentGame.playsByPlayer1.includes(boardValue) && !currentGame.playsByPlayer2.includes(boardValue) && !preventSameBoxSelection(boardValue)){
    trackGamePlay(event);
  } else {
    return
  }
}

// function createPlayer1() {
//   var player1 = new Player(Date.now(),'star', null)
//   return player1
// }
//
// function createPlayer2() {
//   var player2 = new Player(Date.now()-1,'heart', null)
//   return player2
// }

function trackGamePlay(event) {
  var boardValue = event.target.getAttribute('id');
  if(!currentGame || currentGame.playCount === 0){
    // var player1 = createPlayer1();
    // var player2 = createPlayer2();
    currentGame = new Game();
    currentGame.player1.selectedBox = boardValue;
    currentGame.player1.turn = true;
    addToken(boardValue);
    currentGame.updateGameData();
    console.log("first move", currentGame)

    }
    secondPlay();
  }

  function secondPlay() {
    var boardValue = event.target.getAttribute('id');
    // if(preventSameBoxSelection(boardValue)){
    //   return
    // }
    currentGame.playCount++
    if(currentGame.playCount > 1){
      currentGame.switchTurn();
      if(!currentGame.player1.turn){
      currentGame.player2.selectedBox = boardValue;
      addToken(boardValue);
      currentGame.updateGameData();
      console.log("next move", currentGame)
      } else {
      currentGame.player1.selectedBox = boardValue;
      addToken(boardValue);
      currentGame.updateGameData();
      console.log("next move", currentGame)
    }
    }
    currentGame.checkForWin();
    currentGame.drawGame();
    setTimeout(gameReset, 1000 * 3)

  }

  function addToken(boardValue) {
    for(var i = 0; i < box.length; i++){
      if(boardValue === box[i].id){
        if(currentGame.player1.turn){
          box[i].innerHTML = `<img class="emoji" src="" alt="star">`
        } else {
          box[i].innerHTML = `<img class="emoji" src="" alt="heart">`
        }
      }
    }
  }

  function preventSameBoxSelection(boardValue){
    var p1 = currentGame.playsByPlayer1;
    var p2 = currentGame.playsByPlayer2;
    var allMovesArray = p1.concat(p2)
    if(allMovesArray.includes(boardValue)){
        return true;
      }
  }

  function gameReset() {
    if(statement.innerText === "It's a draw!" || currentGame.gameWin === true){
      //add to local storage here or in resetGame
      currentGame.resetGame();
      for(var i = 0; i < box.length; i++){
        box[i].innerHTML = '';
        }
      }
    }
