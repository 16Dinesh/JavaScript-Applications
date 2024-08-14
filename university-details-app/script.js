const btn = document.querySelector('.btn-primary')
let link = "http://universities.hipolabs.com/search?name=";



btn.addEventListener('click', async () => {
    let country = document.querySelector('input').value;
    if(country.trim() === "") {
        alert("Enter the UNIVERSITY Name");
        return;
    }
    let collegeArray = await getColleges(country);
    show(collegeArray);
})

async function getColleges(country) {
    try {
        let responce = await axios.get(link + country)
        return responce.data
    }catch(e){
        console.log(`Error Found -> ${e}`)
        return []
    }     
}

function show(collegeArray) {
    let list = document.querySelector(".list-group");
    list.innerHTML = "";
    for(let college of collegeArray) {
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        let stateProvince = college["state-province"] ? college["state-province"] : 'N/A'; 
        li.innerText = `College Name : ${college.name} \n 
                        Country : ${college.country}  \n
                        College Website : ${college.web_pages[0]} \n
                        State :(${stateProvince})`;
        list.appendChild(li);
    }
}