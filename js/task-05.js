const textInput = document.getElementById("name-input");
const output = document.querySelector("#name-output");
const text = output.textContent;

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
        output.textContent = text;
    } else output.textContent = event.currentTarget.value;
});
