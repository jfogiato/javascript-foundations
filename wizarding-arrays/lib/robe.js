class Robe {
  constructor() {
    this.pockets = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ];
  }

  addToPocket(thing) {
    for (var i = 0; i < this.pockets.length; i++) {
      if (this.pockets[i].length === 0) {
        this.pockets[i].push(thing);
        return;
      }
    }
  }

  retrieve(thing) {
    for (var i = 0; i < this.pockets.length; i++) {
      if (this.pockets[i][0] === thing) {
        return this.pockets[i].splice(0, 1);
      }
    }
  }

  emptyAllPockets() {
    for (var i = 0; i < this.pockets.length; i++) {
      this.pockets[i] = [];
    }
  }
}

module.exports = Robe;