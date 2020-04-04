const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App', () => {
    it('sayHello should return hello', () => {
        let result = sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function(){
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

    it('addNumbers should return the sum of two numbers', function() {
        let result = addNumbers(4, 5);
        assert.equal(result, 9);
    });

    it('addNumbers should be above 7', () => {
        let result = addNumbers(-4, 12);
        assert.isAbove(result, 7);
    });
});