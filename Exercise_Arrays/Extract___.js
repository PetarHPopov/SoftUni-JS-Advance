function solve(input) {
    //let lastNumber =input.slice(0,1);
    // let result =[];
    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] >= lastNumber){
    //         lastNumber = input[i];
    //         result.push(lastNumber);
    //     }
    // }
    let result = input.reduce((acc,curr) =>{
        let max =Math.max(...acc);
        if (curr >= max){
            acc.push(curr);
        }
        return acc;
    },[]);
    return result.join("\n");
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));