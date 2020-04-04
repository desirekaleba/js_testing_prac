const assert = require('chai').assert;
const sayHello = require('../app').sayHello;

describe('App', () => {
    it('sayHello should return hello', () => {
        let result = sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function(){
        let result = sayHello();
        assert.typeOf(result, 'string');
    });
});