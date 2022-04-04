module.exports = class StudentLoanCalculator {
    getLoan(age) {
        let loan = 100;

        if (age >= 21) {
            loan += 150;
        }

        return loan;
    }
}
