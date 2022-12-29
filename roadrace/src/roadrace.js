class Roadrace {
    constructor(object) {
        this.name = object.title;
        this.location = object.city;
        this.distance;
        this.participants = [];
    }
    setDistance(distance) {
        this.distance = distance;
        return `The ${this.name} in ${this.location} is a ${distance} mile race.`;
    }
    registerParticipants(runner) {
        this.participants.push(runner);
    }
    completeRace() {
        for (var i = 0; i < this.participants.length; i++) {
            this.participants[i].completedRaces.push(this.name);
            this.participants[i].runRace(this.name, this.distance);
        }

    }
}

module.exports = Roadrace;
