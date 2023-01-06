class Potion {
  constructor(name, rare) {
    this.name = name;
    this.rareness = rare || 0;
  }

  isRare() {
    return this.rareness > 7 ? true : false;
  }
}

module.exports = Potion;