function updateDisplay() {
    let textbox = document.getElementById("textbox");
    let displaytext = document.getElementById("display");
    displaytext.textContent = textbox.value;
}