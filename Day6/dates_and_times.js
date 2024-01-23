// Dates

let myDate = new Date()

console.log(myDate)
// 2024-01-23T07:56:46.703Z

// to convert it to readable form we'll convert it to string

console.log(myDate.toString());
// Tue Jan 23 2024 13:25:14 GMT+0530 (India Standard Time)



console.log(myDate.toDateString());
// Tue Jan 23 2024

console.log(myDate.toLocaleString());
// 1/23/2024, 1:25:14 PM

console.log(typeof myDate);
// object


// months in JS starts from 0

// let myCreatedDate = new Date(2023, 0, 23) // 1/23/2023, 12:00:00 AM

//let myCreatedDate = new Date(2023, 0, 23, 5, 3) // 1/23/2023, 5:03:00 AM

//let myCreatedDate = new Date("2023-01-14") // 1/14/2023, 5:30:00 AM




let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());
// 1/14/2023, 12:00:00 AM

console.log(myCreatedDate.getTime()); // return value of time (in milisecond) from jan 1 to til this day

console.log(Math.floor(Date.now()/1000)); // time in seconds



let myTimeStamp = Date.now(); // will tell exact date and time of right now (in mili seconds)

console.log(myTimeStamp); // time in mili seconds

console.log(Math.floor(Date.now()/1000)); // time in seconds




// today is 23 jan 2024   [TUESDAY]

let newDate = new Date()
console.log(newDate); // 2024-01-23T10:29:03.073Z
console.log(newDate.getMonth() + 1); // 1
console.log(newDate.getDay()); // 2
// time is 16:15
console.log(newDate.getHours()); // 16
console.log(newDate.getMinutes());  // 15



// `${newDate.getDay()} and the time `



// we can customize the format of date
newDate.toLocaleString('default', {
    weekday: "long",
})