const IncomeMultiplier = require('./IncomeMultiplier');
const CarLoanCalculator = require("./CarLoanCalculator");
const StudentLoanCalculator = require("./StudentLoanCalculator");
const HouseLoanCalculator = require("./HouseLoanCalculator");

module.exports = class LoanCalculator {
    constructor() {
        this.calculator = new Map();
        this.calculator.set('car', new CarLoanCalculator())
        this.calculator.set('student', new StudentLoanCalculator())
        this.calculator.set('house', new HouseLoanCalculator())
    }

    getLoan(request, age, income) {
        if (this.calculator.has(request)) {
            const loan = this.calculator.get(request).getLoan(age, income);
            return IncomeMultiplier.multiply(loan, income);
        }
    }
}
