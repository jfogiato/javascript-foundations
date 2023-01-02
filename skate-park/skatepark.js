class Skatepark {
    constructor(object) {
        this.name = object.name;
        this.yearFounded = object.year;
        this.style = object.type;
        this.features = object.features;
        this.isPrivate = object.isPrivate || false;
        this.cost = object.price || 0;
        this.occupants = [];
    }
    admit(skater) {
        if (this.occupants.length < 3) {
            if (this.isPrivate) {
                if (skater.money < this.cost) {
                    return 'Sorry, you don\'t have enough money.';
                }
                skater.money -= this.cost;
                this.occupants.push(skater);
                return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
            } else {
                this.occupants.push(skater);
                return `Welcome to the free ${this.name} Skatepark!`;
            }
        } else {
            return 'Sorry, we are at max capacity. Thank you for understanding.';
        }
    }    
}

module.exports = Skatepark;