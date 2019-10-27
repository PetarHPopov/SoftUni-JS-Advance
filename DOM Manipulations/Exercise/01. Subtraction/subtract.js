function subtract() {
    let first = Number(document.querySelector("#firstNumber").value);
    let second = Number(document.querySelector("#secondNumber").value);
    let result = document.querySelector("#result");
    result.textContent = first - second;
}