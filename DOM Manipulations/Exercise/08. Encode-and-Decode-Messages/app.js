function encodeAndDecodeMessages() {
    const buttons = document.getElementsByTagName("button");
    const textarea = document.getElementsByTagName("textarea");

    buttons[0].addEventListener("click", encode);
    buttons[1].addEventListener("click", decode);

    let decodingText = "";

    function decode() {
        textarea[1].textContent = decodingText;
    }

    function encode() {
        let text = textarea[0].value;
         decodingText = text;

         let encodeText = "";

        for (let i = 0; i < text.length; i++) {
            let symbol = text.charCodeAt(i);
            encodeText+=String.fromCharCode(symbol + 1);
        }
        textarea[1].textContent = encodeText;
        textarea[0].value = "";
    }
}

