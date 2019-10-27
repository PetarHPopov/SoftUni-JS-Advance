function solve(...input) {
    let [arr, criteria] = input;
    const ascSort = function () {
        return arr.sort((a, b) => a - b)
    };

    const descSort = function () {
        return arr.sort((a, b) => b - a)
    };

    return criteria === 'asc' ? ascSort() : descSort();
}

function solve2(arr, criteria) {
    return criteria === "asc" ? [...arr].sort((a, b) => a - b) : [...arr].sort((a, b) => b - a);
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));
console.log(solve2([14, 7, 17, 6, 8], 'asc'));