let gameSeq = [];
let userSeq = [];
let btns = ["yellow" , 'red' , 'blue','green'];

let started = false;
let level = 0;
let highestScore = 0;

let allBtns = document.querySelectorAll('.btn')
let h2 = document.querySelector('h2');
let highestScoreDisplay = document.querySelector('#highest-score');

document.addEventListener('keypress',  ()=> {
    if(!started){                              
        started = true;
        levelUp();
    }
});                                                 

function gameFlash(btn){
    btn.classList.add('flash')                  
    setTimeout(function () {
        btn.classList.remove('flash')
    } , 200);
};

function userFlash(btn){
    btn.classList.add('userFlash')                  
    setTimeout(function () {
        btn.classList.remove('userFlash')
    } , 250);
};

function levelUp() { 
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;                                       

    //random btn choose                               
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    // console.log(gameSeq);   //Color Array
    gameFlash(randBtn);
   
};

for ( btn of allBtns ) {
    btn.addEventListener('click' , btnPress)   //loop
}

function checkAns(idx) {                                       // to the match the answer 
    if (userSeq[idx] === gameSeq[idx]){
       if (userSeq.length == gameSeq.length) {
       setTimeout( levelUp , 500)
       }
    } else {
        //keeps the highest score
        if (level > highestScore) {
            highestScore = level;
            highestScoreDisplay.innerText = `Highest Score: ${highestScore}`;
        }
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press Any Key To Start.`;   
        document.body.style.backgroundColor = 'red'
        setTimeout ( function() {
        document.body.style.backgroundColor = 'white'
        },200)
        reset();
    }
};

function reset() {
    started =false;
    gameSeq = [];
    userSeq =[];
    level = 0; 
}


function btnPress() {
    let btn = this ; 
    userFlash(btn);
    userColor = btn.getAttribute('id');
    userSeq.push(userColor)

    checkAns(userSeq.length-1);
};