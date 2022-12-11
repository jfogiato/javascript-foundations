class Centaur {
    constructor(obj) {
        this.name = obj.name;
        this.breed = obj.type;
        this.standing = true;
        this.crankyCount = 0;
        this.cranky = false;
        this.layingDown = false;
    };
    shootBow() {
        if (this.cranky || this.layingDown) {
            return 'NO!';
        } else {
            this.crankyCount += 1;
            this.crankyCount < 3 ? this.cranky = false : this.cranky = true;
            return 'Twang!!!';
        };
    };
    run() {
        if (this.cranky || this.layingDown) {
            return 'NO!';
        } else {
            this.crankyCount += 1;
            this.crankyCount < 3 ? this.cranky = false : this.cranky = true;
            return 'Clop clop clop clop!!!';
        };
    };
    sleep() {
        if (this.layingDown && !this.standing) {
            this.cranky = false;
            return 'ZZZZ';
        } else {
            return 'NO!';
        };
    };
    layDown() {
        this.standing = false;
        this.layingDown = true;
    };
    standUp() {
        this.standing = true;
        this.layingDown = false;
    };
    drinkPotion() {
        return this.standing ? this.cranky = false : "Not while I'm laying down!";
    };
};

module.exports = Centaur;