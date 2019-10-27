function solve(...input) {
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        let elem = input[i];
        let key = typeof elem;
        if (!obj.hasOwnProperty(key)) {
            obj[key] = 0;
        }
        obj[key] += 1;
        console.log(`${key}: ${elem}`);
    }
    return Object.entries(obj).sort((a, b) => b[1] - a[1]).forEach(entry => console.log(`${entry[0]} = ${entry[1]}`));
}

function solve2(...input) {
   Object.entries(input.reduce((previous, current) => {
        let type = typeof current;
        console.log(`${type}: ${current}`);
        if (!previous.hasOwnProperty(type)) {
            previous[type] = 0;
        }
        previous[type]++;

        return previous;
    }, {}))
       .sort((a,b) => b[1] - a[1])
       .map(([type , count])=> `${type} = ${count}`)
       .forEach(el => console.log(el));
}

solve('cat', 42, function () {
    console.log('Hello world!');
});
solve2('cat', 42,23, function () {
    console.log('Hello world!');
});