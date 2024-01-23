// array

// in js an array can contain element of multiple type of data types and arrays in js are resizable
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

//***************************************************************************************************************** */

// in js, while copy operation array do shallow copy(shares same reference point) i.e. the change in array will lead to change in the original array  

//***************************************************************************************************************** */


const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2); // [ 1, 2, 3, 4 ]




/////////////////////////////////////////////// Array methods ///////////////////////////////////////////////


//    PUSH AND POP

myArr.push(6)
myArr.push(7)
console.log(myArr)
//[
//    0, 1, 2, 3,
//    4, 5, 6, 7
// ]

myArr.pop()
console.log(myArr)
//[
//    0, 1, 2, 3,
//    4, 5, 6
//]


// UNSHIFT AND SHIFT

myArr.unshift(9) // will add 9 in starting of an array, but this method is not advised to use since it shifts all elements to right

console.log(myArr)
//[
//    9, 0, 1, 2,
//    3, 4, 5, 6
//]



myArr.shift() // will remove the first element from the array

console.log(myArr)
//[
//    0, 1, 2, 3,
//    4, 5, 6
//]



console.log(myArr.includes(9));  // false
console.log(myArr.indexOf(3));  // 3  (if it will not exist the result will be -1)



const newArr = myArr.join()  // Adds all the elements of an array into a string, separated by the specified separator string.

console.log(myArr);
//[
//    0, 1, 2, 3,
//    4, 5, 6
//]

console.log( newArr);
// 0,1,2,3,4,5,6

console.log(typeof myArr);
// object

console.log(typeof newArr);
// string


//******************************************** IMPORTANT ********************************************** */


// slice, splice

//slice:  returns a copy of the section of an array
//splice: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.



console.log("A ", myArr);
//A  [
//    0, 1, 2, 3,
//    4, 5, 6
//  ]

const myn1 = myArr.slice(1, 3) // create subarray from beginning index(included){1} to ending index (excluding) {3}

console.log(myn1); // [ 1, 2 ]

console.log("B ", myArr); // here our original array remain the same
//B  [
//    0, 1, 2, 3,
//    4, 5, 6
//  ]


const myn2 = myArr.splice(1, 3) // deletes elements in array from beginning index(included){1} to ending index (included) {3}

console.log("C ", myArr); // original array changes here ******
// C  [ 0, 4, 5, 6 ]

console.log(myn2);
// [ 1, 2, 3 ]