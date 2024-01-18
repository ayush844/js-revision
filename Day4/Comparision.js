//******* BASIC COMPARISIONS ******* /
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
//true 

// console.log("02" > 1);
//true


//-------------------------------------------------------------------------------------------------
console.log(null > 0);
//false

console.log(null == 0);
//false

console.log(null >= 0);
//true


//the reason for this is that equality(==) and comparision operator(> < >= <=) work differently.
//comparision converts null to a number and treat it as zero


//-------------------------------------------------------------------------------------------------

//here if we use undefined instead of null it will give result in all cases 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
//( === ) also checks for the same data type of the values
console.log("2" === 2);