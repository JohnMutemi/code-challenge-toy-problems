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





//challenge 3

// Importing readline module to read user input
const readline = require("readline");

// Function to calculate NHIF deductions
function calculateNHIF(grossPay) {
  let nhifDeductions = 0;
  if (grossPay <= 5999) {
    nhifDeductions = 150;
  } else if (grossPay <= 7999) {
    nhifDeductions = 300;
  } else if (grossPay <= 11999) {
    nhifDeductions = 400;
  } else if (grossPay <= 14999) {
    nhifDeductions = 500;
  } else if (grossPay <= 19999) {
    nhifDeductions = 600;
  } else if (grossPay <= 24999) {
    nhifDeductions = 750;
  } else if (grossPay <= 29999) {
    nhifDeductions = 850;
  } else if (grossPay <= 34999) {
    nhifDeductions = 900;
  } else if (grossPay <= 39999) {
    nhifDeductions = 950;
  } else {
    nhifDeductions = 1000;
  }
  return nhifDeductions;
}

// Function to calculate NSSF deductions
function calculateNSSF(grossPay) {
  let nssfTier1 = 0,
    nssfTier2 = 0;

  // Determine pensionable pay within Tier II range
  const pensionablePay = Math.min(grossPay, 36000); // Cap for Tier II

  // Calculate Tier I NSSF deduction
  if (grossPay <= 7000) {
    nssfTier1 = grossPay * 0.06;
  } else {
    nssfTier1 = 420; // Cap for Tier I
  }

  // Calculate Tier II NSSF deduction, ensuring it doesn't exceed the cap
  // Contribution on upper limit (6% of upper Limit less lower limit)
  nssfTier2 = Math.min(pensionablePay * 0.06 - nssfTier1, 1740);

  return [nssfTier1, nssfTier2];
}

// Function to calculate PAYE (Pay As You Earn) tax
function calculatePAYE(grossSalary) {
  // Function to calculate taxable income after deductions
  function calculateTaxableIncome(grossPay) {
    const nhifDeductions = calculateNHIF(grossPay);
    const [nssfTier1, nssfTier2] = calculateNSSF(grossPay);
    const totalNSSF = nssfTier1 + nssfTier2;
    const taxableIncome = grossPay - nhifDeductions - totalNSSF;
    return taxableIncome;
  }

  // Tax rates
  const taxRates = [
    { lowerLimit: 0, upperLimit: 24000, rate: 0.1 },
    { lowerLimit: 24001, upperLimit: 32333, rate: 0.25 },
    { lowerLimit: 32334, upperLimit: 500000, rate: 0.3 },
    { lowerLimit: 500001, upperLimit: 800000, rate: 0.325 },
    { lowerLimit: 800001, upperLimit: Infinity, rate: 0.35 },
  ];

  let paye = 0;
  const taxableIncome = calculateTaxableIncome(grossSalary);

  let taxBrackets = [];
  for (let i = 0; i < taxRates.length; i++) {
    if (taxableIncome > taxRates[i].lowerLimit) {
      let taxableAmount =
        Math.min(taxableIncome, taxRates[i].upperLimit) -
        taxRates[i].lowerLimit;
      const taxAmount = taxableAmount * taxRates[i].rate;
      paye += taxAmount;
      taxBrackets.push({
        range: `Kshs ${taxRates[i].lowerLimit.toFixed(2)} - Kshs ${taxRates[
          i
        ].upperLimit.toFixed(2)}`,
        taxablePay: taxableAmount.toFixed(2),
        rate: taxRates[i].rate * 100 + "%",
        tax: taxAmount.toFixed(2),
      });
    } else {
      break;
    }
  }

  return { paye, taxBrackets };
}

// Function to calculate net salary
function calculateNetSalary(grossPay) {
  const payeDetails = calculatePAYE(grossPay);
  const nhifDeductions = calculateNHIF(grossPay);
  const [nssfTier1, nssfTier2] = calculateNSSF(grossPay);
  const totalNSSF = nssfTier1 + nssfTier2;
  const totalDeductions = payeDetails.paye + nhifDeductions + totalNSSF;
  const netSalary = grossPay - totalDeductions;
  return {
    grossPay,
    nssfTier1,
    nssfTier2,
    totalNSSF,
    taxablePay: grossPay - totalNSSF - nhifDeductions,
    payeDetails,
    nhifDeducations: nhifDeductions,
    totalDeductions,
    netSalary,
  };
}

// Main function to get user input and calculate net salary
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the gross salary: ", (grossSalary) => {
    const {
      grossPay,
      nssfTier1,
      nssfTier2,
      totalNSSF,
      taxablePay,
      payeDetails,
      netSalary,
    } = calculateNetSalary(parseFloat(grossSalary));

    console.log("\n");
    console.log("Gross Salary: Kshs", grossPay.toFixed(2));
    console.log("Tier I Employee NSSF: Kshs", nssfTier1.toFixed(2));
    console.log("Tier II Employee NSSF: Kshs", nssfTier2.toFixed(2));
    console.log("Total NSSF Deducted: Kshs", totalNSSF.toFixed(2));
    console.log("NHIF Deducted: Kshs", calculateNHIF(grossPay).toFixed(2));
    console.log(
      "Taxable income after NSSF Deduction (Taxable Pay): Kshs",
      taxablePay.toFixed(2),
    );

    console.log("\n");
    console.log("Income Brackets\tTaxable Pay\tRate\tTax");
    payeDetails.taxBrackets.forEach((bracket) => {
      console.log(
        ${bracket.range}\tKshs ${bracket.taxablePay}\t${bracket.rate}\tKshs ${bracket.tax},
      );
    });

    console.log("\n");
    console.log("PAYE before relief: Kshs", payeDetails.paye.toFixed(2));
    console.log("Reliefs: Kshs", "2400.00"); // Assuming personal relief

    // Subtract personal relief
    const personalRelief = 2400; // Personal relief amount
    payeDetails.paye -= personalRelief;

    // Ensure PAYE is not negative
    payeDetails.paye = Math.max(0, payeDetails.paye);

    console.log("PAYE after relief: Kshs", payeDetails.paye.toFixed(2));
    // console.log("Housing Levy: Kshs 0.00"); // Assuming no housing levy
    // console.log("Other Deductions: Kshs 0.00"); // Assuming no other deductions
    console.log("NET Monthly Salary: Kshs", netSalary.toFixed(2));

    rl.close();
  });
}

main();
