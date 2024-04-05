// Challenge 1: Grade Calculator
// This function takes a single argument, studentScore, and returns a grade based on the score.
// The score must be between 0 and 100.
function gradeCalculator(studentScore) {
    // Checks if the score is above 79; assigns grade "A" for scores 80 and above.
    if (studentScore > 79) {
        return "A";
    }
    // Checks if the score is between 60 and 79 inclusive; assigns grade "B".
    else if (studentScore >= 60 && studentScore <= 79) {
        return "B";
    }
    // Checks if the score is between 50 and 59 inclusive; assigns grade "C".
    else if (studentScore >= 50 && studentScore <= 59) {
        return "C";
    }
    // Checks if the score is between 40 and 49 inclusive; assigns grade "D".
    else if (studentScore >= 40 && studentScore <= 49) {
        return "D";
    }
    // Catches all other scores (below 40) and assigns grade "E".
    else {
        return "E";
    }
}
