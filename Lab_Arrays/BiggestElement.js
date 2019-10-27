function solve(input) {
   // let max = Number.MIN_SAFE_INTEGER;
    // for (let inputElement of input) {
    //     let currentMax = inputElement.sort((a,b)=> a-b).pop();
    //     if (currentMax > max){
    //         max = currentMax;
    //     }
    // }
    // for (let row = 0; row < input.length; row++) {
    //     for (let col = 0; col < input[row].length; col++) {
    //         let current = input[row][col];
    //         if (current > max){
    //             max = current;
    //         }
    //     }
    // }
    // console.log(max);
   //return Math.max(...input.flat(1))
    return Math.max(...input.reduce((a,b) => a.concat(b),[]))
}

console.log(
    solve(
        [[20, 50, 10],
    [8, 33, 4]]
));