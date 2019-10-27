function create(words) {
    let content = document.getElementById("content");
    for (let word of words) {
        let p = document.createElement("p");
        let div = document.createElement("div");

        p.style.display = "none";
        p.textContent = word;
        div.appendChild(p);
        div.addEventListener("click", show);
        content.appendChild(div);

    }

    function show() {
        this.children[0].style.display = "block";
    }
}