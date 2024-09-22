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
