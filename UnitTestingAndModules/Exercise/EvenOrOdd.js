let expect = require("chai").expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
describe("isOddOrEven",function () {
    it('should undefined', function () {
        expect(isOddOrEven({name:'Pesho'})).to.be.equal(undefined)
    });
    it('should odd', function () {
        expect(isOddOrEven('Peter')).to.be.equal('odd')
    });
    it('should even', function () {
        expect(isOddOrEven('Desy')).to.be.equal('even')
    });

});