function addItem() {
    let text = document.querySelector("#newItemText");
    let value = document.querySelector("#newItemValue");

    let menu = document.querySelector("#menu");
    let optional = document.createElement("option");
    optional.value = value.value;
    optional.textContent = text.value;

    menu.appendChild(optional);
    text.value = "";
    value.value = "";
}