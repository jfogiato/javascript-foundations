class Fairy {
    constructor(name) {
        this.name = name;
        this.dust = 10;
        this.clothes = {
            dresses: ['Iris']
        };
        this.humanWards = [];
        this.disposition = 'Good natured';
    };
    receiveBelief() {
        this.dust += 1;
    };
    believe() {
        this.dust += 10;
    };
    makeDresses(dressArray) {
        for (var i = 0; i < dressArray.length; i++) {
            this.clothes.dresses.push(dressArray[i]);
        };
    };
    becomeProvoked() {
        this.disposition = 'Vengeful';
    };
    replaceInfant(infant) {
        if (this.disposition === 'Vengeful') {
            infant.disposition = 'Malicious';
            this.humanWards.push(infant);
            this.humanWards.length >= 3 ? this.disposition = 'Good natured' : 'Vengeful';
            return infant;          
        } else {
            return infant;
        };
    };
};

module.exports = Fairy;