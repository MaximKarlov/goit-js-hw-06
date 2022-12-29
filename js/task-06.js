const textInput = document.querySelector("input");
const inputLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
    if (textInput.value.length === Number(inputLength)) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
});
