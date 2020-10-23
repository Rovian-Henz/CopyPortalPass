const interval = setInterval(() => {
    let element = document.querySelector("#TEXTSENHA_MPAGE");
    if (element) {
        clearInterval(interval);
        createButton(element);
    }

}, 1000);

function createButton(element) {
    const button = document.createElement("button");
    button.innerHTML = "Copiar";
    button.classList.add("copyButton");
    button.addEventListener("click", event => {
        event.preventDefault();
        copyToClipboard(element);
    })


    element.parentElement.appendChild(button);
}

function copyToClipboard(element) {
    let pass = element.innerText.substring(14);
    var $temp = document.createElement("input");
    document.querySelector("body").appendChild($temp);
    $temp.value = pass;
    $temp.select();
    document.execCommand("copy");
    $temp.remove();
}