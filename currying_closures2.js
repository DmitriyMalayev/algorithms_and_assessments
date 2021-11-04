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

