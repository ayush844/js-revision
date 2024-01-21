const score = 400
console.log(score);
// 400

// explicitly defining number 
const balance = new Number(100)
console.log(balance);
// [Number: 100]


console.log(balance.toString().length);
// 3

console.log(balance.toFixed(3)); // for defining precission value
100.000


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); //it returns a string with a number that is precise for total 3 digits from start
// 124

const newNumber = 123.5
console.log(newNumber.toPrecision(3));
//124


const hundreds = 1000000
console.log(hundreds.toLocaleString());
// 1,000,000
console.log(hundreds.toLocaleString('en-IN'));
// 10,00,000


// +++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
// Object [Math] {}

console.log(Math.abs(-4)); //absolute value
// 4

console.log(Math.round(4.6)); // round off the value
// 5

console.log(Math.ceil(4.2)); // tells the upper limit
// 5

console.log(Math.floor(4.9)); // tells the lower limit
// 4

console.log(Math.min(4, 3, 6, 8)); //tells the minimum value
//3

console.log(Math.max(4, 3, 6, 8)); //tells the maximum value
// 8


console.log(Math.random()); //picks a random decimal between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)