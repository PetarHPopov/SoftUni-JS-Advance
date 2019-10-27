function solve(matrix) {
    let result = 0;
    // for (let row = 0; row < matrix.length; row++) {
    //     for (let col = 0; col < matrix[row].length; col++) {
    //         const currentElement = matrix[row][col];
    //
    //         if (row < matrix.length - 1){
    //             if (currentElement === matrix[row + 1][col]){
    //                 counter++;
    //             }
    //         }
    //         if (col < matrix[row].length - 1){
    //             if (currentElement === matrix[row][col + 1]){
    //                 counter++;
    //             }
    //         }
    //     }
    // }
    for (let i = 0; i < matrix.length - 1; i++) {
        result += intersect(matrix[i],matrix[i + 1])
    }
    function intersect(a, b) {
        return a.filter((element,index) => b[index] === element).length;
    }
    return result;
}

console.log(solve(
    [['test', 'yes', 'yo', 'ho'],
        ['well', 'done', 'yo', '6'],
        ['not', 'done', 'yet', '5']]
));