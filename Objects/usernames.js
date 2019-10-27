function solve(input) {
    const sortArr = ((a, b) => a.length - b.length || a.localeCompare(b));
    let result = new Set();

    input.sort(sortArr).forEach(e => result.add(e));
    result.forEach(x => console.log(x));
}

solve(['Ashton',
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);