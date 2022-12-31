class Planet {
    constructor(object) {
        this.name = object.name;
        this.shop = object.shop;
        this.currentShip;
        this.coordinates = object.coordinates;
    }
    landShip(ship) {
        this.currentShip = ship;
    }
    calculateDistance(planet) {
        var p1 = Object.values(this.coordinates);
        var p2 = Object.values(planet.coordinates);
        var dist = 0;
        for (var i = 0; i < p1.length; i++) {
            dist += Math.pow((p1[i] - p2[i]),2)
        }
        return Math.sqrt(dist);
    }
    refuel(ship) {
        ship.fuel = ship.fuelCapacity;
    }
    giveClearance(planet) {
        if (this.currentShip.fuel === 0) {
            return 'Clearance denied: Cannot fly without fuel';
        } else {
            this.currentShip.fuel = 0;
            planet.currentShip = this.currentShip;
            delete this.currentShip;
            return `Clearance granted: Enjoy your trip to ${planet.name}`;
        }
    }
}

module.exports = Planet;