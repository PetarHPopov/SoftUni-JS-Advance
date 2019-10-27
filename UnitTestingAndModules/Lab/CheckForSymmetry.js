let expect = require("chai").expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    return (JSON.stringify(arr) === JSON.stringify(reversed));
}
describe("Is Symmetric",function () {
    it('should false for text', function () {
        expect(isSymmetric("text")).to.equal(false);
    });
    it('should false for [10, 7 ,50]', function () {
        expect(isSymmetric([10, 7 ,50])).to.equal(false);
    });
    it('should true for [10, 7 ,10]', function () {
        expect(isSymmetric([10, 7 ,10])).to.equal(true);
    });
    it('should true for [0]', function () {
        expect(isSymmetric([0])).to.equal(true);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });

});

