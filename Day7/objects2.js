// const tinderUser = new Object()  ==> this is a singleton object
// console.log(tinderUser); ==> {}


const tinderUser = {}   // ==> this is a non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  ==> {}

const regularUser = {
    email: "some@gmail.com",

    //nesting of objects
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// hitesh



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = { obj1, obj2 }
// // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// const obj3 = Object.assign({}, obj1, obj2, obj4) => .assign() returns a combined new object
// // all(abj1, obj2 and obj4) will get inside {}, {} is target. If we don't give it and write Object.assign( obj1, obj2, obj4), then all values will add to obj1.
// // // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const obj3 = {...obj1, ...obj2}
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


console.log(obj3);



// arrays of objects

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// to access something inside an array of the object

users[1].email






console.log(tinderUser);
// { id: '123abc', name: 'Sammy', isLoggedIn: false }


console.log(Object.keys(tinderUser)); // => array of all the keys
// [ 'id', 'name', 'isLoggedIn' ]


console.log(Object.values(tinderUser)); // => array of all the values
// [ '123abc', 'Sammy', false ]


console.log(Object.entries(tinderUser));// => Returns an array of array containing key & values of the object
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Determines whether an object has a property with the specified name.
// true






const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ayush"
}

// course.courseInstructor


//object destructuring: 

// const {courseInstructor} = course;
// console.log(courseInstructor);
// // ayush

// we can also give customized name to acces a particular value in object
const {courseInstructor: instructor} = course
console.log(instructor);
// ayush


// this is how json looks like:
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
