// for in

//we can use it for objects

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

//js shortcut is for javascript
//cpp shortcut is for C++
//rb shortcut is for ruby
//swift shortcut is for swift by apple

// for in can also be used for arrays

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(key); // it will tell us all the key
}
// keys of array are indexes
//0
//1
//2
//3
//4

for (const key in programming) {
  console.log(programming[key]);
}

//js
//rb
//py
//java
//cpp

//***************************************************************************************************************************** */
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// for (const key in map) {
//   console.log(key);
// }

// //nothing will be printed because maps are not iterable

//***************************************************************************************************************************** */
