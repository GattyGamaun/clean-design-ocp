const assert = require('assert');
const LoanCalculator = require('../src/LoanCalculator');

describe('LoanCalculator', () => {
    let calculator;

    before(() => {
        calculator = new LoanCalculator();
    });

    it('student loan for young poor person', () => {
        assert.strictEqual(calculator.getStudentLoan(18, 100), 100);
    });

    it('student loan for old person', () => {
        assert.strictEqual(calculator.getStudentLoan(21, 100), 250);
    });

    it('student loan for rich person', () => {
        assert.strictEqual(calculator.getStudentLoan(18, 2000), 200);
    });

    it('car loan for young poor person', () => {
        assert.strictEqual(calculator.getCarLoan(20, 500), 2000);
    });

    it('car loan for adult poor person', () => {
        assert.strictEqual(calculator.getCarLoan(45, 500), 3000);
    });

    it('car loan for old poor person', () => {
        assert.strictEqual(calculator.getCarLoan(60, 500), 3500);
    });

    it('car loan for young rich person', () => {
        assert.strictEqual(calculator.getCarLoan(20, 2000), 4000);
    });

    it('car loan for adult rich person', () => {
        assert.strictEqual(calculator.getCarLoan(45, 2000), 6000);
    });

    it('car loan for old rich person', () => {
        assert.strictEqual(calculator.getCarLoan(60, 2000), 7000);
    });
    
    it('house loan for young poor person', () => {
        assert.strictEqual(calculator.getHouseLoan(20, 500), 100000);
    });

    it('house loan for old poor person', () => {
        assert.strictEqual(calculator.getHouseLoan(60, 500), 100000);
    });

    it('house loan for young rich person', () => {
        assert.strictEqual(calculator.getHouseLoan(20, 65000), 200000);
    });

    it('house loan for old rich person', () => {
        assert.strictEqual(calculator.getHouseLoan(60, 65000), 400000);
    });
});
