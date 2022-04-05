const assert = require('assert');
const LoanCalculator = require('../src/LoanCalculator');
const CarLoanCalculator = require("../src/CarLoanCalculator");
const StudentLoanCalculator = require("../src/StudentLoanCalculator");
const HouseLoanCalculator = require("../src/HouseLoanCalculator");

describe('LoanCalculator', () => {
    let calculator;

    before(() => {
        calculator = new LoanCalculator();
    });

    it('student loan for young poor person', () => {
        assert.strictEqual(calculator.getLoan(new StudentLoanCalculator(), 18, 100), 100);
    });

    it('student loan for old person', () => {
        assert.strictEqual(calculator.getLoan(new StudentLoanCalculator(), 21, 100), 250);
    });

    it('student loan for rich person', () => {
        assert.strictEqual(calculator.getLoan(new StudentLoanCalculator(), 18, 2000), 200);
    });

    it('car loan for young poor person', () => {
        assert.strictEqual(calculator.getLoan(new CarLoanCalculator(), 20, 500), 2000);
    });

    it('car loan for adult poor person', () => {
        assert.strictEqual(calculator.getLoan(new CarLoanCalculator(), 45, 500), 3000);
    });

    it('car loan for old poor person', () => {
        assert.strictEqual(calculator.getLoan(new CarLoanCalculator(), 60, 500), 3500);
    });

    it('car loan for young rich person', () => {
        assert.strictEqual(calculator.getLoan(new CarLoanCalculator(), 20, 2000), 4000);
    });

    it('car loan for adult rich person', () => {
        assert.strictEqual(calculator.getLoan(new CarLoanCalculator(), 45, 2000), 6000);
    });

    it('car loan for old rich person', () => {
        assert.strictEqual(calculator.getLoan(new CarLoanCalculator(), 60, 2000), 7000);
    });

    it('house loan for young poor person', () => {
        assert.strictEqual(calculator.getLoan(new HouseLoanCalculator(), 20, 500), 100000);
    });

    it('house loan for old poor person', () => {
        assert.strictEqual(calculator.getLoan(new HouseLoanCalculator(), 60, 500), 100000);
    });

    it('house loan for young rich person', () => {
        assert.strictEqual(calculator.getLoan(new HouseLoanCalculator(), 20, 65000), 200000);
    });

    it('house loan for old rich person', () => {
        assert.strictEqual(calculator.getLoan(new HouseLoanCalculator(), 60, 65000), 400000);
    });
});
