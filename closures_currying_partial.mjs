/*
Currying vs. Partial Application

Closures
  Function which returns a function that has access to the returned function's scope


  function example(param) {
    let fruit = "apple"
    return function (otherParam) {
      Both param, otherParam and apple are accessible here
    };
  }
  
Partial Application
  Uses Closures 
  The returned function is partially applied to a new value.
  This means that the value passed to the original function is already attached to the returned "partially applied" function. 

Currying
  The process of taking a multiple argument function and breaking it up into a series of single argument partially applied functions. 
*/

function bakeChocolateCake(cakeType, cakeFlavor, icingType) {
  return `I made a ${cakeFlavor} ${cakeType} with ${icingType} icing`;
}

function bakeVanillaCake(cakeType, cakeFlavor, icingType) {
  return `I made a ${cakeFlavor} ${cakeType} with ${icingType} icing`;
}

//Currying
function bake(cakeType) {
  return function (cakeFlavor) {
    return function (icingType) {
      return `I made a ${cakeFlavor} ${cakeType} with ${icingType} icing`;
    };
  };
}

let bakeCake = bake("cake");

let bakeCupcake = bake("cupcake");
let bakeMuffin = bake("muffin");

let chocCake = bakeCake("chocolate");
let vanillaCake = bakeCake("vanilla");
let chocCupcake = bakeCupcake("chocolate");
let carrotMuffin = bakeMuffin("carrot");

//Just adding argument for icingType
console.log(chocCake("strawberry"));
console.log(chocCake("vanilla"));
console.log(chocCupcake("chocolate"));
console.log(chocCupcake("orange"));

// Composing
console.log(bake("cake")("chocolate")("vanilla"));
console.log(bake("cupcake")("chocolate")("cherry"));
console.log(bake("muffin")("carrot")("vanilla"));


// Real World Example

