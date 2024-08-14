const input = document.querySelector('input');
const btn = document.querySelector('button');

const formatTime = (t) => (t < 10 ? `0${t}` : t);

const isValidDate = (dateStr) => {
    const regex = /^\d{2} \w{3} \d{4}$/; 
    return regex.test(dateStr);
};

const countDown = (countTo) => {
    const endDate = new Date(countTo);
    const currentDate = new Date();
    const difference = endDate - currentDate;

    if (difference <= 0) {
        clearInterval(interval);
        res.textContent = 'Your Countdown Ended';
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const res = document.querySelector("#countdown");
    res.textContent = `${formatTime(days)} Days ${formatTime(hours)} hrs : ${formatTime(minutes)} min : ${formatTime(seconds)} s `;
}

let interval;
btn.addEventListener("click", () => {
    clearInterval(interval); 

    const countTo = input.value;
    if (!isValidDate(countTo)) {
        alert("Please enter a valid date in the format 'DD MMM YYYY', e.g., 15 Aug 2024.");
        return;
    }

    const parsedDate = Date.parse(countTo);
    if (isNaN(parsedDate)) {
        alert("Please enter a correct date.");
        return;
    }

    interval = setInterval(() => countDown(countTo), 1000);
});