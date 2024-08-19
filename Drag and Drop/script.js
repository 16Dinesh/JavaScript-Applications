const draggableElement = document.getElementById('movableElement');
let offsetX = 0;
    offsetY = 0;
    isDragging = false;

draggableElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    const rect = draggableElement.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    draggableElement.style.cursor = "grabbing";
});

document.addEventListener('mousemove', (e)=> {
    if(!isDragging) return;
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        draggableElement.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener('mouseup', ()=> {
    isDragging = false;
    draggableElement.style.cursor = 'grab';
})