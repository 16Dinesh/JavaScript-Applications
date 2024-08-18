const btn = document.querySelector(".btn");
let userDetails = document.querySelector(".users");

btn.addEventListener("click", getUsers);

function getUsers(e) {
    e.preventDefault();

    const http = new XMLHttpRequest();
    
    http.open("GET", "users.json" , true);

    http.onload = function() {
        console.log(this.status);
        if(this.status === 200 ){
            console.log(this.responseText);
            const users = JSON.parse(this.responseText);

            let output = "";

            users.forEach(user => {
                output += `
                <hr/>
                <ul>
                    <li>ID : ${user.id}</li>
                    <li>Name : ${user.name}</li>
                    <li>Age : ${user.age}</li>
                    <li>Email ID : ${user.email}</li>
                </ul>
                `
            })
            userDetails.innerHTML = output
        }
    }
    http.send();
}