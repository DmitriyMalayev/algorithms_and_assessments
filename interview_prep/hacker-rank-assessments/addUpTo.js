function addUpTo(n) {
  //The number of operations depends on n
  let total = 0; //1 assignment
  for (let i = 1; i <= n; i++) {
    //n additions, n assignments, n comparisons
    total += i; //n additions, n assignments.  Counting from 2n to as high as 5n + 2
  }
  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
  // n + 1 * n / 2   (order)   3 operations
}

console.log(addUpTo(5));
console.log(addUpTo2(5));
