function solve(input) {
    let rotateCount = +input.pop() ;
    rotateCount = rotateCount % input.length;

    //    for (let i = 0; i < rotateCount; i++) {
    //        let temp = input.pop();
    //        input.unshift(temp);
    //    }
    // return input.join(" ")

    return input.reduceRight((acc, curr) => {
        if (rotateCount) {
            acc = [curr, ...acc.slice(0, input.length - 1)];
            rotateCount--;
        }
        return acc;
    }, [...input]).join(" ");
}

console.log(solve(['1',
    '2',
    '3',
    '4',
    '2']
));