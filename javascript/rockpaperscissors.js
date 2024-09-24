const prompt = require("prompt-sync")();

// let gameOptions = ("PRS");
// let playerChoice = prompt("R for Rock. P for Paper. S for Scissors: ").toUpperCase();
// let computerChoice = gameOptions.charAt(Math.floor(Math.random() * 3));

// console.log(`Computer chooses: ${computerChoice}`);

// //snipet to handle draw
// if (playerChoice === computerChoice){
//     console.log("It's a tie!");
// }else if((playerChoice === "R" && computerChoice === "S") || (playerChoice === "P" && computerChoice === "R") ||(playerChoice === "S" && computerChoice === "P")){
//     console.log("Player wins!");
// } else if((computerChoice ==="R" && playerChoice === "S")||(computerChoice === "P" && playerChoice === "R") ||(computerChoice === "S" && playerChoice === "P")){
//     console.log("computer wins")
// } else {
//     console.log("Invalid Input, R for Rock. P for Paper. S for Scissors");
// }


//using ternary operators instead of if statements

let options = "PRS";
let playerOneChoice = prompt("P for Paper, R for Rock, S for Scissors: ").toUpperCase();
let computerOneChoice = options.charAt(Math.floor(Math.random() * 3));
console.log(`Player choses ${playerOneChoice}`);
console.log(`Computer chooses ${computerOneChoice}`);
playerOneChoice === computerOneChoice?console.log("It's a tie!"): 
playerOneChoice === "R" && computerOneChoice ==="S"||
playerOneChoice==="P" && computerOneChoice==="R"||
playerOneChoice==="S" && computerOneChoice === "P"?
console.log("Player Wins"): console.log("Computer Wins");