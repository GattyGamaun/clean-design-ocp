const IncomeMultiplier = require('./IncomeMultiplier');

module.exports = class LoanCalculator {
    getLoan(request, age, income) {
        const loan = request.getLoan(age, income);
        return IncomeMultiplier.multiply(loan, income);
    }
}
