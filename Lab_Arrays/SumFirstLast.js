function solve(input) {
    let f;
    let l;
    let sum = 0;
    if (input.length > 1) {
        f = Number(input.shift());
        l = Number(input.pop());
    } else {
        f = Number(input.shift());
        l = f;
    }
    sum = f + l;
    console.log(sum);
}
// function solve(input) {
//     let firstNumber = Number(input[0]);
//     let lastNumber = Number(input[input.length - 1]);
//     let sum = firstNumber + lastNumber;
//     console.log(sum);
// }

solve(['5']);