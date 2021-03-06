var gameGrid = document.querySelector('#gameGrid');






////////// Event Listeners /////////
gameGrid.addEventListener('click', startGame);



//game defaults to player1 turn to start
function startGame () {
  trackGamePlay(event);
}

function trackGamePlay(event) {
  var id = event.target.getAttribute('id');
  var player1 = new Player(id, 'star', true)
  var player2 = new Player(null, 'heart', false)
  //star will later be used in an .innerHTML conditional
  var game = new Game(player1, player2)
  game.updateGameData();
  console.log(game);
}
