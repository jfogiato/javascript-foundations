var Snowman = require('./Snowman');

class Human {
    constructor(name) {
        this.name = name;
        this.wantsToBuildASnowman = true;
        this.materials = {
            snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0
        };
    }
    gatherMaterials(item, qty) {
        this.materials[item] += qty;
    }
    buildASnowman() {
        return new Snowman({
            coal: this.materials.coal,
            carrots: this.materials.carrots,
            snowballs: this.materials.snowballs,
            buttons: this.materials.buttons
        })
    }
    placeMagicHat(snowman) {
        return snowman.canWearMagicHat() ? 'Woah, this snowman is coming to life!' : 'I guess I didn\'t build it correctly.';
    }
}

module.exports = Human;