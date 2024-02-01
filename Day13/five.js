// for each    ==>> for arrays

const coding = ["js", "ruby", "java", "python", "cpp"];

//here we use callback functions

//********************************************************************************************************************* */
//A callback function in JavaScript is a function that is passed as an argument to another function and is intended to be executed after the completion of some operation. Callback functions are a fundamental concept in asynchronous programming and are commonly used in scenarios like event handling, asynchronous operations, and more.
//********************************************************************************************************************* */

coding.forEach(function (val) {
  console.log(val);
});

//js
//ruby
//java
//python
//cpp

// using arrow function

coding.forEach((item) => {
  console.log(item);
});

//js
//ruby
//java
//python
//cpp

// we can also define the function somewhere else

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);
// here we only have to give reference of the function we don't have to execute it so we'll not use ()

// accessing multiple parameters in an array:
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

//using array of objects
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item);
});
//{ languageName: 'javascript', languageFileName: 'js' }
//{ languageName: 'java', languageFileName: 'java' }
//{ languageName: 'python', languageFileName: 'py' }

myCoding.forEach((item) => {
  console.log(item.languageName);
});
//javascript
//java
//python
