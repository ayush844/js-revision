const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // whole array will be added as an element in our array(marvel_heros)

console.log(marvel_heros)
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// here we can access the elements of the inner array as:
console.log(marvel_heros[3][1]);
// flash


//************************************************************************************************************************* */

// .concat():  Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//we can merge multiple arrays using concat as well like spread syntax..

const Array1 = [1,2,3,4,5];
const Array2 = [5,6,7,8,9,10];
const Array3 = [0,0,0];
const Array4 = [1,3,9,19];
const concatAll = Array1.concat(Array2, Array3,Array4)
console.log(concatAll)
//[
//    1, 2, 3,  4, 5, 5, 6,
//    7, 8, 9, 10, 0, 0, 0,
//    1, 3, 9, 19
// ]


//marvel_heros =>  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//dc_heros => ["superman", "flash", "batman"]

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
//[
//    'thor',
//    'Ironman',
//    'spiderman',
//    [ 'superman', 'flash', 'batman' ],
//    'superman',
//    'flash',
//    'batman'
// ]

//************************************************************************************************************************* */


//SPREAD OPERATOR : this is most used

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);
//[
//    'thor',
//    'Ironman',
//    'spiderman',
//    [ 'superman', 'flash', 'batman' ],
//    'superman',
//    'flash',
//    'batman'
// ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//.flat() => Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const real_another_array = another_array.flat(1)
console.log(real_another_array);
// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]


const real_another_array_two = another_array.flat(Infinity)
console.log(real_another_array_two);
// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]




console.log(Array.isArray("Hitesh")) // tells if the given thing is an array or not
// false

console.log(Array.from("Hitesh")) // creates an array with an iterable object


console.log(Array.from({name: "hitesh"})) // it can't be converted to array because we don't know what we want to make array of its key or values

// []



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.