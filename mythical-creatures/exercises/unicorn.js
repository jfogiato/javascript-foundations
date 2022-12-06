class Unicorn {
  constructor(name, color) {
    this.name = name;
    color === undefined ? this.color = 'white' : this.color = color;
  }
  isWhite() {
    return this.color === 'white' ? true : false;
  }
  says(phrase) {
    return `**;* ${phrase} *;**`
  }
}
module.exports = Unicorn;
