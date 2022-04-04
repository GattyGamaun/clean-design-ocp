const IncomeMultiplier = require('./IncomeMultiplier');

module.exports = class CarLoanCalculator {
    getLoan(age) {
        let loan = 2000;

        if (age > 50) {
            loan += 1500;
        } else if (age > 30) {
            loan += 1000;
        }

        return loan;
    }
}
