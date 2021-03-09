var gameGrid = document.querySelector('#gameGrid');
var box = document.querySelectorAll('.box');
var endGameStatement = document.querySelector('#statement');
var statement1 = document.querySelector('#statement1');
var statement2 = document.querySelector('#statement2');
var wins = document.querySelectorAll('.wins');
var currentGame = new Game();

window.addEventListener('load', displayWinData);
gameGrid.addEventListener('click', startGame);

function startGame () {
  if(currentGame.gameWin){
    return
  }
  var boardValue = event.target.getAttribute('id');
  if(!boardValue || preventSameBoxSelection(boardValue)){
    return alert("This move has already been made")
  } else {
    announceTurn();
    makeFirstMove(event);
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
        endGameStatement.innerText = winner;
        statement1.classList.add('hidden');
        statement2.classList.add('hidden');
      } else {
        endGameStatement.innerText = winner;
        statement1.classList.add('hidden');
        statement2.classList.add('hidden');
      }
    }
    var draw = currentGame.drawGame();
    if(draw) {
      endGameStatement.innerText = draw;
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
    return endGameStatement.innerHTML = `<img class="emoji statement-image"  src="${token}" alt="player-image">`;
  }

  function addToken(boardValue) {
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
    if(endGameStatement.innerText === "It's a draw!" || currentGame.gameWin === true){
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
