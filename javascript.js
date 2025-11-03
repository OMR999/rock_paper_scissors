let humanScore = 0,
  computerScore = 0;
//return random string "rock" / paper /scissors
function get_computer_choice() {
  // get a random value from 1 to 3
  let r_0to99 = parseInt(Math.random() * 100);
  // console.log(r_0to99);
  // associate every number to a string
  // return the string
  if (r_0to99 >= 0 && r_0to99 < 33) return "rock";
  if (r_0to99 >= 33 && r_0to99 <= 66) return "paper";
  if (r_0to99 > 66 && r_0to99 <= 99) return "scissors";
}

function get_human_choice() {
  return prompt("please choose you RPS:");
}

function play_round(human_choice, computer_choice) {
  human_choice = human_choice.toLowerCase();

  if (computer_choice == human_choice) {
    console.log("DRAW: both are " + computer_choice.toUpperCase());
  } else if (
    (computer_choice == "rock" && human_choice == "scissors") ||
    (computer_choice == "paper" && human_choice == "rock") ||
    (computer_choice == "scissors" && human_choice == "paper")
  ) {
    console.log(
      `YOU LOSE: ${computer_choice.toUpperCase()} beats ${human_choice.toUpperCase()}`
    );
    computerScore++;
  } else {
    console.log(
      `YOU WIN: ${human_choice.toUpperCase()} beats ${computer_choice.toUpperCase()}`
    );
    humanScore++;
  }
}

function play_game() {
  for (i = 0; i < 5; i++) {
    play_round(get_human_choice(), get_computer_choice());
    console.log(
      `Your Score is: ${humanScore}\nComputer Score is: ${computerScore}`
    );
  }
  if (humanScore > computerScore) console.log("YOU WIN");
  else console.log("YOU LOSE");
}

play_game();

// play_round(get_human_choice(),get_computer_choice());
