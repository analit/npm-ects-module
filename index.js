class ECTS {
    constructor(score) {
        this.score = score;
    }
    ectsFromScore() {
        const map = {
            'A': [90, 100],
            'B': [80, 89],
            'C': [70, 79],
            'D': [60, 69],
            'E': [50, 59],
            'F': [0, 49]
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