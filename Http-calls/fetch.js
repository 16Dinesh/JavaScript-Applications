const btn = document.querySelector(".btn");
const userDetails = document.querySelector(".users");

btn.addEventListener("click", getUsers);

function getUsers(e){
        e.preventDefault();

        fetch('./users.json')
        .then((res)=> res.json())
        .then((users) => {
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
                userDetails.innerHTML = output;
        })
}