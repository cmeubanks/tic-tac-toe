var gameGrid = document.querySelector('#gameGrid');
var box = document.querySelectorAll('.box');
var statement = document.querySelector('#statement');
var wins = document.querySelectorAll('.wins');
var statement1 = document.querySelector('#statement1');
var statement2 = document.querySelector('#statement2');
var currentGame = new Game();


gameGrid.addEventListener('click', startGame);
window.addEventListener('load', displayWinData);



function startGame () {
  if(currentGame.gameWin){
    return
  }
  var boardValue = event.target.getAttribute('id');
  if(!boardValue){
    return alert("This move has already been made")
  }
  if(currentGame.playCount === 0){
    announceTurn();
    makeFirstMove(event);
  } else if(!currentGame.playsByPlayer1.includes(boardValue) && !currentGame.playsByPlayer2.includes(boardValue) && !preventSameBoxSelection(boardValue)){
    announceTurn();
    makeFirstMove(event);
  } else {
    return
  }
}

function makeFirstMove(event) {
  var boardValue = event.target.getAttribute('id');
  if(currentGame.playCount === 0){
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
    endGame();
  }

  function endGame() {
    var winner = currentGame.checkForWin();
    if(winner) {
      if(winner === "Wanda Wins!"){
        statement.innerText = winner;
        statement1.classList.add('hidden');
        statement2.classList.add('hidden');
      } else {
        statement.innerText = winner;
        statement1.classList.add('hidden');
        statement2.classList.add('hidden');
      }
    }
    var draw = currentGame.drawGame();
    if(draw) {
      statement.innerText = draw;
      statement1.classList.add('hidden');
      statement2.classList.add('hidden');
    }
    if(currentGame.gameWin || currentGame.playCount === 9) {
    setTimeout(gameReset, 1000 * 2)
    }
  }

  function announceTurn() {
    if(currentGame.player1.turn){
      changeStatement(currentGame.player1.token);
    } else {
      changeStatement(currentGame.player2.token);
    }
  }

  function changeStatement(token) {
    return statement.innerHTML = `<img class="emoji statement-image"  src="${token}" alt="player-image">`;
  }

  function addToken(boardValue) {
    debugger
    for(var i = 0; i < box.length; i++){
      if(boardValue === box[i].id){
        if(currentGame.player1.turn){
          box[i].innerHTML = `<img class="emoji" src="./assets/scarletWitch.png" alt=${currentGame.player1.token}>`
        } else {
          box[i].innerHTML = `<img class="emoji" src="./assets/AH.png" alt=${currentGame.player1.token}>`
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
      currentGame.player1.retrieveWinsFromStorage();
      currentGame.player2.retrieveWinsFromStorage();
      wins[0].innerText = `${currentGame.player1.wins}`
      wins[1].innerText = `${currentGame.player2.wins}`
    }
