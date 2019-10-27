function solve(input) {
    input = input.map(JSON.parse);

    let unique = [];

    for (let inputElement of input) {
        let sum = inputElement.reduce((a,b) => a+b,0);
        let currentSun = unique.some(x => x.reduce((a,b) => a+ b,0) === sum);
        if (!currentSun){
            unique.push(inputElement.sort((a,b) => b-a));
        }

    }
    let result = unique.sort((a,b) => a.length - b.length)
        .map(arr => `[${arr.join(", ")}]`).join("\n");
    console.log(result);

}
solve(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]

);