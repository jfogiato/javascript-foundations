var Skier = require('./Skier');

class Lift {
    constructor(limit) {
        this.inService = true;
        this.limit = limit;
        this.skiers = [];
        this.safetyBar = 'up';
    }
    admitSkier(name, ticket) {
        if (this.skiers.length < this.limit && ticket) {
            var skier = new Skier(name, ticket);
            this.skiers.push(skier);
        } else if(!ticket) {
            return `Sorry, ${name}. You need a lift ticket!`;
        } else {
            return `Sorry, ${name}. Please wait for the next lift!`;
        };
    }
    startLift() {
        var dif = this.limit - this.skiers.length;
        if (dif === 0) {
            this.safetyBar = 'down';
        } else if (dif === 1) {
            return `We still need 1 more skier!`;
        } else {
            return `We still need ${dif} more skiers!`;
        }
    }
}

module.exports = Lift;