class Ingredient {
    constructor(object) {
        this.name = object.name;
        this.amount = object.amount;
    }
    changeAmount(amt) {
        this.amount = amt;
    }
}

module.exports = Ingredient;
