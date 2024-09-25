const prompt = require("prompt-sync")(); // import prompt-sync

let userResponse = prompt("Shall we play a game of Rock, Paper and Scissors ? Y for Yes and N for No").toUpperCase();
while (userResponse) {
    if (userResponse === "Y"){
        //user makes a choice
        let userChoice = prompt("Welcome to the game. \nPlease Enter R for Rock, S for Scissors, or P for Paper: ").toUpperCase();
        let user = userChoice === "R"? "rock":
        userChoice === "S"? "Scissors":
        userChoice === "P"?"Paper":
        "Please enter the right letter";
        
        //computer makes a choice
        const rpsArray = ['rock', 'paper', 'scissors'];
        let computerChoice = Math.floor(Math.random() * 3);
        let computer = rpsArray[computerChoice];

        //displaying the computer and user choices
        console.log(`You chose: ${user} and the Computer chose: ${computer}`);

        //deciding a tie or a winner
        if (user === computer) {
            console.log("Its a tie");
            continue;
        }else {
            if (user === "rock" && computer === "scissors" || user === "paper" && computer === "rock" || user === 'scissors' && computer === "paper"){
                console.log("You win, congratulations");
                var playAgain = prompt("Do you want to play again?: Y for Yes, N for No: ")
                if (playAgain === "Y"){
                    continue;
            }else {
                break;
            } 
                
            } else {
                console.log("Computer Wins")
                break;
            }
        }        
    } else {
        console.log("That's understandable, let's do that later then...")
        break;
    }

};