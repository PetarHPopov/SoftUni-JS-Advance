let expect = require("chai").expect;
let assert = require("chai").assert;

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

describe('PaymentPackage', function () {

    it('should initialized with correct name and value', function () {
        let pp = new PaymentPackage('JS', 10);
        let actual = 'JS';
        let expected = pp.name;

        assert.equal(actual, expected);
    });

    it('shouldn\'t initialized with incorrect name', function () {
        let actual = function () {
            let pp = new PaymentPackage(10, 'CSS');
        };
        let expected = 'Name must be a non-empty string';

        assert.throws(actual, expected);
    });

    it('shouldn\'t initialized with incorrect value', function () {
        let actual = function () {
            let pp = new PaymentPackage('JS', 'CSS');
        };
        let expected = 'Value must be a non-negative number';

        assert.throws(actual, expected);
    });

    it('throw error when change VAT to negative number', function () {
        let actual = function () {
            let pp = new PaymentPackage('JS', 10);
            pp.VAT = -6;
        };
        let expected = 'VAT must be a non-negative number';

        assert.throws(actual, expected);
    });

    it('should initialized with correct VAT', function () {
        let pp = new PaymentPackage('JS', 10);
        let actual = 20;
        let expected = pp.VAT;

        assert.equal(actual, expected);
    });

    it('throw error when change active to negative number', function () {
        let actual = function () {
            let pp = new PaymentPackage('JS', 10);
            pp.active = -6;
        };
        let expected = 'Active status must be a boolean';

        assert.throws(actual, expected);
    });

    it('should initialized with correct active', function () {
        let pp = new PaymentPackage('JS', 10);
        let actual = true;
        let expected = pp.active;

        assert.equal(actual, expected);
    });

    it('should initialized with correct toString', function () {
        let pp = new PaymentPackage('JS', 10);
        let actual = pp.toString();
        let expected = 'Package: JS\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12';

        assert.equal(actual, expected);
    });

    it('should initialized with correct toString and change active', function () {
        let pp = new PaymentPackage('JS', 10);
        pp.active = false;
        let actual = pp.toString();
        let expected = 'Package: JS (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12';

        assert.equal(actual, expected);
    });

    it('should initialized with correct toString and change VAT', function () {
        let pp = new PaymentPackage('JS', 10);
        pp.VAT = 0;
        let actual = pp.toString();
        let expected = 'Package: JS\n- Value (excl. VAT): 10\n- Value (VAT 0%): 10';

        assert.equal(actual, expected);
    });

    it('should initialized with correct toString and change VAT to 0', function () {
        let pp = new PaymentPackage('JS', 0);
        pp.VAT = 0;
        let actual = pp.toString();
        let expected = 'Package: JS\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0';

        assert.equal(actual, expected);
    });

});