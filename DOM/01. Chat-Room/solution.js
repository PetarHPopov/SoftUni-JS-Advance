function solve() {

    // document.getElementById('send').addEventListener('click', () => {
    //     let input = document.getElementById('chat_input');
    //     let message = document.getElementsByClassName('message my-message')[0];
    //
    //     let cloneMessage = message.cloneNode(true);
    //     cloneMessage.textContent = input.value;
    //
    //     let newMessage = document.getElementById('chat_messages');
    //     newMessage.appendChild(cloneMessage);
    //     input.value = '';
    // });




    let sendBtn = document.getElementById("send");
    let messageContainer = document.getElementById("chat_input"); // така пазим референция

    sendBtn.addEventListener("click", sendMessage);

    function sendMessage() {
        let message = messageContainer.value;
        let newMessages = document.createElement("div");
        newMessages.classList.add("message", "my-message");
        newMessages.textContent = message ;
        let parent = document.getElementById("chat_messages");
        parent.appendChild(newMessages);
        messageContainer.value ="";
    }

}


