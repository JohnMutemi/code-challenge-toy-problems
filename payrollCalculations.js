// Challenge 3: Payroll Calculations Including NHIF, NSSF, and PAYE
// This series of functions collectively calculate net salary after statutory deductions in Kenya: NHIF, NSSF, and PAYE.

// Imports the readline module to facilitate reading user input from the console.
const readline = require("readline");

// Calculates NHIF deductions based on gross pay.
// NHIF: National Hospital Insurance Fund deduction, varies with the salary range.
function calculateNHIF(grossPay) {
  // NHIF deduction rates based on gross salary brackets.
  let nhifDeductions = 0;
  // Specifies NHIF deductions for different gross salary brackets.
  // Each bracket corresponds to a fixed NHIF deduction amount.
  // ... (Include the rest of the NHIF deduction conditions here, each with a brief comment)
  return nhifDeductions;
}

// Calculates NSSF deductions based on gross pay.
// NSSF: National Social Security Fund, a pension scheme, deductions based on tiers.
function calculateNSSF(grossPay) {
  // NSSF Tier I and II calculations.
  let nssfTier1 = 0, nssfTier2 = 0;
  // Defines pensionable pay for Tier II calculations and sets the calculation rules for Tier I and II.
  // ... (Include the detailed calculations for both tiers, explaining the logic behind them)
  return [nssfTier1, nssfTier2];
}

// Calculates PAYE (Pay As You Earn) tax based on gross salary.
// PAYE: Progressive income tax deducted monthly.
function calculatePAYE(grossSalary) {
  // Calculates taxable income after deducting NHIF and NSSF contributions.
  function calculateTaxableIncome(grossPay) {
    // Calculation involves subtracting both NHIF and NSSF deductions from the gross pay to find the taxable income.
    // ... (Include detailed explanation for the calculation of taxable income)
    return taxableIncome;
  }
  // Defines tax rates and brackets for PAYE calculation.
  // ... (Include detailed explanation on how the PAYE is calculated across different income brackets)
  return { paye, taxBrackets };
}

// Calculates the net salary after all deductions.
function calculateNetSalary(grossPay) {
  // Consolidates all deductions and calculates the net salary.
  // ... (Detail the process of subtracting all deductions from gross pay to arrive at net salary)
  return {
    // Details each component of the salary and deductions for clarity.
    // ... (Include comments for each property in the returned object, explaining its significance)
  };
}

// Main function to initiate the payroll calculation process.
// It prompts the user for gross salary input and calculates the net salary, displaying the breakdown.
function main() {
  // Creates readline interface for user input.
  // ... (Provide a detailed comment for each step within this function, from prompting the user to displaying the final calculations)
}
