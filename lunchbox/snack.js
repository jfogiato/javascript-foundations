class Snack {
    constructor(type) {
        this.deliciousLevel = 'extra';
        this.type = type;
        this.amount = 100;
        this.isInLunchBox = false;
        this.cuttingItClose = false;
    };
    getEaten() {
        this.amount -= 10;
        this.amount <= 20 ? this.cuttingItClose = true : this.cuttingItClose;
    };
    checkForHealthy() {
        return this.type.toLowerCase().includes('fruit') ? true : false;
    };
}

module.exports = Snack;
