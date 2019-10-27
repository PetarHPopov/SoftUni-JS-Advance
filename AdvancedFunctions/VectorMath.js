const solution = (function () {
    const add = ([a1, b1], [a2, b2]) => {
        return [a1 + a2, b1 + b2];
    };
    const multiply = ([a, b], c) => {
        return [a *c, b * c];
    };
    const length = ([a,b]) => {
 return Math.sqrt(a*a + b*b);
    };
    const dot = ([a1, b1], [a2, b2]) => {
  return a1 * a2 + b1 * b2;
    };
    const cross = ([a1, b1], [a2, b2]) => {
 return a1 * b2 - b1 * a2
    };
    return {
        add,
        multiply,
        length,
        dot,
        cross
    }

})();
console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([2, 3], [2, -1]));
console.log(solution.cross([3, 7], [1, 0]));
