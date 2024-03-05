
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. 

//-------------------------------------------------------------------------------------------------------------------------
// creating a promise
const promiseOne = new Promise((resolve, reject)=>{
    // do a async task here
    // // DB calls, cryptography, network

    setTimeout(()=>{
        console.log("async task is completed");
        resolve();
    }, 1000)

});
// A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.


// here .then() for promise is connected to resolve parameter inside function in our promise
// resolve need to be called in order to .then to run
promiseOne.then(()=>{
    console.log("promise is consumed");
})


//-------------------------------------------------------------------------------------------------------------------------


// we can do above 2 part in a single way:

new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("hello brother");
        resolve();
    }, 1000)
}).then(()=>{
    console.log("hi brother");
})

// -----------------------------------------------------------------------------------------------------------------------

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // we can parameters to then() through resolve
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    // { username: 'Chai', email: 'chai@example.com' }
})

// -------------------------------------------------------------------------------------------------------------------------


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username //passed to next .then()
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

// if error is set to true:
//ERROR: Something went wrong
//The promise is either resolved or rejected

// if error is set to false:
//{ username: 'hitesh', password: '123' }
//hitesh

// -------------------------------------------------------------------------------------------------------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "ayush", password: "844"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// we can also handle promises with async await, here is how:
async function consumePromiseFive(){

// with async await we need to use trycatch for error handling

    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log("hello");
        console.log(error);
    }
}

consumePromiseFive()


// if error = true :
//hello
//ERROR: JS went wrong

// if error = false :
// { username: 'ayush', password: '844' }

// -------------------------------------------------------------------------------------------------------------------------

// how we use it in real life

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

// -------------------------------------------------------------------------------------------------------------------------

// Promise.all()

//The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------


fetch('https://api.github.com/users/ayush844')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


// this fetch function will execute before the all the the code above because fetch functions are placed in special queue (priority queue / microtask queue) which is given priority so it gets in the call stack before anyone else.


// study it from hitesh choudhary fetch video in js playlist(chai aur code)


//A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

