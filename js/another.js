const prompt = require("prompt-sync")();

// let myName = "Emmanuel";

// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

// // Write a function that takes a name as input and returns a random character from that name. 
// The function should handle any string length dynamically 
// and return a character each time it is called.



let userName = prompt("Tell us your name: ");
console.log(userName.charAt(Math.floor(Math.random() * userName.length)));