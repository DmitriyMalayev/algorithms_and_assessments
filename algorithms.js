/*
What is the area of n ?

1 1  
2 5  
3 13
*/
function shapeArea(n) {
  let area = 1;
  for (var i = 1; i < n; i++) {
    area += 4 * i;
  }
  return area;
}
shapeArea(3);

/*
How many numbers are missing to have the correct sequence?

[6, 2, 3, 8]  
3 => (4, 5, 7)
*/

function makeArrayConsecutive(statues) {
  statues.sort((a, b) => {
    return a - b;
  });

  let min = statues[0]; //starting from first index, not 0.
  let max = statues[statues.length - 1]; //last number in the array
  let count = 0;

  for (let i = min; i < max; i++) {
    if (statues.indexOf(i) === -1) {
      //checking if it's not in original array
      //returns the index of the element or -1 if it doesn't exist.
      count++; //increment count by 1
    }
  }
  return count;
}
makeArrayConsecutive([6, 2, 3, 8]);

/*
Reverse The String

split the string into separate letters, into an Array.
Call the Array method reverse. Join back into string.
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");

/*
Take the number convert it into a string and split each character into an array. Join back into string.
`parseInt`
converts string back to number.
`Math.sign`
returns either a positive or negative +/- 1, indicating the sign of a number passed into the argument.
*/

function reverseInteger(n) {
  let reversedString = n.toString().split("").reverse().join("");
  return parseInt(reversedString * Math.sign(n));
}
reverseInteger(123);

/*
Check if the words are the same if reversed.

`every()`
Tests whether all elements in the array pass the test implemented by the provided function.
It returns a Boolean value.
*/

function palindromeTest(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1]; //checking the element on the other side of the array.  -1 because 0 index.
  });
}

function palindromeTest2(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

function palindromeTest3(str) {
  let len = str.length;
  let start = str.substring(0, Math.floor(len / 2)).toLowerCase(); //beginning to not reaching the end
  let end = str.substring(len - Math.floor(len / 2)).toLowerCase(); //total characters - total characters / 2
  let flip = end.split("").reverse.join("");
  return start === flip;
}
palindromeTest("Hello There");
palindromeTest2("Hello There");
palindromeTest3("Hello There");

/*
Return the character that is most commonly used

Make an empty Object
Convert the passed in string to an Object (keys are the letters, values how many times they appear)

`OF` => Used for interating over an Array or String
`IN` => Used for interating over an Object
*/

function maxCharacters(str) {
  const charMap = {};

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++; //first time undefined
    } else {
      charMap[char] = 1; //first time assigned to 1
    }
  }
  let max = 0;
  let maxChar = "";

  for (let char in charMap) {
    if (charMap[char] > max) {
      //charMap[char] returns value not letter  if the statement is true
      max = charMap[char]; //Assigns the value
      maxChar = char; //Assigns the letter that is most common
    }
  }
  return maxChar;
}

maxCharacters("abbcccddddeeeeefff");

//Print integers 1 to N but print "fizz" if multiple of 3, "buzz" if multiple of 5 and "fizzbuzz" if multiple of 15
// Modulo Operator (%) returns the remainder

function fizzBuzzer(n) {
  for (let i = 1; i <= n; i++) {
    debugger;
    if (i % 15 === 0) {
      console.log("fizzbuzz"); //if multiple of 15
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      //if multiple of 5
      console.log("buzz");
    } else {
      console.log(n);
    }
  }
}

fizzBuzzer(8);

/*
Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

`chunk([1, 2, 3, 4], 2)` --> [[1, 2], [3, 4]]  
`chunk([1, 2, 3, 4, 5], 2)` --> [[1, 2], [3, 4], [5]]
`chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)` --> [[1, 2, 3], [4, 5, 6], [7, 8]]
`chunk([1, 2, 3, 4, 5], 4)` --> [[1, 2, 3, 4], [5]]
`chunk([1, 2, 3, 4, 5], 10)` --> [[1, 2, 3, 4, 5]]

The first argument array specifies the array that's passed in
The second argument size specifies the number of elements in each chunk, NOT the number of arrays in the main array.

Steps
Create a constant named "chunked" and set it equal to an empty array.
This will hold all of the chunks of data

For each element in the "unchunked" array
Retrieve the last element in "chunked" array (it's initially empty)

If the last element does not exist, OR if it's length is equal to the chunk size which is passed as an argument.
PUSH a new chunk into "chunked" with the current element
ELSE
ADD the current element into the chunk

Rather than putting a new chunk inside of chunked, and then adding an element in, we can do both things simulataneously.
We PUSH in a new chunk and immediately put our element that we're currently iterating over inside.
Don't forget to return the array.
*/

function chunk1(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]); //creating an Array and putting an element to add to the end.
    } else {
      last.push(element);
    }
  }
  return chunked;
}
chunk1([1, 2, 3, 4], 2);
/*
Create an empty chunked Array
Create an "index" that starts at 0
Make a while loop
while index is less than Array.length
Push a slice of length "size" from "array" into chunked
Add "size" to "index"
*/

function chunk2(array, size) {
  const chunked = [];
  let index = 0; //assigning let because we want this value to change over time.
  while (index < array.length) {
    chunked.push(array.slice(index, index + size)); //Selecting everything from the index up to but not including index + size
    index += size; //incrementing by size not by 1
  }
  return chunked;
}
chunk2([1, 2, 3, 4, 5], 2);

/*
Check if all of the characters are the same in both strings

slice method (non destructive, creates a copy)
const letters = ["a", "b", "c", "d", "e"];
letters.slice(0, 3)

Select the character at the first index up to but not including the third index.
["a", "b", "c"]
*/

function anagramChecker(string1, string2) {
  return helperString(string1) === helperString(string2);
}

anagramChecker("Hello", "hello");

function helperString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagramChecker2(string1, string2) {
  const aChapMap = buildCharacterMap(string1);
  const bCharMap = buildCharacterMap(string2);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}
anagramChecker2("earth", "heart");

function buildCharacterMap(string) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

/*
Retrieving keys from an object

letters = {a: 1, b:2, c: 3}
Object.keys(letters) => ["a", "b", "c"]
Object.keys(letters).length => 3
*/

function capitalizedWords1(str) {
  const words = [];
  for (let word of str.split(" ")) {
    //separate words
    words.push(word[0].toUpperCase() + word.slice(1)); //capitalize first letter and add it with everything from 2nd letter on
  }
  return words.join(" "); //Add a space between each word when joining
}
capitalizedWords1("hello everyone");

/*
Create "result" in which the first character of the input string is capitalized
For each character in the string
  If the character to the left has a space  => Capitalize it and add it to "result"
  ELSE => add it to result
*/

function capitalizedWords2(str) {
  let result = str[0].toUpperCase;
  for (let i = 1; i < str.length; i++) {
    //Must be a regular for loop
    if (str[i - 1] === " ") {
      //checking if the character to the left is a space
      result += str[i].toUpperCase(); //If the character to the left has a space, the current character is uppercase and added to result
    } else {
      result += str[i]; //If the character to the left doesn't have a space, we add it to result.
    }
  }
  return result;
}

capitalizedWords2("are you prepared for algorithms?");

// Sum an Array of numbers
function simpleArraySum(ar) {
  let sum = 0;
  for (let n of ar) sum += n;
  return sum;
}

function simpleArraySum2(ar) {
  const newValue = ar.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return newValue;
}

simpleArraySum([1, 2, 3]);
simpleArraySum2([1, 2, 3]);

// Compare two sets of arrays and increment the higher number

function compareTriplets(a, b) {
  const score = [0, 0];

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      score[0]++;
    } else if (a[i] < b[i]) {
      score[1]++;
    }
  }
  return score;
}

compareTriplets([20], [30]);

/*
Write a function that accepts a positive number N.
The function should console.log() a step shape with N levels using the # character.  
Make sure the step has spaces on the right hand side!

  steps(2)
      '# '
      '##'
  steps(3)
      '#  '
      '## '
      '###'
  steps(4)
      '#   '
      '##  '
      '### '
      '####'

Guide
  First we will make a for loop and iterate through rows. from 0 to n. 
    Create an empty string, "stair"  which is singular
    Iterate from 0 to n through columns 
      IF the current column is equal to or less than the current row
        Add a "#" to "stair"
      ELSE
        Add a space to "stair"
    console.log(stair)

    c0 c1 c2
r0  #  _  _
r1  #  #  _ 
r2  #  #  # 
*/
function stepsMaker1(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    console.log(stair); //This console.log is within the for loop because we want one console.log for each row we assembled.
  }
}

/*
RECURSION SOLUTION
 IF (row === n) then we have hit the end of our problem
 IF the string "stair" has a (length === n) then we are at the end of a row
 IF the length of the string "stair" is less than or equal to the row number we're working on, we add a "#", otherwise add a space
*/

function stepsMaker2(n, row = 0, stair = "") {
  //providing a default value for row(0 is top row) and stair (empty string).
  if (n === row) {
    //base case
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1, ""); //Third argument optional because of the presence of the default argument.
  }
  if (stair.length <= row) {
    //If length of the stair string is <= to the row we're working on we add a # or a space.
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair); //We don't change the value of row here because we're still working on the same row.
}

function stepsMaker2(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1, "");
  }
  const add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
}
stepsMaker1(3);
stepsMaker2(5);
/*
RECURSION 
Identify the minimum amount of information to represent your problem
Give reasonable defaults to the bare minimum pieces of information
Check the base case. Is there any work left to do? If not, return. 
Do some work. Call your function again, making sure the arguments have changed in some way. 
*/

function printNumber(num) {
  if (num === 0) {
    return;
  }
  console.log(num);
  printNumber(num - 1);
  //bare minimum amount of information needed to call our function again and progress towards base case.
}

printNumber(10);

function printNumber2(num, dec = 1) {
  //make sure you have a default value for dec
  if (num === 0) {
    return;
  }
  console.log(num);
  printNumber(num - dec);
  //bare minimum amount of information needed to call our function again and progress towards base case.
}
printNumber2(10);

/*PYRAMID
    c0 c1 c2 c3 c4
r0  _  _  #  _  _ 
r1  _  #  #  #  _ 
r2  #  #  #  #  #

 Write a function that accepts a positive number N.
 The function should console log a pyramid shape
 with N levels using the # character.  Make sure the
 pyramid has spaces on both the left *and* right hand sides

   pyramid(1)
       '#'
   pyramid(2)
       ' # '
       '###'
   pyramid(3)
       '  #  '
       ' ### '
       '#####'
Solution 1 
  From 0 to n  (iterate through rows)
    Create an empty string, "level"
    From 0 to ??? (columns) 
      IF the column shoujld have a #
        Add a "#" to level
      ELSE
        Add a space " " to "level"
    console.log(stair)

Number of rows * 2  - 1 = Gives us the correct number of columns 
n * 2 - 1 
*/
function pyramidBuilder1(n) {
  const midpoint = Math.floor((2 * n - 1) / 2); //midpoint index

  for (let row = 0; row < n; row++) {
    let level = ""; //Represents a level of a pyramid
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        //makes sure that the current column that we're looking at is within bounds.
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}
pyramidBuilder1(3);

/*
Math.floor;  2.5 => 2 
Math.ceil; 2.5 => 3

const columns = [0, 1, 2, 3, 4];
const row = 0;

2 - 0 <= 0 && 2 + 0 >= 0;  
2 - 1 <= 1 && 2 + 1 >= 1;
2 - 2 <= 2 && 2 + 2 >= 2;

2 - 3 <= 3 && 2 + 3 >= 3;
2 - 4 <= 4 && 2 + 4 >= 4;

How to calculate the midpoint of our array?
n is the total number of rows we're working with
 5 is the number of columns

Math.floor(5 / 2);

Math.floor((2 * n - 1) / 2);
*/

function pyramidBuilder2(n, row = 0, level = "") {
  if (row === n) {
    //base case in which if true we don't need to do anything
    return;
  }
  if (level.length === 2 * n - 1) {
    //checks maximum column length and when we should move on to the next row
    console.log(level);
    return pyramidBuilder2(n, row + 1);
  }
  const midpoint = Math.floor((2 * n - 1) / 2); //midpoint index

  //Decide if we add a " " or a "#" to the level string
  let add;
  if (midpoint - row <= level.length && midpoint.length >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  //Make sure not to increment row because it still might be going through the loop.
}
pyramidBuilder2(n, row, level + add);

module.exports = pyramidBuilder1;

// Return the number of vowels used in a string. "a e i o u"
function howManyVowels(str) {
  let num = 0;
  let checker = ["a", "e", "i", "o", "u"];
  for (let letter of str.toLowerCase()) {
    if (checker.includes(letter)) {
      num += 1;
    }
  }
  return num;
}
howManyVowels("words");

/*
match
  An object that supports being matched against.
  Matches a string or an object that supports being matched against, and returns an Array containing the results of that search, or null if no matches are found.
/g
  Makes sure we don't stop at the first match
/i
  case incensitive
*/
function howManyVowels2(str) {
  const matches = str.match(/aeiou/gi);
  return matches ? matches.length : 0;
}

howManyVowels2("words");

/* 
Write a function that accepts an integer N and returns a NxN spiral matrix.
  matrix(2)
    [[1, 2],
    [4, 3]]
  matrix(3)
    [[1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]]
 matrix(4)
    [[1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]]

FIRST SOLUTION 
Create an empty array of arrays called `results`
Create a counter variable, starting at 1
As long as (start column <= end column) AND (start row <= end row))
  Loop from start column to end column
    At results[start_row][i] assign counter variable
    Increment counter
  Increment start row
  Loop from start row to end row
    At results[i][end_column] assign counter variable
    Increment counter
  Decrement end column
  ..Repeat for the other two sides
  
NOTES
We can assign values to Array that have not yet been initialized.

const arr = [];
arr[3] = "Hello there";
console.log(arr)[(null, null, null, "Hello there")];

4 for loops
  1. Assembles the top row of our solution 1, 2, 3
  2. Responsible for the row on the right hand size  4,5
  3. Responsible for the row on the bottom 6, 7
  4. Responsible for the left side 8
  the while loop runs and assembles 9
*/

function spiralMatrix(num) {
  const results = [];
  // The number of subArrays that will be inserted into results is dependent on the value of num
  // If num === 2 results would be [[],[]]
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  //counter used to keep track of what number we want to try push in
  //endColumn and endRow depends on the value of n  if 3 the last index of the end column would be 2
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
    }
    endColumn--;

    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
}

spiralMatrix(6);

/*
Fibonacci Series
Print out the n-th entry in the series

*EXAMPLE of the first 10 entries*
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

fib(4) === 3
*/

function fibSeries(n) {
  //Linear Runtime
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[n];
}

fibSeries(5);

/*
Recursive Solution  

We only return n if it's 0 or 1
fib(0) => 0
fib(1) => 1

Exponential Time (RED FLAG)
  For every increase of n we will get a dramatic increase in the number of function calls
How can we alter this recursive solution so it won't have a runtime of exponential time?
  We have to implement memoization. 
Memoization
  Store the arguments of each function call along with the result. 
  If the function is called again with the same arguments, return the precomputed result
  This dramatically improves the runspeed of the function.
Generic Memoization Function
  Slow Fib Function => Memoizer => Fast Memoized Function
  Calling a function with a function that returns a function

cache
  Stores all of our calls to the fast version of our function
...args
  In order to use our memoize function with any slow function that can have multiple arguments with use this ES2015 syntax.
  Takes all the arguments and assigns it to an Array called args
.apply()
  The object to be used as the this object.
  Calls the function, substituting the specified object for the this value of the function, and the specified array for the args of the function.
  */

function memoize(fn) {
  const cache = {};
  return function () {
    //This anon func is same as const fib. Receives the argument(s) intended for the slowFib function.
    if (cache[args]) {
      //Checking if the func has been called with these particular set of args before
      return cache[args]; //If we have return it and don't do anything else.
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2); //These fib are a reference to the memoized version
}

fib = memoize(fib);

/*
.slice
Returns a copy of a section of an array. 
For both start and end, a negative index can be used to indicate an offset from the end of the array. 
For *EXAMPLE*, -2 refers to the second to last element of the array.
  @param start - The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
  @param end - The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.

.splice
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
  @param start — The zero-based location in the array from which to start removing elements.
  @param deleteCount — The number of elements to remove.
  @returns — An array containing the elements that were deleted.

.push
Appends new elements to the end of an array, and returns the new length of the array.

.pop
Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

.shift
Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

.unshift
Inserts new elements at the start of an array, and returns the new length of the array.

Create a queue Data Structure. The Queue should be a class with methods "add" and "remove". 
Adding to the Queue should store an element until it is removed. 

const q = new Queue()
q.add(1)
q.remove() //returns 1
*/

class Queue {
  constructor() {
    this.data = []; //A constructor is called when a new instance of the class is created. this.data doesn't have to be called data.
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}
newQueue = Queue.new();

/*
weave function
  Receives two queues as arguments and combines the contents of each into a new, third queue.
  The third queue should contains the alternating content of the two queues. 
  The function should handle queues of different length without inserting "undefined" into the new one. 
  Do not access the array inside of any queue, only use the .add(), .remove(), and .peek() functions
*/
const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);

const queueTwo = new Queue();
/*  
Second
  Implement a "peek" method in this Queue class. 
  Peek should return the last element (the next one to be returned) from the queue without removing it. 
 
*/
class secondQueue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }
}
/*
Implement a 'peek' method in this Queue class.
Peek should return the last element (the next
one to be returned) from the queue *without*
removing it. 
*/

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1]; //accessing the last item of the array
  }
}
/*
Directions
 1) Complete the task in weave/queue.js
 2) Implement the 'weave' function.  Weave receives two queues as arguments and combines the contents of each into a new, third queue.
 The third queue should contain the *alterating* content of the two queues.  The function should handle queues of different lengths without inserting 'undefined' into the new one.
 
 !Do not access the array inside of any queue, only use the 'add', 'remove', and 'peek' functions.
 */
const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
const queueTwo = new Queue();
queueTwo.add("Hi");
queueTwo.add("There");
const q = weave(queueOne, queueTwo);
q.remove(); // 1
q.remove(); // 'Hi'
q.remove(); // 2
q.remove(); // 'There'

const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {
  const newQueue = new Queue(); //"while loop to check while it's not undefined it should continue iterating"
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      //checking again because one of the sources can still have elements
      newQueue.add(sourceOne.remove()); //remove is using the pop method to return the last element and we use that element to add to the queue.
    }
    if (sourceTwo.peek()) {
      newQueue.add(sourceTwo.remove());
    }
  }
  return newQueue;
}
/*
Stacks
  Similar to Queues 
  Pushing
    Adding a record to an existing stack
  Poping 
    Removing a record from an existing stack
  Peeking
    Return the top record without popping it
    
Stacks vs. Queues
  The order of how things are added or removed is different
  Queues
    First In First Out
  Stacks
    First In Last Out
*/
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
/* 
 
*EXAMPLE*
Queue from Stack (qfroms)

Implement a Queue datastructure using two stacks.
 *Do not* create an array inside of the 'Queue' class.
 Queue should implement the methods 'add', 'remove', and 'peek'.
 For a reminder on what each method does, look back
 at the Queue exercise.
     const q = new Queue();
     q.add(1);
     q.add(2);
    q.peek();  // returns 1
    q.remove(); // returns 1
    q.remove(); // returns 2

Stacks => FILO (First In Last Out)
Queues => FIFO (First In First Out)

Remove Method
   For every record that we pop from the first stack we will push it to the second stack
   We then use our peek method to check if there are any records left that we can manipulate. 
   Then we call the pop method on the second stack 
   Before returning the record we have to restore everything back to the first stack in case 
Peek Method
  Similar to the remove method with the exception that instead of popping the second stack we will just peek at it. 
*/

const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack(); //Created two stacks and assigned them to the queue
    this.second = new Stack();
  }

  add(record) {
    //Taking a record and push it to the first stack. After adding all of our records and then if we call remove() on it, it will remove the first record added.
    this.first.push(record);
  }

  remove() {
    // We cannot iterate through a stack we can only peek. For every record that is in the first stack we take it out and push it to the second stack.
    // The while loop will run until it no longer returns a truthy value.
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    // We are not immediately returning the record, we only create a reference to it.
    // We want because we first need to restore the stack to it's original version, so it's ready for the next call to remove() method.
    const record = this.second.pop();

    // Same loop but for the second stack.
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record; //return the record
  }

  peek() {
    // while there are still records in the first stack, we take the record and put it into the second stack
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    // Getting a record to the top record inside of the second stack
    const record = this.second.peek();

    // while there are records in the second stack, we move it to the first stack.
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

module.exports = Queue;

/*
Linked Lists
A linked list is an ordered collection of data. 
  The collection contains a number of different nodes.  
  Each node contains some data, along with a reference to the next node. 
    A collection of nodes is known as a Linked List or a Chain of Nodes
  It has an order that is always maintained unless we want it changed. 
Head Node
  The first node in a linked list
Tail Node
  The last node in a linked list
  It does not have a reference to any other node.  

Each node has two parts
  Data of any type
  Reference to the next node in the chain

  */
// Two Separate Node Lists Joined Together
// data and node are property names by convention
const nodeOne = { data: 123 };
const nodeTwo = { data: 456 };

nodeOne.next = nodeTwo;

/*
Node Class API

Function => constructor 
Arguments => (Data(required argument), Node(optional argument))
Returns => Node
Directions 
  Creates a class instance to represent a node. 
  The node should have two properties. "data" and "next"
  Accept both of these as arguments to the "Node" constructor, 
  then assign them to the instance as properties "data" and "next". 
  If "next" is not provided to the constructor, then default it's value to be "null".
*/
const n1 = new Node("Hi");
n1.data; //"Hi"
n1.next; //null

const n2 = new Node("There", n1);
n2.next; //returns n1

/*
LinkedList Class API
  Function => constructor 
  Arguments => None
  Returns => LinkedList
  Directions 
    Creates a class instance to represent a Linked List. 
    When created, a Linked List should have no head node associated with it. 
    The Linked List instance will have one property, 'head'. 
    "head" is a reference to the first node of the linked list. 
    "head" should be set to 'null' by default.
*/
const list = newLinkedList();
list.head; //null

/*
Function => insertFirst 
Arguments => (data)
Returns => nothing
Directions 
  Creates a new Node from argument "data" 
  Assigns the resulting node to the 'head' property. 
  Make sure to handle the case in which the linked list already has a node assigned to the 'head' property.
*/

const list = newLinkedList();
list.insertFirst("Hi there"); //List has one node

/*
Function => size
Arguments => none
Returns => integer
  Returns the number of nodes in the linked list
*/

const list = newLinkedList();
list.insertFirst("a");
list.insertFirst("b");
list.insertFirst("c");
list.size(); // 3

/*
Function => getFirst
Arguments => none
Returns => Node
  Returns the first node of the linked list
*/

const list = newLinkedList();
list.insertFirst("a");
list.insertFirst("b");
list.getFirst(); // returns node instance with data "a"

/*
Function => getLast
Arguments => none
Returns => Node
  Returns the last node of the linked list
*/

const list = newLinkedList();
list.insertFirst("a");
list.insertFirst("b");
list.getLast(); // returns node instance with data "b"

class Node {
  constructor(data, next = null) {
    this.data = data; //can be of any data type
    this.next = next; //reference to the next node along the chain. it's an optional argument.
  }
}
class LinkedList {
  constructor() {
    this.head = null; // Initialized with no head node associated with it.
  }
  insertFirst(data) {
    this.head = new Node(data, this.head); //any existing node can be passed as a second argument
  }

  insertFirstAlternative(data) {
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next();
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getFirstAlternative() {
    return this.getAt(0);
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  getLastAlternative() {
    return this.getAt(this.last - 1);
  }

  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      //checking if there is only one node
      this.head = null; //removed
      return;
    }
    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next; //same as argument but assigns it
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++; //increments by one
      node = node.next; //sets the node variable to the next node in the chain. If it's null, the while loop will exit.
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next; //Assigns the head of the linked list to the next node. It will be null if there isn't a next node.
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next; //skips the index
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
    }
    if (index === 0) {
      this.head = new Node(data, this.head); //The second argument is used as the next reference
    }
    const previous = this.getAt(index - 1) || this.getLast(); //If the first part returns a falsy value we want previous to be set to the last node of the chain
    const node = new Node(data, previous.next); //created node and put in the middle
    previous.next = node;
  }
}

module.exports = { Node, LinkedList };

let arr = [1, 2, 3];
arr.filter((element) => {
  return element !== 1;
});
//[2,3]
//arr  [1,2,3] filter is non destrucive

let arr2 = [1, 2, 3];
arr2.filter((element) => {
  return element !== 1;
});

//reassigning arr2

/* 
Return the 'middle' node of a linked list.
If the list has an even number of elements, return
the node at the end of the first half of the list.
  *Do not* use a counter variable, *do not* retrieve
the size of the list, and only iterate
through the list one time.
Example
  const l = new LinkedList();
  l.insertLast('a')
  l.insertLast('b')
  l.insertLast('c')
  midpoint(l); // returns { data: 'b' }
Note
  list.getFirst() === list.head

*/
function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    //checking if both are defined
    slow = slow.next; //move by 1
    fast = fast.next.next; //move by 2
  }

  return slow; //returns when the while loop exits
}

midpoint();

/* 
Given a linked list, return true if the list is circular, false if it is not.
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;
  circular(l) // true
*/

function circular(list) {
  let slow = list.getFirst(); //same as list.head
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    //If either is pointing to null it's not circular. null is falsy.
    slow = slow.next; //+1
    fast = fast.next.next; //+2

    if (slow === fast) {
      //if both are pointing to the same exact node. We're not checking the data contents.
      return true;
    }
  }

  return false;
}

circular();

/*
Given a linked list and integer n, return the element n spaces from the last node in the list.  
Do not call the 'size' method of the linked list. (size - n then call getAt(n)) 
Assume that n will always be less than the length of the list.

   const list = new List();
   list.insertLast('a');
   list.insertLast('b');
   list.insertLast('c');
   list.insertLast('d');
    fromLast(list, 2).data // 'b'

*/
function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next; //moves n number of spaces
    n--; //decrements by 1 until 0
  }

  while (fast.next) {
    //while it's not null
    slow = slow.next; //+1
    fast = fast.next; //+1
  }

  return slow;
}

module.exports = fromLast;

//From circular LinkedList
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(values = []) {
    this.head = null;

    for (let value of values) {
      this.insertLast(value);
    }
  }

  clear() {
    this.head = null;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let counter = 1;
    let previous = this.head;
    let node = this.head.next;
    while (node) {
      if (counter === index) {
        previous.next = new Node(data, node);
        return;
      }
      previous = node;
      node = node.next;
      counter++;
    }

    previous.next = new Node(data, node);
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index - 1) {
        if (node.next) {
          return (node.next = node.next.next);
        } else {
          return (node.next = null);
        }
      }
      node = node.next;
      counter++;
    }
  }

  getFirst() {
    return this.head;
  }

  insertFirst(data) {
    this.head = new Node(data, this.getFirst());
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
      return last.next;
    } else {
      this.head = new Node(data);
      return this.head;
    }
  }

  forEach(fn) {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

/*
Given the root node of a tree, return
an array where each element is the width
of the tree at each level.

Given:
    0
  / |  \
1   2   3
|       |
4       5

Answer: [1, 3, 2]

Notes
  root is a single node. 
  We are not working with a Tree.
  Whenever you see the word "width" you should associate it with a Breadth First Traversal 
*/

//first node of the tree accessing the data property of the tree, and "stopper" any value we can identify
//initialize with 0
function levelWidth(root) {
  const arr = [root, "stopper"];
  width_counter = [0];

  //don't confuse with only presence of "stopper".  Also, we remove the first element and return it.
  while (arr.length > 1) {
    const node = arr.shift();

    //If the node we're currently looking at is "stopper" we want to take our width_counter variable and push a new element of 0
    if (node === "stopper") {
      width_counter.push(0);
      arr.push("stopper");
      //If we're working with a node we want to select all of it's children and add them to the end of our array. Also we need to increment the last element in the width_counter index. The last element in width_counter represents the current level of our tree that we're currently working on.
    } else {
      arr.push(...node.children);
      width_counter[width_counter.length - 1]++;
    }
  }
  return width_counter;
}

module.exports = levelWidth;

function levelWidth(root) {
  const arr = [root, "stopper"];
  const width_counter = [0];

  //don't confuse with only presence of "stopper".  Also, we remove the first element and return it.
  while (arr.length > 1) {
    const node = arr.shift();

    //If the node we're currently looking at is "stopper" we want to take our width_counter variable and push a new element of 0
    if (node === "stopper") {
      width_counter.push(0);
      arr.push("stopper");
      //If we're working with a node we want to select all of it's children and add them to the end of our array. Also we need to increment the last element in the width_counter index. The last element in width_counter represents the current level of our tree that we're currently working on.
    } else {
      arr.push(...node.children);
      width_counter[width_counter.length - 1]++;
    }
  }
  return width_counter;
}

/*
1) Implement the Node class to create a binary search tree.  
The constructor should initialize values 'data', 'left', and 'right'.
2) Implement the 'insert' method for the Node class.  
Insert should accept an argument 'data', then create an insert a new node at the appropriate location in the tree.
3) Implement the 'contains' method for the Node class.  
Contains should accept a 'data' argument and return the Node in the tree with the same value.
If the value isn't in the tree return null.
*/
class Node {
  //handles data that is passed in.
  //this.left and this.right are references to child nodes.We're specifying null because it doesn't have children.
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    //insert data at the appropriate location of the tree.  If the incoming data value is less than this.data and this.left is not null then we want to do the following:
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data); //create a new Node and pass it in
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
  //contains is similar to search through our tree
  contains(data) {
    if (this.data === data) {
      return this; //returning the entire node
    }
    //verifying that this.data is less than the data that's passed in and that there is a node present on the right side
    //With recursion we need to have a return statement if there is a presence of a value
    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null; //if some data argument does not exist in our tree
  }
}

module.exports = Node;

/*
Given a root node, validate the binary search tree. 
Ensure that every node's left hand child is less than the parent node's value, 
and that every node's right hand child is greater than the parent
*/

function validate(node, min = null, max = null) {
  //When we move to the left we check max value, when we move to the right we check min value.
  //Checking the case if we have not yet set a max value and if the value is more than the max value
  if (max !== null && node.data > max) {
    return false;
  }
  if (min !== null && node.data < min) {
    return false;
  }

  //If there is a presence of a node on the left and if calling validate with the node on the left, and some minimum value and then a maximum value of the current nodes data and it returns false, we will flip it with the ! and it will return a true value.  !validate causes recursion to occur.
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }
  return true;
}

module.exports = validate;

class Node {
  //validating
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
}

module.exports = Node;

/*
Create an 'eventing' library out of the
Events class.  The Events class should
have methods 'on', 'trigger', and 'off'.
*/

class Events {
  constructor() {
    //storage for establishing an association between events and callbacks.
    //keys are different event names, values for each key is an array that contains all of the callbacks.
    this.events = {};
  }

  // Register an event handler.  eventName is a string. callback gets invoked when the event is triggered.
  // Taking the event name and adding it as a key to the events object
  on(eventName, callback) {
    if (this.events[eventName]) {
      //checking for presence of the event, and also the presence of an array.
      this.events[eventName].push(callback); //adding a callback to the end of the array.
    } else {
      this.events[eventName] = [callback]; //if there isn't an array we make one and add the event to it.
    }
  }

  // Trigger all callbacks associated with a given eventName.
  // We look at our events object via the key of eventName and for every callback in that array, we invoke it.
  trigger(eventName) {
    if (this.events[eventName]) {
      //checking for presence
      for (let cb of this.events[eventName]) {
        //invoking each one
        cb();
      }
    }
  }

  // Remove or Deregister all of the event handlers associated with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;

/* 
Generators simplify iterator authoring using function* and yield
A function declared as function* returns a Generator Instance. 
  Generators are subtypes of iterators which include additional next and throw.
These enable values to flow back into the generator, so yield is an expression form which returns a value or returns throws. 

Note
  Generators also can be used to enable "await" like async programming. 
*/

function* numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers(); //returns a generator object. It has the ability to step through the generator function with the "next" method
generator; // {}
generator.next(); //{"value": 2, "done": false}
generator.next(); //{"value": null, "done": true}
generator.next(10); //{"value": 30, "done": true}  the value 10 replaces (yield result)

function* list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = list();
// generator.next(); // {"value": 1, "done": false}
// generator.next(); // {"value": 2, "done": false}
// generator.next(); // {"value": 3, "done": false}
// generator.next(); // {"value": 4, "done": false}
// generator.next(); // {"value": 5, "done": false}
// generator.next(); // {"done": true}

const newNumbers = [];
for (let value of list()) {
  newNumbers.push(value);
} // 5
newNumbers; // [1,2,3,4,5]

function* newList() {
  yield 1;
  yield 2;
  yield* newList2(); //passing in a new generator
  yield 6;
  yield 7;
}

function* newList2() {
  yield 3;
  yield 4;
  yield 5;
}

const newGenerator = newList();

const newValues = [];
for (let value of newGenerator) {
  values.push(value);
} // 7

newValues; // [1,2,3,4,5,6,7]

class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }
  *printValues() {
    //Creating a generator that is a property of our tree class.
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)]);
//first node has a child of 2 and 3
//second node on 2 has a child of 4

const treeValues = [];
for (let value of tree.printValues()) {
  values.push(value);
} //4
values; // [1,2,4,3]

/*
[10, -30, 97, 0, 5]

From i=0 to < array.length
From j = 0 to (array.length -1)
If the element at j is greater than j+1 
  swap elements at j and j+1
Notes
  Nested for loops iterating over the same collection of data is a red flag. n * n complexity. 
  The purpose of bubbleSort is to find the largest number in the array and drag it to the far right side.
*/

function bubbleSort(arr) {
  //standard for loop because we want access to index and not make actions on specific elements
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesserValue = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesserValue;
      }
    }
  }
  return arr;
}

/*
[10, -30, 97, 0, 5]
i=0
j=
indexOfMin=

From i=0 to < array.length
  Assume the element at "i" is the least in the array, assign i to "indexOfMin"
  For j from i+1 to end of Array
    See if there is an element with a lower value
      If there is, record it's index
  If the index of the current element and the index of the "lowest" element are not the same, swap them.
Notes
  Also known as prove me wrong algorithm 

*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let lesserValue = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesserValue;
    }
  }
  return arr;
}

/*
mergeSort 
Utilizes recursion and two functions

We split the array into two and then we split those halves 
We repeat the same step
Now the Array contains one element, and it can't be split. 
The two arrays each have a single element and they are joined together into one array with two elements. 
*/
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center); //from 0 index to up to but not including center index
  const right = arr.slice(center); //from center index to end

  return merge(mergeSort(left), mergeSort(right));
}

/*
merge 
Doesn't contain recursion
  left and right are two separate sorted arrays of values  [-30, 22]   [0, 97]
It takes two separate sorted arrays and merges them into one sorted array called results

First we create a "results" array
While there are still elements in BOTH arrays
  IF the first element in the left half is less than the first element in the right half
    We shift the element from left into the "results" array.
  ELSE
    We shift the element from right into a "results" array
Take everything from the array that still has stuff in it and put it in results 
*/
function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    //fails when one of them becomes length of 0
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

function merge2(left, right) {
  return left.concat(right).sort((a, b) => a - b);
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge2, merge };

function flippingBits(n) {
  let lowBin = n.toString(2); //converts number to String with a specific base 2 means binary
  let highBin = "";

  // Number.toString() produced a binary string in high order to low order, we're prepending 0's from the left.
  while (lowBin.length < 32) {
    lowBin = 0 + lowBin;
  }
  // We only flip bits, no need to reverse the sequence.
  for (let i = 0; i < lowBin.length; i++) {
    highBin += lowBin[i] === "0" ? "1" : "0";
  }
  //converts String to a Number with a specific base
  return parseInt(highBin, 2);
}

flippingBits(1000);
