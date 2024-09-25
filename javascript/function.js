// function getNameFromEmail(email) {
//     const name = email.split('@')[0];
// //    const name = email.slice(0, email.indexOf("@"));
//     return name;
// }
// console.log(getNameFromEmail("emmanuel.essel@gmail.com"));
//-------------------------------------------------------------
//-------------------------------------------------------------

//creating my own propercase function

const toProperCase = (sentence) => {
    
    return sentence.charAt(0).toUpperCase() + sentence.slice(1, sentence.length);
   
    }
console.log(toProperCase('emmanuel'));