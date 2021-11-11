let add = function (a) {
  return function (b) {
    return a + b
  }
}

let addToFive = add(5)
//addToFive returns a function just like add(5)

console.log(addToFive(1))



"use strict";

// ...n   n number of arguments

let avg = function (...n) {
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    total += n[i];
  }
  return total / n.length;
};

let spicedUpCode = function (fn, ...n) {
  return function (...m) {
    return fn.apply(this, n.concat(m));
  };
};

let doAvg = spiceUp(avg, 1, 2, 3);
console.log(doAvg(4, 5, 6));

let sayWhat = function (a) {
  return function (b) {
    return function (c) {
      console.log(`saying ${a} to ${b} using ${c}`);
    };
  };
};

sayWhat("Hello")("My Friends")("JavaScript")


let sayHi = sawWhat("Hi")
let sayHiToMe = sayHi("Me")
let sayHiToMeUsingNothing = sayHiToMe("nothing")

//say Hi to Me using nothing
