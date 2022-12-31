class Part {
    constructor(object) {
        this.name = object.name;
        this.type = object.type;
        this.value = object.value;
        this.broken = false;
        if (this.name && this.type && this.value) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }
    checkForValidity() {
        if (!this.name) {
            return 'This part needs a name!';
        } else if (!this.type) {
            return 'This part needs a type!';
        } else if (!this.value) {
            return 'This part needs a value!';
        };
    }
}

module.exports = Part;