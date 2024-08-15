const dogUrl = 'https://dog-api.kinduff.com/api/facts';
const img = "https://dog.ceo/api/breeds/image/random";
const para = document.getElementById('fact');
const btn = document.querySelector('button');
const randImg = document.getElementById('randImg');


btn.addEventListener('click' , async () => {
    let facts = await getFacts();
    let img = await getImg();
    para.innerText = "Facts : "+facts;
    randImg.setAttribute("src" , img);

})


async function getImg() {
    try {
        let responce = await axios.get(img);
        randImg.classList.add('img')
        return responce.data.message;
    }
    catch (e) {
        console.log(`error -- ${e}`);
        return 'No image found'
    }
}


async function getFacts() {
    try {
        let response = await axios.get(dogUrl);
        return response.data.facts;
    }
    catch (e) {
        console.log(`Error -- ${e}`);
        return "No Fact found"
    }
}

