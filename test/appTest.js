const assert = require('chai').assert;
const { sayHello, addNumbers } = require('../app');

// Results
let sayHelloResult = sayHello();
let addNumbersResult = addNumbers(45, 5);

describe('App', () => {
    describe('sayHello()', () => {
        it('sayHello should return hello', () => {
            assert.equal(sayHelloResult, 'hello');
        });

        it('sayHello should return type string', function () {
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers()', () => {
        it('addNumbers should return the sum of two numbers', function () {
            assert.equal(addNumbersResult, 50);
        });

        it('addNumbersResult should be above 7', () => {
            assert.isAbove(addNumbersResult, 7);
        });

        it('addNumbers should return type number', function () {
            assert.typeOf(addNumbersResult, 'number');
        });
    });
});