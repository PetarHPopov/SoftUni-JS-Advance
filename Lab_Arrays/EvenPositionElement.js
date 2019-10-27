function solve(input) {
    // let result = "";
    // for (let i = 0; i < input.length; i += 2) {
    //     result += input[i] + " ";
    // }


// return result.trim();
    function isEvenIndex() {
        return (_, i) => i % 2 === 0;
    }
    return input.filter(isEvenIndex())
        .join(" ")
}

console.log(solve(['5', '10','20']));