// on the basis of how data is stored in memory and how it is accessed, there are 2 types of data types


//  PRIMITIVE  (all of these are call by value, whenever we use it we don't get its actual reference but we are given its copy to do our operations)

//  7 types : String, Number, Boolearn, null, undefined, Symbol (for making values unique), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
//false as both will be considered unique

// const bigNumber = 3456543576654356754n


// type of null => object

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// REFERENCE(Non primitive)

// Array, Objects, Functions   

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
//symbol


//type of myFunction => function (it is object function)

//Return type of variables in JavaScript
//1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

//2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object


/****************************************************************************************************************** */

// JavaScript is a dynamically typed programming language. In a dynamically typed language like JavaScript, variable types are not explicitly declared, and the type of a variable can change during runtime. This flexibility allows for more dynamic and concise code but may also lead to certain types of errors that might only be discovered at runtime.

// In contrast, a statically typed language requires variable types to be explicitly declared, and the type of a variable is determined at compile-time. Errors related to type mismatches are typically caught during the compilation process in statically typed languages, providing a level of safety at the cost of some flexibility.

/****************************************************************************************************************** */
