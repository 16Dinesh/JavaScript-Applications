document.querySelector(".get-quotes").addEventListener("click", (e)=> {
    e.preventDefault();
    const input = document.querySelector("#number");
    const quotes = document.querySelector(".quotes");
    const url = "https://type.fit/api/quotes"
    
    if(input.value.length === 0) {
        return alert("Please enter a number!!!");
    }

    fetch(url) 
    .then(res => res.json())
    .then((data) => {
        let output = "";

        for(let i=0; i<Number(input.value); i++){
            const RI = Math.floor(Math.random() * data.length); // to get random index for quotes
            output += `
            <li>Quote: ${data[RI].text}</li>
            <li>Author: ${data[RI].author}</li>
            <hr>  `
        }
        quotes.innerHTML = output
    })
} )