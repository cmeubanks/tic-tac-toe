class Player {
  constructor(id, token, value) {
    this.id = id;
    this.token = token;
    this.selectedBox = value;
    this.turn = false;
    this.wins = 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.id}`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
   this.wins = JSON.parse(localStorage.getItem(`${this.id}`));
  }

}
