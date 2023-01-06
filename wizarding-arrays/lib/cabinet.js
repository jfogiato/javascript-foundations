class Cabinet {
  constructor() {
    this.potions = [];
  }

  isEmpty() {
    return this.potions.length > 0 ? false : true;
  }

  add(thing) {
    if (thing instanceof Array) {
      for (var i = 0; i < thing.length; i++) {
        this.potions.push(thing[i])
      }
    } else {
      this.potions.push(thing);
    }
  }

  takeFirstPotion() {
    return this.potions.splice(0, 1)[0];
  }

  takePotionWithName(name) {
    for (var i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === name) {
        return this.potions.splice(i, 1)[0]
      }
    }
  }

  count(name) {
    var count = 0;
    for (var i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === name) {
        count++;
      }
    }
    return count;
  }
}

module.exports = Cabinet;