const prompt = require("prompt-sync")();

let gameOptions = ("PRS");
let playerChoice = prompt("R for Rock. P for Paper. S for Scissors: ").toUpperCase();
let computerChoice = gameOptions.charAt(Math.floor(Math.random() * 3));

console.log(`Computer chooses: ${computerChoice}`);

//snipet to handle draw
if (playerChoice === computerChoice){
    console.log("It's a tie!");
}else if((playerChoice === "R" && computerChoice === "S") || (playerChoice === "P" && computerChoice === "R") ||(playerChoice === "S" && computerChoice === "P")){
    console.log("Player wins!");
} else if((computerChoice ==="R" && playerChoice === "S")||(computerChoice === "P" && playerChoice === "R") ||(computerChoice === "S" && playerChoice === "P")){
    console.log("computer wins")
} else {
    console.log("Invalid Input, R for Rock. P for Paper. S for Scissors");
}


//using ternary operators instead of if statements

let options = "PRS";
let playerChoice = prompt("P for Paper, R for Rock, S for Scissors").toUpperCase();
let computerChoice = options.charAt(Math.floor(Math.random() * 3));
console.log(`Player choses ${playerChoice}`);
console.log(`Computer chooses ${computerChoice}`);
playerChoice === computerChoice?"It's a tie!": 
playerChoice === "R" && computerChoice ==="S"||
playerChoice==="P" && computerChoice==="R"||
playerChoice==="S" && computerChoice === "P"?
"Player Wins": "Computer Wins";