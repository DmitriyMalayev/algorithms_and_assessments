let add = function (a) {
  return function (b) {
    return a + b
  }
}

let addToFive = add(5)
//addToFive returns a function just like add(5)

console.log(addToFive(1))



