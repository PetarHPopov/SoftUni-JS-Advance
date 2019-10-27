let expect = require("chai").expect;
function sum(arr) {
    let sum = 0;
    for (const num of arr)
        sum += Number(num);
    return sum;
}
describe("Sum Numbers",function () {
    it('should sum = 10', function () {
        expect(sum([1,2,3,4])).to.equal(10);
    });
    it('should sum = 0', function () {
        expect(sum([])).to.equal(0);
    });
    it('should sum = 6', function () {
        expect(sum([1,2,3])).to.equal(6);
    });
});
