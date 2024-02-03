const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  //console.log(item);
  return item;
});

console.log(values); //undefined

//the function inside foreach loop cann't return anything

//---------------------------------------------------------------------------------------------------------

// therefore we'll use filter and map and reduce

//FILTER:

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  //here return keyword is necessary
  return num > 4;
});

console.log(newNums); // returns an array that contain elements of our original array that satisfy the given condition
// [ 5, 6, 7, 8, 9, 10 ]

// how will we do samething with foreach:

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);
// // [ 5, 6, 7, 8, 9, 10 ]

//---------------------------------------------------------------------------------------------------------

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

console.log(userBooks);

//[
//    {
//        title: 'Book Three',
//        genre: 'History',
//        publish: 1999,
//        edition: 2007
//      },
//      {
//        title: 'Book Seven',
//        genre: 'History',
//        publish: 1986,
//        edition: 1996
//      }
//  ]

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);

//[
//    {
//        title: 'Book Three',
//        genre: 'History',
//        publish: 1999,
//        edition: 2007
//     }
//  ]
