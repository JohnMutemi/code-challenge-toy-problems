//Challenge 1

//define a function that prompts the user to input student marks between 0 and 100
function gradeCalculator(studentScore){
    // provide a conditional statement that checks the students grade and returns the grade appropriately
    //The first if statement checks for a score above 79 and returns "A".
    if (studentScore>79){
        return "A";
    }
    //condition for scores between 60 and 79 returns "B".
   else if (studentScore>= 60 && studentScore <= 79) {
    return "B";

}   //condition for scores between 50 and 59 returns "C".
    else if (studentScore >= 50 && studentScore <= 59) {
    return "C";
    //condition for scores between 40 and 49 returns "D".
}   else if (studentScore >= 40 && studentScore <= 49) {
    return "D";
    //The else statement returns "E" for any scores below 40
}   else {
    return "E";
}
}
// call the function gradeCalculator
gradeCalculator();

//Challenge 2

//A program that takes the input speed of a car, and returns the demerit points accordingly
//define a function that declares a const speed limit and the default demerit points.
function determineDemeritPoints(UsersSpeedInput) {
    const speedLimit = 70;
    let demeritPoints = 0;
// provide a conditional statement that sets the speed limit and returns "OK", if the speed is input is 70.
    if (UsersSpeedInput <= speedLimit) {
        return"Ok";
    }
// add another conditional statement that checks the users speed input, calculates the demerit points and rounds down the calculated demerit points to the nearest integer.
     
    else if (UsersSpeedInput > speedLimit) {
         demeritPoints = Math.floor((UsersSpeedInput- speedLimit) / 5);
         return "Points:", demeritPoints;
      }
// include an if statement that checks the demerits points calculation and the points exceed 12, it logs "License suspended".
    if (demeritPoints > 12) {
        return "License suspended";
    }
}
// invoke the function 
determineDemeritPoints(UsersSpeedInput);
