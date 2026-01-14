class ECTS {
    constructor(score) {
        this.score = score;
    }
    ectsFromScore() {
        const map = {
            'A': [90, 100],
            'B': [82, 89],
            'C': [74, 81],
            'D': [65, 73],
            'E': [60, 64],
            'F': [0, 59]
        };

        for (const [grade, [min, max]] of Object.entries(map)) {
            if (this.score >= min && this.score <= max) {
                return grade;
            }
        }
        return 'Invalid score';

    }
}

module.exports = ECTS;