let humanScore = 0,
  computerScore = 0;

//return random string "rock" / paper /scissors

function get_computer_choice() {
  // get a random value from 1 to 3

  let r_0to99 = Math.floor(Math.random() * 3);
  if (r_0to99 == 0) return "rock";
  if (r_0to99 == 1) return "paper";
  if (r_0to99 == 2) return "scissors";
}

function play_round(human_choice, computer_choice) {
  computer_choice = computer_choice.toUpperCase();
  human_choice = human_choice.toUpperCase();
  if (computer_choice == human_choice) {
    resultScreen.textContent = `DRAW: both are ${computer_choice}\nCOM: ${computerScore} | YOU: ${humanScore}`;
  } else if (
    (computer_choice == "ROCK" && human_choice == "SCISSORS") ||
    (computer_choice == "PAPER" && human_choice == "ROCK") ||
    (computer_choice == "SCISSORS" && human_choice == "PAPER")
  ) {
    computerScore++;
    resultScreen.textContent = `YOU LOSE: ${computer_choice} beats ${human_choice}\nCOM: ${computerScore} | YOU: ${humanScore}`;
  } else {
    humanScore++;
    resultScreen.textContent = `YOU WIN: ${human_choice} beats ${computer_choice}\nCOM: ${computerScore} | YOU: ${humanScore}`;
  }
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore == 5) resultScreen.textContent = `YOU WIN`;
    if (computerScore == 5) resultScreen.textContent = `YOU LOSE`;
    computerScore = 0;
    humanScore = 0;
    rockBtn.removeEventListener("click", rockPress);
    paperBtn.removeEventListener("click", paperPress);
    scissorsBtn.removeEventListener("click", scissorsPress);
  }
}
function rockPress() {
  play_round("rock", get_computer_choice());
}
function paperPress() {
  play_round("paper", get_computer_choice());
}
function scissorsPress() {
  play_round("scissors", get_computer_choice());
}

const resultScreen = document.querySelector("div");
resultScreen.style.whiteSpace = "pre-wrap";

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

scissorsBtn.style.backgroundColor = "blue";
rockBtn.style.backgroundColor = "red";

rockBtn.addEventListener("click", rockPress);
paperBtn.addEventListener("click", paperPress);
scissorsBtn.addEventListener("click", scissorsPress);
