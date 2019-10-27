function solve() {
    let input = document.getElementById("input").value;
    let result = document.getElementById("resultOutput");
    let string = "";
    let sum = calcolateSum(input);

    input = substringInput(input, sum);
    input = mathStr(input);
    input = input.map(String)
        .map(str => parseInt(str, 2))
        .forEach(e => {
         if ((String.fromCharCode(e)).match(/[A-Za-z ]+/gm)){
          string += String.fromCharCode(e)
         }
        });
    result.textContent = string;

    function mathStr(input) {
        return input.match(/.{1,8}/gim);
    }


    function substringInput(input, sum) {
        return input.substring(sum, input.length - sum);
    }


    function calcolateSum(input) {
        while (input.toString().length > 1) {
           input =  spredSum(input);
        }
        return input;
    }

    function spredSum(currentSum) {
        return Array.from(currentSum.toString())
            .map(Number)
            .reduce((acc, curr) => acc + curr);
    }

}