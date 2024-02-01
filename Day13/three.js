// for of  => these are specific for arrays and strings and maps

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

//1
//2
//3
//4
//5

const greetings = "Hello world!";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

//Each char is H
//Each char is e
//Each char is l
//Each char is l
//Each char is o
//Each char is
//Each char is w
//Each char is o
//Each char is r
//Each char is l
//Each char is d
//Each char is !

//--------------------------------------------------------------------------------------------------------------------

// Maps

// it contains unique values
//In a JavaScript Map, each key must be unique. If you attempt to set a value for an existing key, the new value will overwrite the existing one. This is because a Map is designed to store key-value pairs where each key is unique, and the purpose is to provide a way to associate values with distinct keys.

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

console.log(map);

//Map(3) {
//    'IN' => 'India',
//    'USA' => 'United States of America',
//    'Fr' => 'France'
//  }

// using loop on map

for (const element of map) {
  console.log(element);
}

//[ 'IN', 'India' ]
//[ 'USA', 'United States of America' ]
//[ 'Fr', 'France' ]

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

//IN :- India
//USA :- United States of America
//Fr :- France

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }
// //ERROR:-  myObject is not iterable

//we can not iterate like this through an object
