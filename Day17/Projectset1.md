# project related to DOM

## project link:

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-9hxqch?file=1-colorChanger%2Fchaiaurcode.js,index.html)

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
