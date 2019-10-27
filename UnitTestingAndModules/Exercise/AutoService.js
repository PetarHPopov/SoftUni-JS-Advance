let expect = require("chai").expect;
let assert = require("chai").assert;


class AutoService {

    constructor(garageCapacity) {
        this.garageCapacity = garageCapacity;
        this.workInProgress = [];
        this.backlogWork = [];
    }

    get availableSpace() {
        return this.garageCapacity - this.workInProgress.length;
    }

    repairCar() {

        let workingPlace = this.workInProgress.length > 0 ? this.workInProgress : this.backlogWork;

        if (workingPlace.length > 0) {

            let keysForRepair = [];
            Object.keys(workingPlace[0].carInfo)
                .filter((k) => workingPlace[0].carInfo[k] === 'broken')
                .forEach((k) => keysForRepair.push(k));

            workingPlace.shift();
            if (keysForRepair.length > 0) {
                return `Your ${keysForRepair.join(' and ')} were repaired.`;
            } else {
                return 'Your car was fine, nothing was repaired.'
            }
        } else {
            return 'No clients, we are just chilling...'
        }
    }

    signUpForReview(clientName, plateNumber, carInfo) {

        let currentClient = {
            plateNumber,
            clientName,
            carInfo
        };

        if (this.availableSpace > 0) {
            this.workInProgress.push(currentClient);
        } else {
            this.backlogWork.push(currentClient);
        }
    }

    carInfo(plateNumber, clientName) {

        let checkCar =
            this.workInProgress.filter((carInfo) => carInfo.plateNumber === plateNumber && carInfo.clientName === clientName)[0] ||
            this.backlogWork.filter((carInfo) => carInfo.plateNumber === plateNumber && carInfo.clientName === clientName)[0];

        if (checkCar) {
            return checkCar;
        } else {

            return `There is no car with platenumber ${plateNumber} and owner ${clientName}.`;
        }
    }
}

describe('AutoService', function () {
    describe("auto function",function () {
        let as = new AutoService(5);
        it('should all function', function () {
            assert.isFunction(AutoService.prototype.repairCar);
            assert.isFunction(AutoService.prototype.signUpForReview);
            assert.isFunction(AutoService.prototype.carInfo);
        });

    });
    it('should initialized with correct garageCapacity', function () {
        let as = new AutoService(2);
        let actual = 2;
        let expexct = as.garageCapacity;
        assert.equal(actual,expexct);
    });
    it('should initialized with correct arguments', function () {

        let as = new AutoService(4);
        assert.equal(as.workInProgress.length,0);
    });
    it('should initialized with correct arguments', function () {

        let as = new AutoService(4);


        assert.equal(as.backlogWork.length,0);
    });
    it('should availableSpace', function () {

            let as = new AutoService(4);
            as.workInProgress = [1,2];

        assert.equal(as.availableSpace,2);
    });
});