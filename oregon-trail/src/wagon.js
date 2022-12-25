class Wagon {
    constructor(object) {
        this.title = object.name;
        this.wheels = object.wheels || [];
        this.axles = object.axles || [];
        this.oxen = object.oxen || [];
        this.yokes = object.yokes || [];
        this.food = object.food;
        this.ammunition = object.ammunition;
        this.clothes = object.clothes;
        this.settlers = object.settlers || [];
    }
    addPart(part) {
        if (part.type === 'wheel') {
            this.wheels.push(part);
        } else if (part.type === 'axle') {
            this.axles.push(part);
        } else if (part.type === 'ox') {
            this.oxen.push(part);
        } else if (part.type === 'yoke') {
            this.yokes.push(part);
        }
    }
    canTravel() {
        if (this.wheels.length >= 4 && this.axles.length >= 2 && this.oxen.length >= 2 && this.yokes.length >= 1 && this.settlers.length > 0 && this.yokes.length / this.oxen.length === .5) {
            for (var i = 0; i < this.wheels.length; i++) {
                if (this.wheels[i].broken) {
                    return false;
                } else {
                    for (var j = 0; j < this.axles.length; j++) {
                        if (this.axles[j].broken) {
                            return false;
                        } else {
                            for (var k = 0; k < this.oxen.length; k ++) {
                                if (this.oxen[k].broken) {
                                    return false;
                                } else {
                                    var livingSettlers = 0;
                                    for (var l = 0; l < this.settlers.length; l ++) {
                                        if (this.settlers[l].status !== 'dead') {
                                            livingSettlers += 1
                                        }
                                    } if (livingSettlers < 1) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            return false;
        }
    }
}

module.exports = Wagon;