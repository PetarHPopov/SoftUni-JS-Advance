function solve(input) {
    let result = '';
    input.forEach(e => {
        const {
            name,
            position,
            salary
        } = JSON.parse(e);
        result +=
            `<tr>\n      <td>${name}</td>\n      <td>${position}</td>\n      <td>${salary}</td>\n   </tr>\n   `
    });
    console.log(`<table>\n   ${result}</table>`);
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);