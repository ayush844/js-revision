// let var const

// scope=> conditions, functions, loops => {}

var c = 300
let a = 200
if (true) {
    let a = 10
    const b = 20
    var c = 123
    console.log("INNER: ", a);// 10
    
}



console.log(a); // 200  > here we can not access the a that is defined inside block

// console.log(b);// error => as it is defined inside the block

console.log(c); // 123
// here console.log(c) is showing the value that is present in the block, 

// THIS IS BECAUSE, var have a global scope and not a local scope

//that's why we should not use var for declaring variables


//************IMPORTANT*************** */
//the scope that we see here(in our terminal) is different from the scope that we'll see in the console in our browser(in developer's tool)
//************************************* */



//******************************** NESTED SCOPE ************************************* */

function one(){
    const username = "ayush"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website); //=> ERROR: website is not defined

     two() // => ayush

}

one()

// one(function) can not access any variable declared inside two(function) but inner function can access variable declared inside outer function this is called closure

//*********************************************************************************************************************** */
// A closure in JavaScript is a combination of a function and the lexical environment within which that function is declared. It allows the function to access variables from its outer (enclosing) scope even after the outer function has completed execution. Closures provide a way for functions to retain access to the variables of the surrounding context, creating a persistent link between the function and its original scope.
//*********************************************************************************************************************** */




if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); // hitesh youtube
    }
    //console.log(website); //=> ERROR: website is not defined
}

// console.log(username); //=> ERROR: username is not defined




// ++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++


console.log(addone(5)) // 6 this will run fine (no error)

function addone(num){
    return num + 1
}

console.log(addone(5))  // 6 this will run fine (no error)


// if we declare function in a different way, 

addTwo(5) // ERROR: Cannot access 'addTwo' before initialization

const addTwo = function(num){       //when functions are declared like this they are called expressions
    return num + 2
}

addTwo(5)   // 7 this will run fine (no error)


//  HOISTING:
// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or call a function even before it's declared in the code.