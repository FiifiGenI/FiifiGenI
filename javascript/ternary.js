// const prompt = require("prompt-sync")();

// let response= prompt("Enter something: ")

// let checkResponse = response ? `Yes you entered: ${response}`: "No response yet";
// console.log(checkResponse);

// //---------------------------------------------------

// let enteredData = (prompt("Enter something: "));
// let checkNumberInData = /\d/.test(enteredData)?`${enteredData} contains a number`: "there is no number in what you entered";
// console.log(checkNumberInData);

// //------------------------------------------------------
// // Even or Odd Checker
// // Write a function isEven that takes a number as input and returns "Even" 
// // if the number is even and "Odd" if the number is odd.
// //---------------------------------------------------------
// let isEven = () => {
//     let userNumber = parseInt(prompt("Enter a number: "), 10);  // Added base 10 for parseInt
//     return userNumber % 2 === 0 ? `${userNumber} is an even number` : `${userNumber} is an odd number`;
// };

// console.log(isEven());  // Call the function to see the result

//-------------------------------------------------------------
//soup access

// let soup = "Palm Nut Soup";
// let isCustomerActive;

// let soupAccess = isCustomerActive && soup?`Yes we have ${soup} today`: "Sorry soup is not available"
// console.log(soupAccess)


let newValue = confirm("Ok === Trues \n Cancel===False");