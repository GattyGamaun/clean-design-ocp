module.exports = class HouseLoanCalculator {
    getLoan(age, income) {
        let loan = 100000;

        if (age > 30 && income > loan / 2) {
            loan *= 2;
        }

        return loan;
    }
}
