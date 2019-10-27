function solve(length, k) {

    let result = [1];
    for (let i = 1; i < length; i++) {
         result[i] = sumLasK(result,k);
    }
    console.log(result.join(" "));

    function sumLasK(arr, k) {
        k = arr.length > k ? k : arr.length;
        let sum = 0;
        for (let i = 1; i <= k ; i++) {
            sum += arr[arr.length - i];
        }
        return sum;
    }
}
solve(8, 2);