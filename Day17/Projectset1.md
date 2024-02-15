# project related to DOM

## project link:

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-9hxqch?file=3-DigitalClock%2Fchaiaurcode.js,index.html)

# solution code

## project 1:

```javascript
const body = document.querySelector("body");

const buttons = document.querySelectorAll(".button");

console.log(buttons);
// NodeList{0: {…}, 1: {…}, 2: {…}, 3: {…}}

buttons.forEach((btn) => {
  console.log(btn);
  // HTMLSpanElement{attributes: {…}, innerHTML: "", nodeType: 1, tagName: "span"}
  // HTMLSpanElement{attributes: {…}, innerHTML: "", nodeType: 1, tagName: "span"}
  // HTMLSpanElement{attributes: {…}, innerHTML: "", nodeType: 1, tagName: "span"}
  // HTMLSpanElement{attributes: {…}, innerHTML: "", nodeType: 1, tagName: "span"}

  btn.addEventListener("click", (e) => {
    console.log(e);
    // PointerEvent{isTrusted: true}

    console.log(e.target);
    // HTMLSpanElement{attributes: {class: "button", id: "grey"}, innerHTML: "", nodeType: 1, tagName: "span"}

    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2:

```javascript
const form = document.querySelector("form");

console.log(form);
// HTMLFormElement{attributes: {…}, innerHTML: "\n <p><label>Height in CM: </label><input type=\"text\" id=\"height\"></p>\n <p><label>Weight in KG: </label><in…", nodeType: 1, tagName: "form"}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (
    height === "" ||
    height < 0 ||
    isNaN(height) ||
    weight === "" ||
    weight < 0 ||
    isNaN(weight)
  ) {
    results.innerHTML = "please enter a valid value";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## project 3

```javascript
const clock = document.getElementById("clock");

let date = new Date();
let time = date.toLocaleTimeString();

setInterval(() => {
  let date = new Date();
  time = date.toLocaleTimeString();
  clock.innerHTML = `${time}`;
}, 1000);
```

## project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numOfGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  // check if guess is valid or not
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("please enter a number b/w 1 to 100");
  } else {
    prevGuess.push(guess);

    if (numOfGuesses === 10) {
      displayGuess(guess);
      displayMessage(`game over! random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  // tell if value is high or low or equal
  if (guess === randomNumber) {
    displayMessage("you guessed it right");
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(" your guess is high");
  } else if (guess < randomNumber) {
    displayMessage("your guess is low");
  }
};

const displayGuess = (guess) => {
  userInput.value = "";

  guessSlot.innerHTML += ` ${guess}`;
  numOfGuesses++;

  remaining.innerHTML = `${11 - numOfGuesses}`;
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  playGame = false;
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">START A NEW GAME</h2>`;
  startOver.appendChild(p);
  newGame();
};

const newGame = () => {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuesses = 1;
    lowOrHi.innerHTML = "";
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numOfGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
};
```
