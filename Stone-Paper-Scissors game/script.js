let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const displayData = document.querySelector('.display2');
const userInpt = document.querySelector('.display1');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);   //random choice picker
    const compChoice = options[randIdx];
    
    choices.forEach(choice => choice.classList.remove("hover-effect"));
    
    const selectedChoice = document.querySelector(`#${compChoice}`);
    selectedChoice.classList.add("hover-effect");

    displayData.textContent = compChoice;
  
    setTimeout(() => {
    selectedChoice.classList.remove("hover-effect");
    }, 500);  

    return compChoice;
  };

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice(); 

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;    //scissors, paper
    } else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true; //rock, scissors
    } else {
        userWin = compChoice === "rock" ? false : true;     //rock, paper
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    userInpt.textContent = userChoice
    playGame(userChoice);
  });
});
