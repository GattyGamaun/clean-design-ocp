const IncomeMultiplier = require("./IncomeMultiplier");

module.exports = class StudentLoanCalculator {
    getLoan(age, income) {
        let loan = 100;

        if (age >= 21) {
            loan += 150;
        }

        return IncomeMultiplier.multiply(loan, income);
    }
}
