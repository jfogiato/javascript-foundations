class VendingMachine {
    constructor(object) {
        this.id = object.id;
        this.isBroken = object.isBroken;
        this.snacks = [];
    }

    addSnacks(snack) {
        if (!this.snacks.some(e => e.name === snack.name)) {
            this.snacks.push(snack);
        } else {
            return 'Sorry, that snack is already stocked! Try adding a different snack.';
        }
    }

    purchaseSnack(item, payment) {
        for (var i = 0; i < this.snacks.length; i++) {
            var currentSnack = this.snacks[i];
            if (item === currentSnack.name && currentSnack.itemsInStock === 0) {
                return 'Sorry, no items in stock. Try another item.';
            } else if (item === currentSnack.name && payment < currentSnack.price) {
                return 'Sorry, not enough payment. Please add more money.';
            } else if (item === currentSnack.name && currentSnack.itemsInStock > 0) {
                currentSnack.itemsInStock--;
                return `Success! Here is $${payment - currentSnack.price} back!`;
            }
        }
    }
}

module.exports = VendingMachine;
