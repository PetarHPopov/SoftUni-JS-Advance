let expect = require("chai").expect;
let assert = require("chai").assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
describe("mathEnforcer", function () {
    it('should return Object with all proparti', function () {
        const proparties = ['addFive', 'subtractTen', 'sum'];
        const result = mathEnforcer;
        assert.isObject(result);
        assert.isTrue(proparties.every((prop) => Object.keys(result).includes(prop)))
    });
});
describe('addFive', function () {
    it('should undefined when number is string', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.addFive('5');
        assert.equal(result, undefined);
    });
    it('should 10 when addFive whit 5', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.addFive(5);
        assert.equal(result, 10);
    });
    it('should undefined when number is string', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.addFive(-10);
        assert.equal(result, -5);
    });
    it('should undefined when number is string', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.addFive(1.1);
        assert.equal(result, 6.1);
    });

});
describe('subtractTen', function () {
    it('should undefined when number is string', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.subtractTen('5');
        assert.equal(result, undefined);
    });
    it('should 10 when subtractTen whit 5', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.subtractTen(5);
        assert.equal(result, -5);
    });
    it('should 10 when subtractTen whit 5', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.subtractTen(-5);
        assert.equal(result, -15);
    });
    it('should 10 when subtractTen whit 5', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.subtractTen(5.1);
        assert.equal(result, -4.9);
    });
});
describe('sum', function () {
    it('should undefined when sum string 5 whit num 5', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.sum('5', 5);
        assert.equal(result, undefined);
    });
    it('should undefined when sum num 5 whit string 5', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.sum(5, '5');
        assert.equal(result, undefined);
    });
    it('should 10 when sum  5 whit  5', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.sum(5, 5);
        assert.equal(result, 10);
    });
    it('should 10 when sum  5 whit  5', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.sum(5.1, 5);
        assert.equal(result, 10.1);
    });
    it('should 10 when sum  5 whit  5', function () {
        const funk = mathEnforcer;
        const result = mathEnforcer.sum(5, 5.2);
        assert.equal(result, 10.2);
    });
});


