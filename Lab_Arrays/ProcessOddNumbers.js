function solve(input) {
    console.log(input
        .filter(((value, index) => index % 2 !== 0))
        .map(e => e * 2)
        .reverse()
        .join(" "));
}

solve([3, 0, 10, 4, 7, 3]);