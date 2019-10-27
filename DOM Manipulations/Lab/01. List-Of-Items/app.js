function addItem() {
    let input = document.querySelector("#newItemText");
    let inputValue = input.value;
    let listItems =document.querySelector("#items");
    let liElement = document.createElement("li");
    liElement.textContent = inputValue;
    listItems.appendChild(liElement);
    input.value = "";
}