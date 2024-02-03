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
