let input = document.querySelector('input');

input.addEventListener("keyup", ()=>{
    const result = document.querySelector('span');
    result.innerHTML = input.value.length;
});

