let expect = require("chai").expect;

function subSum(arr, startIndex, endIndex) {
    let sum = 0;
    if (!Array.isArray(arr)){
        return NaN;
    }
    startIndex = Math.max(0, startIndex);
    endIndex = Math.min(endIndex, arr.length - 1);
    for (let i = startIndex; i <= endIndex; i++) {
        sum +=Number(arr[i]);
    }
    return sum;
}

// console.log(
//     subSum(
//         'text', 0, 2
//     ));

describe("Sub Sum",function () {
    it('should be Sum = 150 ', function () {
        expect(subSum([10, 20, 30, 40, 50, 60], 3, 300)).to.equal(150);
    });

});