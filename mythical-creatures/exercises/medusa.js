var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
    };
    gazeAtVictim(victim) {
        var newStatue = new Statue(victim.name);
        if (this.statues.length < 3) {
            this.statues.push(newStatue);
        } else {
            var backToHum = new Person(this.statues[0].name, 'relieved');
            this.statues.splice(0,1);
            this.statues.push(newStatue);
            return backToHum;
        };
    };
};

module.exports = Medusa;
