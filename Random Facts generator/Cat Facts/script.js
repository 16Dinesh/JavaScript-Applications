const factLink = "https://catfact.ninja/fact";
const imgLink = 'https://api.thecatapi.com/v1/images/search';
let para = document.getElementById('fact');
let btn = document.querySelector('button');
let randImg = document.getElementById('randImg');

btn.addEventListener('click', async () => {
    let facts = await getFact();
    let img = await getImg();
    para.innerText = "Facts : "+facts;
    randImg.setAttribute("src", img || "../Question.svg"); 
})

async function getImg() {
    try {
        let response = await axios.get(imgLink);
        randImg.classList.add('img')
        return response.data[0].url;
    } catch (er) {
        console.log(er.message);
        return; 
    }
} 

async function getFact() {
    try {
        let response = await axios.get(factLink);
        return response.data.fact
    } catch (er) {
        console.log(er.code);
        return "No Fact found"
    }
}
