const number = document.querySelector(".count");
const btn = document.querySelector(".generate");

btn.addEventListener("click", () => {
    number.textContent = Math.floor(Math.random() * 100 + 1);
})