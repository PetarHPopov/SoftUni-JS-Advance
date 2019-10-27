let assert = require("chai").assert;

function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        }
    }
}

describe("createCalculator", function () {
    it('should return Object with all proparti', function () {
        const proparties = ['add', 'subtract', 'get'];
        const result = createCalculator();
        assert.isObject(result);
        assert.isTrue(proparties.every((prop) => Object.keys(result).includes(prop)))
    });

});
describe("get",function () {
    it('get ', function () {
        const calculator = createCalculator();
        const result = calculator.get();
        assert.equal(result,0);
    });
});
describe("other cases",function () {
    it('should 5 with add()', function () {
        const calculator = createCalculator();
        calculator.add(2);
        calculator.add(3);
        const result = calculator.get();
        assert.equal(result,5);
    });
    it('should -5 with subtract()', function () {
        const calculator = createCalculator();
        calculator.subtract(2);
        calculator.subtract(3);
        const result = calculator.get();
        assert.equal(result,-5);
    });
    it('should 5 with add() and subtract()', function () {
        const calculator = createCalculator();
        calculator.add(10);
        calculator.subtract(5);
        const result = calculator.get();
        assert.equal(result,5);
    });
    it('should 2 with add() and subtract()', function () {
        const calculator = createCalculator();
        calculator.add(10);
        calculator.subtract('7');
        calculator.add('-2');
        calculator.subtract('-1');
        const result = calculator.get();
        assert.equal(result,2);
    });

});
