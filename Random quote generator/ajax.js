const btn = document.querySelector(".get-quotes");
const quotes = document.querySelector(".quotes");
const input = document.querySelector("#number")

btn.addEventListener("click", (e) =>{
    e.preventDefault();

    if(input.value.length === 0) {
        return alert("Plese enter a number");
    }

    const http = new XMLHttpRequest();

    http.open("GET", "https://type.fit/api/quotes", true);

    http.onload = function(){
        if(this.status === 200) {
            const data = JSON.parse(this.responseText);

            let output = "";

            for(let i=0; i<Number(input.value); i++){
                const RI = Math.floor(Math.random() * data.length); // to get random index for quotes
                output += `
                <li>Quote: ${data[RI].text}</li>
                <li>Author: ${data[RI].author}</li>
                <hr>  `
            }
            quotes.innerHTML = output;
        }
    }
    http.send();
})