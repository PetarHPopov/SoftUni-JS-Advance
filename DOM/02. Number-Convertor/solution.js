function solve() {

    let selectMenuTo = document.getElementById("selectMenuTo");
    document.querySelector("#container > button").addEventListener("click", convert);

    function convert() {
        let number = Number(document.getElementById("input").value);
        let result;
        if (selectMenuTo.value === "binary") {
         result = convertToBinari(number);
        }else if (selectMenuTo.value === "hexadecimal"){
            result= convertToHexadeicmal(number).toUpperCase();
        }
        appendResult(result);
    }
    function appendResult(result) {
        document.getElementById("result").value = result;
    }

    function convertToBinari(number) {
        return number.toString(2);
    }

    function convertToHexadeicmal(number) {
        return number.toString(16);
    }
    function createSelectMenuOptions() {
        let binaryOptions = document.createElement("option");
        binaryOptions.textContent = "Binary";
        binaryOptions.value = "binary";

        let hexadecimalOption = document.createElement("option");
        hexadecimalOption.textContent = "Hexadecimal";
        hexadecimalOption.value = "hexadecimal";

        selectMenuTo.appendChild(binaryOptions);
        selectMenuTo.appendChild(hexadecimalOption);
    }
    createSelectMenuOptions();

}