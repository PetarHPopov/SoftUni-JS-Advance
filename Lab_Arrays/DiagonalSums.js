// function solve(matrix) {
//     let result = [];
//     let first = 0;
//     let second = 0;
//
//     for (let row = 0; row < matrix.length; row++) {
//         first += matrix[row][row];
//         second += matrix[row][matrix.length - 1 - row];
//     }
//
//
//     return result[first,second];
// }
function solve(input){
    return input.reduce((result,row,i,arr) => {
              result[0] += row[i];
              result[1] += row[arr.length - 1 - i];
        return result;
    },[0,0])
}

console.log(solve(
    [[3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]]
));