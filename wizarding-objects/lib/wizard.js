class Wizard {
  constructor(object) {
    this.name = object.name;
    this.pets = [];
    this.petsCount = 0;
    this.wand;
  }
  
  adoptPet(pet) {
    this.pets.push(pet);
    this.petsCount += 1;
  }

  petList() {
    var list = [];
    for (var i = 0; i < this.pets.length; i++) {
      if (this.pets[i].type[0] === "a" || this.pets[i].type[0] === "e" || this.pets[i].type[0] === "i" || this.pets[i].type[0] === "o" || this.pets[i].type[0] === "u") {
        list.push(`An ${this.pets[i].type} named ${this.pets[i].name}`)
      } else {
        list.push(`A ${this.pets[i].type} named ${this.pets[i].name}`)
      } 
    }
    return list.join('; ') + ".";
  }

  getWand(wand) {
    this.wand = wand;
  }
  castSpell(spell) {
    return this.wand.cast(spell);
  }
}

module.exports = Wizard;