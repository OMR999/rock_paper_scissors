let 

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

console.log(get_human_choice());
get_computer_choice();
