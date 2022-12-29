const btnRef = document.querySelector(".change-color");
const outputRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");
//================variant 1 =================
// btnRef.addEventListener("click", (event) => {
//     const zm = getRandomHexColor();
//     outputRef.textContent = zm;
//     bodyRef.style.backgroundColor = zm;
// });

// =====================variant 2============
btnRef.addEventListener("click", (event) => {
    bodyRef.style.backgroundColor = outputRef.textContent = getRandomHexColor();
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
