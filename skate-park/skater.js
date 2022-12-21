class Skater {
    constructor(object) {
        this.name = object.name;
        this.skill = object.skill;
        this.tricks = object.tricks;
        this.money = object.cash;
        this.frustration = 0;
    }
    practice(trick) {
        if (this.tricks[trick]) {
            this.frustration;
        } else if (this.frustration >= 2) {
            this.tricks[trick] = true;
            this.frustration = 0;
            return `I just learned to ${trick}!!!`
        } else {
            this.frustration += 1;
        }
    }
}

module.exports = Skater;