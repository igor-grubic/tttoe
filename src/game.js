export default class Game {
  constructor() {
    this.stateEmpty = 0;
    this.statePlayerOne = 1;
    this.statePlayerTwo = 2;
    this.grid = [
      [this.stateEmpty,this.stateEmpty,this.stateEmpty],
      [this.stateEmpty,this.stateEmpty,this.stateEmpty],
      [this.stateEmpty,this.stateEmpty,this.stateEmpty]
    ]
  }

  field(pos) {
    if (!this.isValidField(pos)) return undefined;
    
    return this.grid[pos[0]][pos[1]];
  }

  takeField(pos, player) {
    if(!this.isValidField(pos) || !this.isValidPlayer(player)) return;
    if(this.field(pos) != this.stateEmpty) return;

    this.grid[pos[0]][pos[1]] = player;
  }

  isOver() {
    return true;
  }

  isValidField(pos) {
    return pos[0] >= 0 && pos[0] <= 2 && pos[1] >= 0 && pos[1] <= 2;
  }

  isValidPlayer(player) {
    return player === this.statePlayerOne || player === this.statePlayerTwo;
  }
}