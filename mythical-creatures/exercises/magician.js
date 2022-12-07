class Magician {
    constructor(object) {
        this.name = `The Great ${object.name}`;
        this.assistant = object.assistant;
        this.favoriteAccessory = object.clothing || 'top hat';
        this.confidencePercentage = 10;
    };
    performIncantation(phrase) {
        return `${phrase.toUpperCase()}!`;
    };
    performTrick() {
        this.confidencePercentage += 10;
        return (this.favoriteAccessory === 'cape' ?
            'PULL DOVE FROM SLEEVE':
            `PULL RABBIT FROM ${this.favoriteAccessory.toUpperCase()}`);
    };
    performShowStopper() {
        return (this.confidencePercentage >= 110 && this.assistant === true ?
            'WOW! The magician totally just sawed that person in half!':
            `Oh no, this trick is not ready!`);  
    };
};

module.exports = Magician;