
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }


// for arguements we don't need to give its type
function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)// here if in function we don't return anything then value of result will be undefined

// console.log("Result: ", result);



// we can also give default value for parameters in function
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
// sam just logged in

console.log(loginUserMessage("hitesh"))
// hitesh just logged in

// if in above functrion default value is not given and no arguement is passed during function call then console.log will be:
// undefined just logged in





// here ... is representing rest operator (not spread operator)
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// all the values after the first 2 values will be stored inside num1 as an array

console.log(calculateCartPrice(200, 400, 500, 2000, 3000, 4000))
// [ 500, 2000, 3000, 4000 ]


// if in function call we give many arguments but if we have only one parameter inside function then it will take only 1rst parameter






const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
//Username is hitesh and price is undefined ==> here since there is no key named price we'll be getting undefined



handleObject({
    username: "sam",
    price: 399
})
// Username is sam and price is 399




const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 500, 1000]));

// 400