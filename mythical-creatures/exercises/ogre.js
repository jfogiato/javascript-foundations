class Ogre {
    constructor(obj) {
        this.name = obj.name;
        this.home = obj.abode || 'Swamp';
        this.swings = 0;
    };
    encounter(human) {
        human.encounterCounter += 1;
        if (human.noticesOgre() === true) {
            this.swings += 1;
            human.knockedOut = true;
        } else {
            this.swings;
        };
    };
    swingAt() {
        this.swings += 1;
    };
    apologize(human) {
        human.knockedOut = false;
    };
};

module.exports = Ogre;