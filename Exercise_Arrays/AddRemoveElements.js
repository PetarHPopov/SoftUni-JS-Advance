function solve(input) {
    // let arr = [];
    // let counter = 1;
    // for (const command of input) {
    //     if (command === "add") {
    //         arr.push(counter);
    //     } else {
    //         arr.pop();
    //     }
    //     counter++;
    // }
    // return arr.length > 0 ? arr.join("\n") : "Empty";
    let command = {
        counter: 1,
        add: (arr,num) => [...arr,num] ,
        remove: (arr) => [...arr.slice(0,arr.length-1)]
    };
    let result = input.reduce((acc, curr) => {
        acc = command[curr](acc,command.counter);
        command.counter++;
        return acc;
    }, []);
    return result.length > 0 ? result.join("\n") : "Empty";
}

console.log(solve([
    'remove']
));