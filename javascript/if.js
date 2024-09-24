// Write a program that checks if a password meets the following criteria:

// At least 8 characters long.
// Contains at least one uppercase letter.
// Contains at least one lowercase letter.
// Contains at least one digit.
// If the password meets all criteria, print "Password is strong." Otherwise, print "Password is weak."
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

const prompt = require("prompt-sync")();

// let userPassword = prompt("Enter password: ");
// function isUpper() {
//     return /[A-Z]/.test(userPassword);
// }
// function isLower() {
//     return /[a - z]/.test(userPassword);
// }
// function isDigit() {
//     return /\d/.test(userPassword);
// }
// function checklength() {
//     return userPassword.length >= 8;
// }

// if(checklength && isDigit() && isLower() && isUpper()) {
//     console.log("You have a strong Password")
// } else {
//     console.log("Password is weak!")
// }

//using ternary operators instead
let userPassword = prompt("Enter password: ");
function isUpper() {
    return /[A-Z]/.test(userPassword);
}
function isLower() {
    return /[a - z]/.test(userPassword);
}
function isDigit() {
    return /\d/.test(userPassword);
}
function checklength() {
    return userPassword.length >= 8;
}

checklength && isDigit() && isLower() && isUpper()? console.log("You have a strong Password"): console.log("Password is weak!");