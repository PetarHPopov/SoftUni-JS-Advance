function toggle() {
    let  button = $(".button");
    let extraDiv = $("#extra");

    // console.log(extraDiv.css("display")) така проверяваме какъв е стила на extraDiv

    if (extraDiv.css("display") === "none"){
        extraDiv.css("display","block");
        button.text("Less");
    }else {
        extraDiv.css("display","none");
        button.text("More");
    }
}