function solve(input) {
    let firstNumber = Number(input.shift());

    let operation = {
        chop: (num) => {
            return num / 2
        },
        dice: (num) => {
            return Math.sqrt(num)
        },
        spice: (num) => {
            return num += 1
        },
        bake : (num) => {
            return num *= 3
        },
        fillet : (num) => {
            return num * 0.8
        }
    };

    for (let i = 0; i < input.length; i++) {
         firstNumber = operation[input[i]](firstNumber);
        console.log(firstNumber);
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);