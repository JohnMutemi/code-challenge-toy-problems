// Challenge 2: Speed to Demerit Points Converter
// This function calculates demerit points for driving over a speed limit of 70.
// It accepts UsersSpeedInput as an argument and returns either "Ok" for speeds within the limit or the demerit points and potential license suspension for exceeding the limit.
function determineDemeritPoints(UsersSpeedInput) {
    const speedLimit = 70; // The speed limit for the calculation.
    let demeritPoints = 0; // Initializes demerit points.
    
    // If speed is within or equal to the limit, returns "Ok".
    if (UsersSpeedInput <= speedLimit) {
        return "Ok";
    }
    // Calculates demerit points for speeds over the limit. 1 point for every 5mph over.
    else if (UsersSpeedInput > speedLimit) {
        demeritPoints = Math.floor((UsersSpeedInput - speedLimit) / 5);
        return "Points: " + demeritPoints; // Returns the calculated demerit points.
    }
    // Checks if demerit points exceed 12, indicating license suspension.
    if (demeritPoints > 12) {
        return "License suspended";
    }
}
