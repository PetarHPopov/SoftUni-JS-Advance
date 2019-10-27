function solve() {
    let input = document.getElementById("expressionOutput");
    let output = document.getElementById("resultOutput");

    const operators = ["+", "-", "*", "/"];

    document.body.addEventListener("click", (e) => {
        const value = e.target.value;
        if (value === "Clear") {
            clear();
        } else if (operators.includes(value)) {
            addOperator(value);
        } else if (value === "=") {
            result();
        } else {
            addNumber(value);
        }
    });

    function calculate(a, operator, b) {
        a = Number(a);
        b = Number(b);
        const operations = {
            "+": a + b,
            "-": a - b,
            "*": a * b,
            "/": a / b
        };
        let sum = operations[operator];
        output.textContent = sum;
    }

    function addNumber(value) {
        input.textContent += value;
    }

    function result() {
    let filterField = input.textContent.
        split(" ")
        .filter(el => el !== "");
           filterField.length === 3
               ? calculate(filterField[0],filterField[1],filterField[2])
               : output.textContent = NaN;
    }

    function addOperator(value) {
        input.textContent += ` ${value} `
    }

    function clear() {
        input.textContent = "";
        output.textContent = "";
    }
}