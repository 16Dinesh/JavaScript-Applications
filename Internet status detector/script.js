const image = document.getElementById("image");
const statusResult = document.getElementById("status");
const bgColor = document.getElementById("main");

async function connection(){
        try {
                const fetchResult = await fetch("https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" + (new Date().getTime())); //any internet api is sufficient 
                image.src = "./images/online.png";
                bgColor.classList.add("online");
                return fetchResult.status >= 200 && fetchResult.status < 300;
        } catch(error){
                image.src = "./images/offline.png"; 
                statusResult.textContent = "OOPS!!! Your internet connection is down";
                bgColor.classList.remove("online");
        }
}

//Monitoring connection status at every 5 sec interval
setInterval(async() => {
        const result = await connection();
        if(result){
                statusResult.textContent = "You are online, connection looks good";
                bgColor.classList.add("online");
        }
}, 5000)

window.addEventListener("load", async(e) => {
        const result = await connection();
        if(result){
                statusResult.textContent = "You are online";
        }else {
                statusResult.textContent = "You are offline";
        }
})