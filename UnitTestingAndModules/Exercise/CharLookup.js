let expect = require("chai").expect;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookupChar', function () {

});
describe("lookupChar",function () {
    it('should undefined of not string', function () {
        expect(lookupChar({name:'Pesho'},5)).to.be.equal(undefined);
    });
    it('should undefined of error index', function () {
        expect(lookupChar('Pesho',1.3)).to.be.equal(undefined);
    });

    it('should Incorrect index', function () {
        expect(lookupChar('Pesho',5)).to.be.equal('Incorrect index');
    });
    it('should Incorrect index', function () {
        expect(lookupChar('Pesho',-5)).to.be.equal('Incorrect index');
    });
    it('should charAt of  index', function () {
        expect(lookupChar('Pesho',1)).to.be.equal('e');
    });
});
