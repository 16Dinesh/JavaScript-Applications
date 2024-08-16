const para = document.getElementById('fact');
const btn = document.querySelector('button');
const randImg = document.getElementById('randImg');


btn.addEventListener('click', async () => {
    let facts = await getFacts();
    let img = await getImg();
    para.innerText = "Facts : "+facts;
    randImg.setAttribute("src", img ); 
})

async function getImg() {
    let url = "https://dog.ceo/api/breeds/image/random"
    return fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        randImg.classList.add('img')
        let res = data.message
        return res;
    })
    .catch ((e)=> {
        console.log(`Error --> ${e}`);
        return "No Image Found"
    })
}



async function getFacts() {
    const dogUrl = 'https://dog-api.kinduff.com/api/facts';
    return fetch(dogUrl)
    .then((res)=> {
        return res.json()
    })
    .then((data)=>{
        let res = data.facts
        return res[0]
    })
    .catch((e) => {
        console.log(`Error --> ${e}`);
        return "No Fact Found"
    })

}