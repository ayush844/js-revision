# project related to async

## project1 link:

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-a8tifc?file=6-unlimitedColors%2Fchaiaurcode.js,6-unlimitedColors%2Findex.html)

# solution code

## project:

```javascript
const randomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1500);
  }

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = randomColor();
  }, 1500);
};

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```


## project2 link:

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-a8tifc?file=5-keyboard%2Fchaiaurcode.js,5-keyboard%2Findex.html)

# solution code

## project:


```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="color">
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});

```