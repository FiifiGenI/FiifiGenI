// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// // let myName = "Emmanuel";

// // console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

// // // Write a function that takes a name as input and returns a random character from that name. 
// // The function should handle any string length dynamically 
// // and return a character each time it is called.



// let userName = prompt("Tell us your name: ");
// console.log(userName.charAt(Math.floor(Math.random() * userName.length)));

let playGame = confirm("Shall we play a game ?");
if (playGame){
    let userConfirmation = confirm("The game is Rock, Paper, Scissors.");
    if(userConfirmation){
        let userChoice = prompt("Enter R for Rock, P for Paper and S for Scissors: ").toUpperCase();
        if (userChoice) {
            if (userChoice === "R" || userChoice === "S" || userChoice === "P"){
                let computerChoice = Math.floor(Math.random()* 3 + 1);
                let computer = computerChoice === 1?"R": computerChoice=== 2?"S": "P";
                let result = 
                userChoice === computer?window.alert("It's a tie!"): 
                userChoice === "R" && computer ==="S"||
                userChoice==="P" && computer==="R"||
                userChoice==="S" && computer === "P"?
                "You Win, Congratulations!!": "Computer Wins";
                alert(`Player choses ${userChoice} \nComputer chooses ${computer} \n${result}`);
                
                let playAgain = confirm("Do you want to play again?");
                if (playAgain) {
                    location.reload(true);

                } else {
                    alert("Okay, thank you for playing")
                }

            } else {
                alert("You have not entered R or S or P");
            }

        }else {
            alert("You have not entered any value,");
            
        }

    }else {
        alert("I guess you changed your mind, next time then ...")
    }

}else {
    alert("Okay, let's do that next time then")
}