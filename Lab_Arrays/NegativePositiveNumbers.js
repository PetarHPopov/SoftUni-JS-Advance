function solve(input) {
    // let result =[];
    // for (let i = 0; i < input.length; i++) {
    //     const current = input[i];
    //    current < 0 ? result.unshift(current) : result.push(current);
    // }
    const actionMap ={
        true : "unshift",
        false : "push"
    };
    // let result =[];
    // for (let i = 0; i < input.length; i++) {
    //     result[actionMap[input[i] < 0]](input[i]);
    // }
    // return result;

    return input.reduce((result , x) => {
        result[actionMap[x < 0]](x);
        return result;
    },[]);

}
console.log(solve([3, -2, 0, -1]));