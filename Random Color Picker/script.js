const btn = document.querySelector('button');

function randColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let colors = `rgb(${red},${green},${blue})`;
    return colors;
}

btn.addEventListener("click", ()=> {
    const colorDiv = document.querySelector('.color-display');
    const h3 = document.querySelector('h3');
    let randRgb = randColor();
    h3.innerText = randRgb;
    colorDiv.innerHTML = ""
    colorDiv.style.backgroundColor = randRgb;
})