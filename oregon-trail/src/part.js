class Part {
    constructor(type) {
        this.type = type;
        this.broken = false;
        this.repaired = 0;
    }
    break() {
        this.broken = true;
    }
    repair() {
        if (this.repaired > 0) {
            return `This ${this.type} has seen better days, we'll need a brand new one!`
        } else {
            this.broken = false;
            this.repaired += 1;
        }
    }
}

module.exports = Part;
