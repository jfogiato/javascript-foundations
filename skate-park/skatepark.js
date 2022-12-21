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
}

module.exports = Skatepark;