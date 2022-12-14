class LunchBox {
    constructor(obj) {
        this.owner = obj.owner;
        this.material = obj.madeOf;
        this.shape = obj.shape;
        this.color = obj.color;
        this.snacks = [];
    };
    acquireSnack(snack) {
        this.snacks.push(snack);
        snack.isInLunchBox = true;
    };
    findHealthySnacks() {
        var healthySnacks = [];
        for (var i = 0; i < this.snacks.length; i++) {
            this.snacks[i].checkForHealthy() === true ? healthySnacks.push(this.snacks[i].type) : healthySnacks;
        };
        return healthySnacks;
    };
}

module.exports = LunchBox;
