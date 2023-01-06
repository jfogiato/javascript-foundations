class Spell {
    constructor(name, desc) {
        this.name = name;
        this.description = desc;
        this.executionHistory = [];
    }

    execute(target) {
        var confirmations = [];
        if (target instanceof Array) {
            for (var i = 0; i < target.length; i++) {
                confirmations.push(`Success! You've cast a spell on the ${target[i]}.`);
                this.executionHistory.push(target[i]);
            }
        } else {
            this.executionHistory.push(target);
            return `Success! You've cast a spell on the ${target}.`;
        }
        return confirmations.join(' ');
    }

    clearExecutionHistory() {
        this.executionHistory = [];
    }
}

module.exports = Spell;