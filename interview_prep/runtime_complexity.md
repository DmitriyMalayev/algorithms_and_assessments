# Runtime Complexity

Describe the performance of an algorithm
How much more processing power or time is required to run your algorithm if we double the inputs.
Used to compare different solutions

# Linear Runtime

A direct 1 to 1 relationship between the number of input elements that we got into our algorithm and the amount of work that we had to use to process it.

`String Reverse`

abc => cba
abcdefg => gfedcba
Each additional character = 1 step through 1 loop
This would be "N", or "linear" runtime

```js
function reverseString(str) {
  let reversed = "";
  for (let char of str) {
    reversed = character + reversed;
  }
  return reversed;
}
```

# Quadratic Runtime

`Steps Algorithm`

n = 2 Had to do 4 things
n = 3 Had to do 9 things
n = 4 Had to do 16 things

As "n" increased by one we had to do way more things, (n squared) things total
This would be N^2 or quadratic runtime.

```js
function stepsBuilder(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
  }
  for (let column = 0; column < n; column++) {
    if (column <= row) {
      stair += "#";
    } else {
      stair += " ";
    }
  }
  console.log(stair);
}
```

# Common Runtimes

`Constant Time => 1`
No matter how many elements we're working with, the algorithm or operation will always take the same amount of time. This doesn't exist as of yet.?

`Logarithmic Time => log(n)` `Searching through a sorted array of data`
You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that searching operations are log(n)
Searching through a sorted array of data.

`Linear Time => n` `Anytime we're iterating over a string or array`
Iterating through all elements in a collection of data.
If you see a loop spanning from 0 to array.length, you have probably have "n" or linear runtime.
Could be iterating over a string or an array.
If we add one element to our input set it's going to take one unit of time to complete.

`Quasilinear Time => n * log(n)` `Anytime we're performing a sorting algorithm`
You have this if doubling the number of elements you are iterating over doesn't double the amount of work but it increases the amount of work by 1 + a little bit.
Always assume that any sorting operation is n \* log(n)
Work required is a little bit more than 1.

`Quadratic Time => N ^ 2`  `Steps Problem`  
Every element in a collection has to be compared to every other element
This is also known as "The handshake problem"

`Exponential Time => 2 ^ N`  
If you add a "single" element to a collection, the processing power required doubles.
Worst case

# Big "O" Notation / Runtime Complexity
This is another way of referencing runtime complexity
Determining the efficiency of our solution. 

O(n) => Linear
O(1) => Constant
O(n^2) => Quadratic

# Identifying Runtime Complexity

`Probably O(n)  =>  Probably Linear even if you iterated through half a collection`
Iterating with a simple for loop through a single collection? 
There are no Constants in runtime

Reverse a string.
```js
function reverseString(str) {
  let reversed = "";
  for (let char of str) {
    reversed = character + reversed;
  }
  return reversed;
}
```

`O(n + m)` => `Iterating through 2 different collections with separate for loops`
Iterating through two Different Collections of Data with Separate for loops in one function call
Reverse two different strings or arrays in two separate for loops.
n => Indicates the performance impact of the first string / array
m => Indicates the second string or array, which could be shorter or longer

`O(n ^ 2)` => `Two nested for loops iterating over the same collection RED FLAG`
Two nested for loops iterating over the same collection
Nested for loops are a big red flag.
Steps or Pyramid example

`O(n * m)`
Two nested for loops iterating over different collections

`O(n * log(n))`
Sorting Operations
Every sort operation can be assumed to be O(n*log(n)) runtime. 

`O(log(n))`
Searching through a sorted array

# Space Complexity
Runtime complexity refers to performance
Space complexity is similar to runtime complexity but is a reference to how much more RAM is required by doubling the problem set. 
We can apply the same rules to both runtime and space complexity. 
`Reversing a String would be an example`
For every additional character that we added into our input set we had one additional character that we needed to return in the output set of data. The amount of memory that we have spent was linear. 

# Quadratic Runtime For Space Complexity
`Steps Algorithm`
For each increment of the steps argument we had to print out a set number of additional items in the result set. Not only we had to process more data but we had to iterate more than once, and our results set had significantly more entries inside of it for every record that was added in. 

`2` => `4 elements in memory`
`3` => `9 elements in memory`
`4` => `16 elements in memory`

# Note
Runtime Complexity and Space Complexity are not always identical. 
They are often very different. 
