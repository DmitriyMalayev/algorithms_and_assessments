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

/*
How many numbers are missing to have the correct sequence?

[6, 2, 3, 8]  
3 => (4, 5, 7)
*/

function makeArrayConsecutive2(statues) {
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

/*
Reverse The String

split the string into separate letters, into an Array.
Call the Array method reverse. Join back into string.
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

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

/*
slice method (non destructive, creates a copy)
const letters = ["a", "b", "c", "d", "e"];
letters.slice(0, 3)

Select the character at the first index up to but not including the third index.
["a", "b", "c"]
*/

function anagramChecker(string1, string2) {
  return helperString(string1) === helperString(string2);
}

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

/*
Write a function that accepts a positive number N.
The function should console.log() a step shape with N levels using the # character.  
Make sure the step has spaces on the right hand side!

Examples
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

printNumber(10);