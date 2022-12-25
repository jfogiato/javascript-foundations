class Gear {
    constructor(type, qty) {
        this.type = type;
        this.quantity = qty;
    }
    checkForValidity() {
        var confirmation;
        if (this.type === 'food' || this.type === 'clothes' || this.type === 'ammunition') {
            confirmation = `Great, we'll need lots of ${this.type}!`;
        } else {
            confirmation = `I don't think a ${this.type} will help us.`
            this.type = null;
        }
        return confirmation;
    }
}

module.exports = Gear;
