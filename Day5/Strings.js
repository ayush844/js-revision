const myName = "ayush"
const repoCount = 30

console.log(myName + repoCount + " Value");
// ayush30 Value


// string interpolation
console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);
// Hello my name is ayush and my repo count is 30


// we can also declare a string(as an object) like this:
const gameName = new String('hitesh-hc-com')


console.log(gameName[0]);
// h

console.log(gameName.__proto__); // to get the prototype
// {}

console.log(gameName.length);
// 13

console.log(gameName.toUpperCase());
// HITESH-HC-COM

console.log(gameName.charAt(2));
//t

console.log(gameName.indexOf('t'));
// 2



const newString = gameName.substring(0, 4) // (startingIndex(included), endingIndex(excluding))
console.log(newString);
// hite

const anotherString = gameName.slice(-8, 10) // (startingIndex(included), endingIndex(excluding))
console.log(anotherString);
// h-hc-

// in slices we can also give negative index which we can not do in substring() [in substring if we give -ve index it will take it as zero]


const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());
// hitesh



const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
// https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))
// false

console.log(gameName.split('-')); // to convert string to an array based on wherever - is present


