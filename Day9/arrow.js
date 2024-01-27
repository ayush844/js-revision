//************************************************* THIS ******************************************************************* */

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // "this." will be used to access all the elements present inside this scope
        console.log(`${this.username} , welcome to website`);

        console.log(this);
        // {
        //  username: 'hitesh',
        //  price: 999,
        //  welcomeMessage: [Function: welcomeMessage]
        // }
    }

}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() ==> sam , welcome to website



console.log(this);  // we'll get empty object here when we print this in node enviorment
// {}



// in browser if we print console.log(this) we'll get window object which will have things like click, formsubmit, fetch, length etc..


//----------------------------------------------------------------------------------------------------------------------


//*********************************************************** */

function chai(){
    // let username = "hitesh"
    console.log(this);// we'll get a long object
}

chai()

// in functions we should not use this. to get variable declared inside the function

function chai2(){
    let username = "hitesh"
    console.log(this.username);// undefined
}

chai2()

//*********************************************************** */


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);    undefined
// }



//******************************************   ARROW FUNCTION   ************************************************************ */



const chai3 =  () => {

    let username = "hitesh"
    // console.log(this.username); => undefined
    //******************************************************************** */
    console.log(this);       // this will give us an empty array, this is also a major difference b/w arrow functions & normal 
    // {}                       functions
    //******************************************************************** */

}

chai3() 




// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // IMPLICIT RETURN => when we don't use curly braces({}) in arrow function and also don't use return keyword

// const addTwo = (num1, num2) => ( num1 + num2 ) // IMPLICIT RETURN 


//***************************************************************************** */
//if we use curly braces ({}) then we always have to write write return keyword, in other cases we don't write it
//***************************************************************************** */


// returning object 

const addTwo = (num1, num2) => ({username: "hitesh"})// to return object we have to wrap it inside paranthesis ()


console.log(addTwo(3, 4))

