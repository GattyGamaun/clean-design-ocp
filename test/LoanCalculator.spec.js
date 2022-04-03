const assert = require('assert');
const CarLoanCalculator = require('../src/CarLoanCalculator');
const StudentLoanCalculator = require('../src/StudentLoanCalculator');
const HouseLoanCalculator = require('../src/HouseLoanCalculator');

describe('LoanCalculator', () => {
    let calculator;

    before(() => {
        calculator = new Map();
        calculator.set('car', new CarLoanCalculator())
        calculator.set('student', new StudentLoanCalculator())
        calculator.set('house', new HouseLoanCalculator())
    });

    it('student loan for young poor person', () => {
        assert.strictEqual(calculator.get('student').getLoan(18, 100), 100);
    });

    it('student loan for old person', () => {
        assert.strictEqual(calculator.get('student').getLoan(21, 100), 250);
    });

    it('student loan for rich person', () => {
        assert.strictEqual(calculator.get('student').getLoan(18, 2000), 200);
    });

    it('car loan for young poor person', () => {
        assert.strictEqual(calculator.get('car').getLoan(20, 500), 2000);
    });

    it('car loan for adult poor person', () => {
        assert.strictEqual(calculator.get('car').getLoan(45, 500), 3000);
    });

    it('car loan for old poor person', () => {
        assert.strictEqual(calculator.get('car').getLoan(60, 500), 3500);
    });

    it('car loan for young rich person', () => {
        assert.strictEqual(calculator.get('car').getLoan(20, 2000), 4000);
    });

    it('car loan for adult rich person', () => {
        assert.strictEqual(calculator.get('car').getLoan(45, 2000), 6000);
    });

    it('car loan for old rich person', () => {
        assert.strictEqual(calculator.get('car').getLoan(60, 2000), 7000);
    });

    it('house loan for young poor person', () => {
        assert.strictEqual(calculator.get('house').getLoan(20, 500), 100000);
    });

    it('house loan for old poor person', () => {
        assert.strictEqual(calculator.get('house').getLoan(60, 500), 100000);
    });

    it('house loan for young rich person', () => {
        assert.strictEqual(calculator.get('house').getLoan(20, 65000), 200000);
    });

    it('house loan for old rich person', () => {
        assert.strictEqual(calculator.get('house').getLoan(60, 65000), 400000);
    });
});
