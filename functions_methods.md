```js
const name = "Shaun";

//functions
const greet = () => "hello";

let resultOne = greet();
console.log(resultOne);

//methods
let resultTwo = name.toUpperCase();
console.log(resultTwo);

//Methods are functions that are associated with an object or data type

//Callbacks and forEach

const myFunc = (callBackFunc) => {
  let value = 50;
  callBackFunc(50);
};

myFunc((value) => {
  console.log(value);
});

let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach(function (person) {
  console.log(person);
});

people.forEach((person, index) => {
  console.log(person);
});
people.forEach(logPerson);

const ul = document.querySelector(".people");
let html = "";

people.forEach((person) => {
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
```
