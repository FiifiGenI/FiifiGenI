// if (condition) {
//     what to do
// // }
// --------------------------

const prompt = require("prompt-sync")();

let testScore = parseInt(prompt("Enter score here: "));
let grade;

if (testScore >=90){
    grade = "A";
} else if (testScore >=80) {
    grade = "B";
} else if(testScore >=70) {
    grade = "C";
} else if(testScore >=60){
    grade = "D"
} else {
    grade = "F"
}
console.log(grade)
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// Challenge 1: Simple Voting Eligibility
// Write a program that checks if a person is eligible to vote. The criteria are:

// The person must be at least 18 years old.
// The person must be a citizen.
// If the person meets both criteria, print "Eligible to vote." Otherwise, print "Not eligible to vote."

let age = parseInt(prompt("Please enter your age: "));
let iscitizen = prompt("Are you are citizen: Y for Yes or N for No:   ").toUpperCase();

if(age >= 18 && iscitizen === "Y"){
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote")
}
// -------------------------------------------------------
// -------------------------------------------------------

// Write a program that takes a number from the user and checks whether it is odd or even.
//  Print "The number is even." if it is even and "The number is odd." if it is odd.

let userInput = parseInt(prompt("Please enter the number: "));
if (userInput % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd")
}