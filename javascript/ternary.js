const prompt = require("prompt-sync")();

let response= prompt("Enter something: ")

let checkResponse = response ? `Yes you entered: ${response}`: "No response yet";
console.log(checkResponse);

//---------------------------------------------------

let enteredData = (prompt("Enter something: "));
let checkNumberInData = /\d/.test(enteredData)?`${enteredData} contains a number`: "there is no number in what you entered";
console.log(checkNumberInData);