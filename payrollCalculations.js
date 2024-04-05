
// Importing readline module to read user input from the console.
const readline = require("readline");

// Function to calculate NHIF (National Health Insurance Fund) deductions based on the employee's gross salary.
// This function defines different brackets for salary and assigns a fixed NHIF deduction for each bracket.
function calculateNHIF(grossPay) {
  let nhifDeductions = 0;
  // Applying conditional statements to check the grossPay bracket and assign the corresponding NHIF deduction.
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
    nhifDeductions = 1000; // Default deduction for salaries above 39999
  }
  return nhifDeductions; // Returns the calculated NHIF deduction.
}

// Function to calculate NSSF (National Social Security Fund) deductions.
// It calculates both Tier 1 and Tier 2 deductions based on gross pay, according to the NSSF regulations.
function calculateNSSF(grossPay) {
  let nssfTier1 = 0, nssfTier2 = 0;

  // Determining the pensionable pay within the Tier II range.
  const pensionablePay = Math.min(grossPay, 36000); // Cap for Tier II calculations.

  // Calculating Tier I NSSF deduction. Tier I is 6% of the gross pay up to a cap of 7000.
  if (grossPay <= 7000) {
    nssfTier1 = grossPay * 0.06;
  } else {
    nssfTier1 = 420; // Fixed amount for gross pay above 7000.
  }

  // Calculating Tier II NSSF deduction. It's the difference of 6% of the pensionable pay and Tier I deduction, capped at 1740.
  nssfTier2 = Math.min(pensionablePay * 0.06 - nssfTier1, 1740);

  return [nssfTier1, nssfTier2]; // Returns both NSSF Tier 1 and Tier 2 deductions.
}

// Function to calculate PAYE (Pay As You Earn) tax based on the employee's gross salary.
// This includes the detailed calculation of taxable income after NHIF and NSSF deductions.
function calculatePAYE(grossSalary) {
  // Nested function to calculate taxable income after statutory deductions.
  function calculateTaxableIncome(grossPay) {
    const nhifDeductions = calculateNHIF(grossPay);
    const [nssfTier1, nssfTier2] = calculateNSSF(grossPay);
    const totalNSSF = nssfTier1 + nssfTier2;
    const taxableIncome = grossPay - nhifDeductions - totalNSSF;
    return taxableIncome; // Returns the taxable income.
  }

  // Defining tax rates and brackets for calculating PAYE.
  const taxRates = [
    { lowerLimit: 0, upperLimit: 24000, rate: 0.1 },
    { lowerLimit: 24001, upperLimit: 32333, rate: 0.25 },
    { lowerLimit: 32334, upperLimit: 500000, rate: 0.3 },
    { lowerLimit: 500001, upperLimit: 800000, rate: 0.325 },
    { lowerLimit: 800001, upperLimit: Infinity, rate: 0.35 },
  ];

  let paye = 0;
  const taxableIncome = calculateTaxableIncome(grossSalary);

  // Loop through each tax rate bracket to calculate the PAYE due.
  let taxBrackets = [];
  for (let i = 0; i < taxRates.length; i++) {
    if (taxableIncome > taxRates[i].lowerLimit) {
      let taxableAmount =
        Math.min(taxableIncome, taxRates[i].upperLimit) -
        taxRates[i].lowerLimit;
      const taxAmount = taxableAmount * taxRates[i].rate;
      paye += taxAmount;
      // Saving tax bracket information for reporting.
      taxBrackets.push({
        range: `Kshs ${taxRates[i].lowerLimit.toFixed(2)} - Kshs ${taxRates[i].upperLimit.toFixed(2)}`,
        taxablePay: taxableAmount.toFixed(2),
        rate: `${taxRates[i].rate * 100}%`,
        tax: taxAmount.toFixed(2),
      });
    } else {
      break; // Exiting loop if taxable income is below the current bracket.
    }
  }

  return { paye, taxBrackets }; // Returns PAYE amount and details of tax brackets.
}

// Function to calculate the net salary by subtracting all deductions from the gross pay.
// It integrates the calculation of PAYE, NHIF, and NSSF deductions to provide a comprehensive payroll calculation.
function calculateNetSalary(grossPay) {
  const payeDetails = calculatePAYE(grossPay);
  const nhifDeductions = calculateNHIF(grossPay);
  const [nssfTier1, nssfTier2] = calculateNSSF(grossPay);
  const totalNSSF = nssfTier1 + nssfTier2;
  const totalDeductions = payeDetails.paye + nhifDeductions + totalNSSF;
  const netSalary = grossPay - totalDeductions; // Calculating net salary.
  // Returning a detailed breakdown of the salary and deductions for transparency.
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

// Main function to initiate user input for gross salary and display the calculated net salary and deductions.
function main() {
  // Setting up readline interface for user input.
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Prompting the user to enter their gross salary.
  rl.question("Enter the gross salary: ", (grossSalary) => {
    // Calculating and displaying the salary breakdown.
    const {
      grossPay,
      nssfTier1,
      nssfTier2,
      totalNSSF,
      taxablePay,
      payeDetails,
      netSalary,
    } = calculateNetSalary(parseFloat(grossSalary));

    // Printing the detailed breakdown of the salary and deductions.
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
        `${bracket.range}\tKshs ${bracket.taxablePay}\t${bracket.rate}\tKshs ${bracket.tax}`,
      );
    });

    console.log("\n");
    console.log("PAYE before relief: Kshs", payeDetails.paye.toFixed(2));
    console.log("Reliefs: Kshs", "2400.00"); // Assuming personal relief

    // Subtracting personal relief from PAYE.
    const personalRelief = 2400; // Personal relief amount.
    payeDetails.paye -= personalRelief;

    // Ensuring PAYE is not negative after applying reliefs.
    payeDetails.paye = Math.max(0, payeDetails.paye);

    console.log("PAYE after relief: Kshs", payeDetails.paye.toFixed(2));
    console.log("NET Monthly Salary: Kshs", netSalary.toFixed(2));

    // Closing the readline interface.
    rl.close(); 
  });
}
// Executing the main function to start the application.
main(); 
