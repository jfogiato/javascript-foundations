const Direwolf = require("./direwolf");

class Stark {
    constructor(obj) {
        this.name = obj.name;
        this.location = obj.area || 'Winterfell';
        this.safe = false;
    };
    sayHouseWords() {
        return this.safe ? 'The North Remembers' : 'Winter is Coming';
    };
    callDirewolf(name, home) {
        var direwolf = new Direwolf(name, this.location);
        direwolf.starksToProtect.push(this);
        this.safe = true;
        return direwolf;
    };
};

module.exports = Stark;