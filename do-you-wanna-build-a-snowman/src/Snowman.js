class Snowman {
    constructor(object) {
        this.carrots = object.carrots;
        this.coal = object.coal;
        this.buttons = object.buttons;
        this.snowballs = object.snowballs;
        this.magicHat = false;
    }
    canWearMagicHat() {
        if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
            return false;
        } else {
            this.magicHat = true;
            return true;

        }
    }
}

module.exports = Snowman;