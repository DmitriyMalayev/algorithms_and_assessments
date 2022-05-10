# Big O Notation

This is a way to formalize fuzzing counting It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow. It also refers to the worst case scenario, the upperbound.

We say that an algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times `f(n)` as `n` increases

`f(n) could be linear (f(n) = n); O(n)`
As n grows so does the runtime in proportion

`f(n) could be quadratic (f(n) = n2); O(N²)`
As n grows the runtime becomes squared  
`f(n) could be constant (f(n) = 1); O(1)`  
As n grows the runtime remains the same

# O(1) Constant Time

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
  // n + 1 * n / 2   (order)   3 operations
}
```

# O(n) Linear Time

```js
function addUpTo2(n) {
  //The number of operations depends on n
  let total = 0; //1 assignment
  for (let i = 1; i <= n; i++) {
    //n additions, n assignments, n comparisons
    total += i; //n additions, n assignments.  Counting from 2n to as high as 5n + 2
  }
  return total;
}
```

# Quadratic Runtime O(N²) (O(n) operation inside of an O(n) operation)

```js
function printAllPairs(n) {
  //Quadratic
  for (var i = 0; i < n; i++) {
    // O(n) Linear
    for (var j = 0; j < n; j++) {
      // O(n) Linear
      console.log(i, j);
    }
  }
}
```

# Simplifying

`O(2n)` => `O(n)` Linear Time
`O(n + 10)` => `O(n)`
`O(100 * n)` => `O(n)`
`O(1000n + 50)` => `O(n)`

`O(500)` => `O(1)` Constant Time
`O(13n²)` => `O(n²)` Quadratic Time
O(n^2 + n^3)

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an Array by index or object by key is constant.
4. In a loop, the time complexity is the length of the loop times the complexity of what happens inside of the loop.

# Examples

```js
function logAtLeast5(n) {
  //O(n)
  for (var i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

function logAtMost5(n) {
  //O(1)
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
```

# Time Complexity vs. Space Complexity

`Time Complexity`
Analyzing the runtime of an algorithm as the size of the inputs increases
`Space Complexity`
How much additional memory do we need to allocate in order to run the code in our algorithm.

1. Most primitives (booleans, numbers, undefined, null) are `constant space`
2. Strings require O(n) space where n is the length of the String
3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

```js
function sum(arr) {
  //two numbers tracked
  //O(n) space because it's the same no matter the size of the input.
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function double(arr) {
  // O(n) space because the arr values become proportional to the output
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

# Logarithms

log₂(8) = 3 => 2^3 = 8
log₂(value) = exponent => 2^exponent = value

We omit the 2

The logarithm of a number roughly measures the n umber of times you can divide that number by 2 before you get a value that's less than or equal to one.

8 4 2 1
log(8) = 3 (we're able to divide 3 times until reaching 1)

# Notes

Certain searching algorithms have logarithmic time complexity
Efficient sorting algorithms involve logarithms
Recursion sometmies involves logarithmic space complexity
