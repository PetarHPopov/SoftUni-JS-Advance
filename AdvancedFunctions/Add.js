function solution(input) {
    return function (num) {
        return input + num;
    }
}

let add = solution(12);
console.log(add(2));
console.log(add(3));
