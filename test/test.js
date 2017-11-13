const assert = require('assert');
const lib = require('../lib/lib.js');
describe('Module lib', () => {
    describe('#checkToEverethingIsNumber()', () => {
        it('true if passet a "1"', () => {
            assert.equal(true, lib.checkToEverethingIsNumber("1"));
        });
        it('true if passet a 1', () => {
            assert.equal(true, lib.checkToEverethingIsNumber("1"));
        })
        it('false if undefined', () => {
            assert.notEqual(true, lib.checkToEverethingIsNumber(undefined));
        });
        it('false if null', () => {
            assert.notEqual(true, lib.checkToEverethingIsNumber(null));
        });
        it('false if "some string"', () => {
            assert.notEqual(true, lib.checkToEverethingIsNumber('some string'));
        });
        it('false if an object', () => {
            assert.notEqual(true, lib.checkToEverethingIsNumber({}));
        });
    });
    describe('#checkToSegmentFromOneToTen', () => {
        it('true if numbers passet from 0 to 10', () => {
            let rangeOfValidValues = [...Array(11).keys()];
            assert.equal(true, rangeOfValidValues.every(lib.checkToSegmentFromOneToTen));
        });
        it('false if undefined', () => {
            assert.notEqual(true, lib.checkToSegmentFromOneToTen(undefined));
        });
        it('false if null', () => {
            assert.notEqual(true, lib.checkToSegmentFromOneToTen(null));
        });
        it('false if one of the element is not a number', () => {
            let rangeOfValidValues = [4, 2, 'hello'];
            assert.notEqual(true, rangeOfValidValues.every(lib.checkToSegmentFromOneToTen));
        });
    });
});