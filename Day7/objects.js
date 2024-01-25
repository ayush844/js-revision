// singleton
// Object.create => whenever we use this method to create object in that case singleton is formed. this way is constructor     method


// object literals => Object literals in JavaScript are a way to create objects on the fly. Object literals are commonly used for creating simple objects without the need for defining a separate class or constructor function.

//using symbol as key
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // to use a symbol as a key we'll put it inside [] 
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email) // hitesh@google.com

// instead of using . we can also acces value using [], if we are using this method then we have to give name of key as string inside [].

console.log(JsUser["email"]) // hitesh@google.com

console.log(JsUser["full name"]) // Hitesh Choudhary

// to get values whose key is a symbol
console.log(JsUser[mySym]) // mykey1



// to change value in object

JsUser.email = "hitesh@chatgpt.com"

//Object.freeze(JsUser) // if we want to freeze values of our object so that no one can change it

JsUser.email = "hitesh@microsoft.com" // after freezing if we do this, we'll not get error but value of email will not be updated

console.log(JsUser);

//{
//    name: 'Hitesh',
//    'full name': 'Hitesh Choudhary',
//    age: 18,
//    location: 'Jaipur',
//    email: 'hitesh@chatgpt.com',
//    isLoggedIn: false,
//    lastLoginDays: [ 'Monday', 'Saturday' ],
//    [Symbol(key1)]: 'mykey1'
// }




JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    // here since we are referencing the same object we can use this keyword
}

console.log(JsUser.greeting);
// [Function (anonymous)]  => function is not executed we are only getting its reference

console.log(JsUser.greeting());
// Hello JS user

console.log(JsUser.greetingTwo());
// Hello JS user, Hitesh