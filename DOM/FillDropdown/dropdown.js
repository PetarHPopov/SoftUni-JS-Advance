function addItem() {

    let text = $("#newItemText");
    let value = $("#newItemValue");


    let menu = $("#menu");
    let optional = $(`<option value = "${value.val()}">${text.val()}</option>>`);

    menu.append(optional);
    text.val("");
    value.val("");

}