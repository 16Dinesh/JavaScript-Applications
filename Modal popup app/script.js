const modal = document.querySelector(".modal");
const btn = document.querySelector("#btn");
const close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener('click',closeModel);
modal.addEventListener("click", closeModel);

function openModal(e){
    e.preventDefault();
    modal.style.display = "block";
}

function closeModel() {
    modal.style.display = "none";
}