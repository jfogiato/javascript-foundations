class Settler {
    constructor(object) {
        this.name = object.name;
        this.age = object.age;
        this.nationality = object.nationality || 'unknown';
        this.status = 'healthy';
        this.ailments = [];
    }
    experienceDistress(issue) {
        if (this.status !== 'dead') {
            if (this.ailments.length > 1) {
                this.ailments.push(issue);
                this.status = 'dead';
            } else if (this.ailments.length > 0) {
                this.ailments.push(issue);
                this.status = 'poor';
            } else {
                this.ailments.push(issue);
                this.status = 'fair';        
            }
        }
    }
    heal() {
        if (this.status !== 'dead') {
            this.ailments = [];
            this.status = 'healthy';
        } else {
            return `Sorry, we can't heal a corpse. ${this.name} needs a proper burial!`;
        }
    }
}

module.exports = Settler;