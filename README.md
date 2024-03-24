
# Challenge 1: Student Grade Generatore
# Description
The Student Grade Generator program prompts users to input student marks within the range of 0 to 100. Based on the input, it determines and outputs the corresponding grade according to the following criteria:
- A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40.

# Set Up instructions

* Create a directory to store the code for the code challenge exercise.
* create README.md, index.js files.
* create a function studentGradeGenerator that takes in one parameter.
* The function should return a conditional if, else if, and else statement that passes the student marks as the argument and logs the Grade based on the given condition.
* In the conditional statement, if marks>=79 &&marks <=100, return "A", else if marks>=60 &&marks<=79 return "B", else if marks>=49 && marks <=59 return "C", else if marks >=40 && marks<=49 return "D", else return "E".
* initialize the repository as a Git repo using $git init.
* git add README.md
* git add index.js
* make the first commit
* create a new Github Remote Repo
* Add the new remote to the local repository using git remoted add origin git@gitgub...URL and git branch-M main.
* Then git push -u origin main

# Challenge 2: Speed Detector
# Description
The Speed Detector program takes the speed of a car as input, such as 80 km/h. If the speed matches the speed limit of 70 km/h, it prints "Ok". However, if the speed exceeds the limit, it assigns demerit points to the driver and if the points exceed 12, it logs "License suspended".

# Set Up instructions

* Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
* The program should define a function that declares a const speed limit and the default demerit points.
* The program should provide a conditional statement that sets the speed limit and returns "OK", if the speed is input is 70.
* Also, the program adds another conditional statement that checks the users speed input, calculates the demerit points and rounds down the calculated demerit points to the nearest integer.
* For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
* Lastly the program provides a conditional statement that checks the demerits points calculation and if the points exceed 12, it logs "License suspended".
* git add .
* make the second commit
* git push origin main

# Challenge 3:Net Salary Calculator

# Description

The Net Salary Calculator is designed to compute an individual's net salary based on the input of their basic salary and benefits. It further calculates deductions such as payee (tax), NHIF, and NSSF contributions, along with gross salary.

# Set Up instructions

* Implement a function named calculateNetSalary which accepts input parameters for basic salary and benefits.
* The function should utilize the provided KRA tax rates, NHIF, and NSSF rates for accurate computation.
* Calculate payee (tax), NHIF deductions, NSSF deductions, gross salary, and net salary based on the provided rates and input parameters.
*  git add index.js
* git add README.md
* make the third commit.
* git push origin main.
