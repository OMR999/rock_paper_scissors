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

function get_human_choice() {
  return prompt("please choose you RPS:");
}

function play_round(human_choice, computer_choice) {
  computer_choice = computer_choice.toUpperCase();
  human_choice = human_choice.toUpperCase();
  if (computer_choice == human_choice) {
    console.log("DRAW: both are " + computer_choice);
  } else if (
    (computer_choice == "ROCK" && human_choice == "SCISSORS") ||
    (computer_choice == "PAPER" && human_choice == "ROCK") ||
    (computer_choice == "SCISSORS" && human_choice == "PAPER")
  ) {
    console.log(`YOU LOSE: ${computer_choice} beats ${human_choice}`);
    computerScore++;
  } else {
    console.log(`YOU WIN: ${human_choice} beats ${computer_choice}`);
    humanScore++;
  }
  console.log(`com: ${computerScore} | you: ${humanScore}`);
}

// // function play_game() {
// //   for (i = 0; i < 5; i++) {
// //     play_round(get_human_choice(), get_computer_choice());
// //     console.log(
// //       `Your Score is: ${humanScore}\nComputer Score is: ${computerScore}`
// //     );
// //   }
// //   if (humanScore > computerScore) console.log("YOU WIN");
// //   else console.log("YOU LOSE");
// // }
// play_game();
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.style.backgroundColor = "blue";
scissorsBtn.style.backgroundColor = "red";

rockBtn.addEventListener("click", () => {
  play_round("rock", get_computer_choice());
});
paperBtn.addEventListener("click", () => {
  play_round("paper", get_computer_choice());
});
scissorsBtn.addEventListener("click", () => {
  play_round("scissors", get_computer_choice());
});
