//.reduce():

const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0); // here 0 is the initial value that will be taken by accumulator in beginning

console.log(myTotal);

//acc: 0 and currval: 1
//acc: 1 and currval: 2
//acc: 3 and currval: 3
//6


// 1. **Initial Setup:**
//    - `myNums` is an array containing `[1, 2, 3]`.
//    - The `.reduce()` method is called on `myNums`.
//    - The initial value for `acc` (accumulator) is `0`.

// 2. **First Iteration:**
//    - `acc = 0` (initial value), `currval = 1` (first element in the array).
//    - The callback function logs: `acc: 0 and currval: 1`.
//    - The function returns `acc + currval = 0 + 1 = 1`.
//    - `acc` is now `1`.

// 3. **Second Iteration:**
//    - `acc = 1` (updated accumulator value), `currval = 2` (second element in the array).
//    - The callback function logs: `acc: 1 and currval: 2`.
//    - The function returns `acc + currval = 1 + 2 = 3`.
//    - `acc` is now `3`.

// 4. **Third Iteration:**
//    - `acc = 3` (updated accumulator value), `currval = 3` (third element in the array).
//    - The callback function logs: `acc: 3 and currval: 3`.
//    - The function returns `acc + currval = 3 + 3 = 6`.
//    - `acc` is now `6`.

// 5. **Final Output:**
//    - The `.reduce()` method completes its iterations and returns the final value of `acc`, which is `6`.
//    - `myTotal` is assigned the value `6`.



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The `.reduce()` method in JavaScript is a powerful function used to reduce an array to a single value by iteratively applying a callback function to its elements. 
// This method takes two parameters: the callback function and an optional initial value for the accumulator.

// ### Breakdown of `.reduce()`

// 1. **Accumulator (acc):** The accumulator holds the accumulated value from each iteration, which will eventually be returned as the final result.

// 2. **Current Value (currVal):** The current element in the array being processed.

// 3. **Initial Value:** If provided, this value will be used as the initial value for the accumulator in the first iteration. If not provided, the first element of the array is used as the initial accumulator value, and the iteration starts from the second element.

// 4. **Callback Function:** The callback function is applied to each element of the array. It takes four arguments:
//    - `accumulator`
//    - `currentValue`
//    - `currentIndex` (optional)
//    - `array` (optional)

// The `.reduce()` method works by iterating over the array, applying the callback function to each element, and updating the accumulator with the return value of the callback function.


// ### Example Explanation

// Let's break down the provided example:

// ```javascript
const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0); // here 0 is the initial value that will be taken by accumulator in beginning
```






### Summary

The `.reduce()` method in this example iteratively adds the numbers in the array `[1, 2, 3]`, starting with an initial accumulator value of `0`. 
It logs the intermediate values and returns the total sum, which is `6`.



//----------------------------------------------------------------------------------------------------------------------------

const newTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(newTotal);
//6

//----------------------------------------------------------------------------------------------------------------------------

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
// 22996
