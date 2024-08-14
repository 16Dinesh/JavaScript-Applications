const countTo = "30 Mar 2025";

const formatTime = (t) => (t <10 ? `0${t}`: t) 
const countDown = () => {
    const endDate = new Date(countTo);
    const currentDate = new Date();
    const diff = new Date(endDate - currentDate);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const res = document.querySelector("#countdown");
    res.textContent = `${formatTime(days)} Days ${formatTime(hours)} hrs : ${formatTime(minutes)} min : ${formatTime(seconds)} s `;

    if(diff < 0){
        clearInterval(c);
        res.textContent = 'Happy Telugu New Year!!!'
    }
}

window.addEventListener("load", countDown)

const c = setInterval(() => countDown(),1000)