// Immediately Invoked Function Expressions (IIFE)
// immediate calling of a function also it will protect us from the pollution of global variables

//()()

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();
//we should also add ; at end here for IIFE

// we can also do it for arrow function

(() => {
  console.log(`DB CONNECTED`);
})();

// if we want to accept parameters

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

//********************************************************************************************************************** */

// How does javascript execute code + call stack ===>> watch video
