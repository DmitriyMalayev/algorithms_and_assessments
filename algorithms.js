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
  for (let i = 0; i <= n; i++) {
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
