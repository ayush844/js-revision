// if
const isUserloggedIn = true;
const temperature = 41;

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

//----------------------------------------------------------------------------------------------------------------------

const score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}

//  console.log(`User power: ${power}`); // error : POWER IS NOT DEFINED

// here power is out of scope
//if we declare power with var (we should not) then its scope will be global

//------------------------------------------------------------------------------------------------------------------

// const balance = 1000

//IMPLICIT SCOPE: if we write code in single line

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

//------------------------------------------------------------------------------------------------------------------

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

//and
if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

//or
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
