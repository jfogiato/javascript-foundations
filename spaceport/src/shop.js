const Part = require("./part");

class Shop {
    constructor(object) {
        this.name = object.name;
        this.inventory = {};
    }
    addInventory(part) {
        if (part instanceof Part || part.type === 'food') {
            this.inventory[part.type] = part;
        }
    }
    outfitShip(ship, part) {
        if (!ship.captain) {
            return 'Cannot outfit a ship without a captain';
        } else if (ship.captain.credits < 200) {
            return `You require ${200 - ship.captain.credits} more credits to make this purchase`;
        } else {
            ship.captain.credits -= 200;
            ship.updatePart(this.inventory[part]);
            delete this.inventory[part];
            return `${part} added to ship`;
        }
    }
}

module.exports = Shop;