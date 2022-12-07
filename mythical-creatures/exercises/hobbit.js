class Hobbit {
    constructor(object) {
        this.name = object.name;
        this.age = 0; // 100
        this.old = false;
        this.adult = false;
        this.hasRing = false;
    };
    celebrateBirthday() {
        this.age < 32 ? this.adult = false : this.adult = true;
        this.age >= 100 ? this.old = true : this.old = false;
        return this.age += 1;
    };
    getRing() {
        if (this.name === 'Frodo') {
            this.hasRing = true;
            return "Here is the ring!";
        } else {
            return "You can't have it!";
        }
    }
};

module.exports = Hobbit;