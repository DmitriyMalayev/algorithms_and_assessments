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


```js
// function declaration
function greet() {
  //hoisted (works if present in the end)
  console.log("hello there");
}

// function expression (preferred)
const speak = function () {
  console.log("good day!");
};

// greet();
// greet();

speak();

//arguments and parameters

const speak = function (name = "Luigi", time = "Night") {
  //parameter
  console.log(`good ${time} ${name}`);
};

speak("mario"); //argument

const calcArea = function(radius) {
  let area = 3.14 * radius ** 2;
  return area;
};

const area = calcArea(5)
console.log(area); //


const calcArea = function(radius) {
  return 3.14 * radius ** 2 
};

const area = calcArea(5)
console.log(area); //


const greet = function(){
  return "hello world"
}

let greet = () => return { "Hello World"}


const bill = function(products, tax){
  let total = 0
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] + tax
  }
  return total
}

```