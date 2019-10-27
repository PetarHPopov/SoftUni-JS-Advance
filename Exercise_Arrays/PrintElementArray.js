function solve(input) {
    let step = Number(input.pop());
    return input.filter((element, index) => index % step === 0).join("\n")
}

console.log(solve(['dsa',
    'asd',
    'test',
    'tset',
    '2']
));