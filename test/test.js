let Hello = require('../src/hello.js')



var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
            

        it('should return "1234" when sam is called', function() {
            let hello = new Hello()
            assert.equal(hello.sam(), "1234");
        });
    });
});
