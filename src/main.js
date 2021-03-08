var gameGrid = document.querySelector('#gameGrid');
var box = document.querySelectorAll('.box');
var statement = document.querySelector('#statement');
var wins = document.querySelectorAll('.wins');
var currentGame = new Game();






////////// Event Listeners /////////
gameGrid.addEventListener('click', startGame);
window.addEventListener('load', displayWinData);


//game defaults to player1 turn to start
function startGame () {
  var boardValue = event.target.getAttribute('id');
  if(!boardValue){
    return alert("This move has already been made")
  }
  if(currentGame.playCount === 0){
    makeFirstMove(event);
  } else if(!currentGame.playsByPlayer1.includes(boardValue) && !currentGame.playsByPlayer2.includes(boardValue) && !preventSameBoxSelection(boardValue)){
    makeFirstMove(event);
  } else {
    return
  }
}

function makeFirstMove(event) {
  var boardValue = event.target.getAttribute('id');
  if(currentGame.playCount === 0){
    // currentGame = new Game();
    currentGame.player1.selectedBox = boardValue;
    currentGame.player1.turn = true;
    addToken(boardValue);
    currentGame.updateGameData();
    console.log("first move", currentGame)

    }
    makeAllOtherMoves();
  }

  function makeAllOtherMoves() {

    var boardValue = event.target.getAttribute('id');
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
    if(currentGame.gameWin || currentGame.playCount === 9)
    // currentGame.drawGame();
    setTimeout(gameReset, 1000 * 2)

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
      currentGame.resetGame();
      for(var i = 0; i < box.length; i++){
        box[i].innerHTML = '';
        }
      }
    }

    function displayWinData() {
      // var storedWins = Object.keys(localStorage)
      // if(storedWins > 0){
      // debugger
      currentGame.player1.retrieveWinsFromStorage();
      currentGame.player2.retrieveWinsFromStorage();
      wins[0].innerText = `${currentGame.player1.wins}`
      wins[1].innerText = `${currentGame.player2.wins}`
      // }
    }
