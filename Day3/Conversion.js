let score = "33abc"

//console.log(typeof score);
//console.log(typeof(score));

//both are same



let valueInNumber = Number(score)
// console.log(typeof valueInNumber); => number
// console.log(valueInNumber); => NaN
 


//score = "33" => 33
//score = "33abc" => NaN [not a number]
//score = undefined => NaN [not a number]
//score = null => 0
// score =  true => 1
//score = false => 0


//in all the above cases the type of score wwill be number 

//-----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------



let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// isLoggedIn =  1 => true;  isLoggedIn = 0 => false
//  isLoggedIn = "" => false
//  isLoggedIn = "hitesh" => true

//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);   33
// console.log(typeof stringNumber);   string


// ********************************************************** 
// *********************** Operations ***********************
// ********************************************************** 

let value = 3
let negValue = -value

console.log(negValue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);
//hello hitesh

console.log("1" + 2);
// 12
console.log(1 + "2");
// 12
console.log("1" + 2 + 2);
// 122
console.log(1 + 2 + "2");
// 32

console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion 