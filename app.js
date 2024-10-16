let userScore = 0;
let compScore = 0;

const selects = document.querySelectorAll(".choice")//her us element ko access kre ga jis ke pass ye class ho  gi
const msg = document.querySelector("#res");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice=() => {
    const options =["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
};
const drawGame = () => {
    res.innerText = "Game was Draw. Play again.";
    res.style.backgroundColor = "#081b31";
  };
  
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      res.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      res.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      res.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      res.style.backgroundColor = "red";
    }
  };
const playgame =(userChoice) =>{
    const compChoice =genCompChoice();
    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
      } else {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
      }
};
selects.forEach((choice) =>{

    choice.addEventListener("click", ( ) =>{
        const userChoice = choice.getAttribute("id");

        playgame(userChoice);
    });
});