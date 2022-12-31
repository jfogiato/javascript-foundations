const Part = require("./part");
const Being = require("./being");


class Ship {
    constructor(object) {
        this.name = object.name;
        this.type = object.type;
        this.maxCrew = object.maxCrew;
        this.odometer = object.odometer || 0;
        this.fuelCapacity = object.fuelCapacity || 10;
        this.fuel = 0;
        this.captain = object.captain;
        this.crew = [];
        this.cargo = [];
        this.parts = object.parts || {};
        this.readyToFly;
    }
    addCrew(crew) {
        for (var i = 0; i < crew.length; i++) {
            if (this.crew.length < this.maxCrew && crew[i] instanceof Being) {
                this.crew.push(crew[i]);
            }
        }
    }
    loadCargo(part) {
        if (part instanceof Part) {
            this.cargo.push(part);
        }
    }
    updatePart(part) {
        if (this.parts[part.type]) {
            var partValue = this.parts[part.type].value;
            this.parts[part.type] = part;
            var newPartValue = part.value;
            var diff = partValue - newPartValue;
            return diff;
        } else {
            this.parts[part.type] = part
        }
    }
    checkReadiness() {
        if (!this.captain) {
            this.readyToFly = false;
            return 'Cannot fly without a captain';
        } else if (this.fuel < 1) {
            this.readyToFly = false;
            return 'Cannot fly without fuel'
        } else if (Object.keys(this.parts).length === 0) {
            this.readyToFly = false;
            return 'Cannot fly without parts'
        } else {
            this.readyToFly = true;
            return 'Good to go!'
        }
    }
}

module.exports = Ship;