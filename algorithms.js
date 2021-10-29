// Area of n   1 1  2 5  3 13
function shapeArea(n) {
  let area = 1;
  for (var i = 1; i < n; i++) {
    area += 4 * i;
  }
  return area;
}
// [6, 2, 3, 8]
// How many are missing? 3  (4, 5, 7)
function makeArrayConsecutive2(statues) {
  statues.sort((a, b) => {
    return a - b;
  });

  let min = statues[0];  //starting from first index, not 0. 
  let max = statues[statues.length - 1];  //last number in the array
  let count = 0;

  for (let i = min; i < max; i++) {
    if (statues.indexOf(i) === -1) { //checking if it's not in original array
      //index of element or -1 if it doesn't exist. 
      count++;  //increment count
    }
  }
  return count;  
}


function reverseString(str) {
  return str.split("").reverse().join("");
  //split the string into separate letters, into an Array. Call the Array method reverse. Join back into string. 
}

function reverseInteger(n) {
  let reversedString = n.toString().split("").reverse().join("");
  return parseInt(reversedString * Math.sign(n));
  // Take the number convert it into a string and split each character into an array. Join back into string.
  // parseInt convert string back to number. 
  // Math.sign retains the + or -
}


// same word reversed
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
function palindromeTest(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

function palindromeTest2(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('');
  return str === reversed;
}

function palindromeTest3(str) {
  let len = str.length
  let start = str.substring(0, Math.floor(len/2)).toLowerCase()  //beginning to not reaching the end
  let end = str.substring(len - Math.floor(len / 2)).toLowerCase() //total characters - total characters / 2
  let flip = end.split("").reverse.join("")
  return (start === flip)
}




/*
Make an empty Object
Convert the passed in string to an Object (keys are the letters, values how many times they appear)
*/ 
function maxCharacters(str) {
  const charMap = {};  

  for (let char of str) {     //OF => Used for an Array or String
    if (charMap[char]) {
      charMap[char]++;  //first time undefined
    } else {
      charMap[char] = 1;   //first time assigned to 1
    }
  }
  let max = 0;
  let maxChar = "";

  for (let char in charMap) {   //IN => Used for an Object
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

function fizzBuzzer(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(n);
    }
  }
}

function chunky(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

function capitalizedWords(string) {
  const words = [];
  for (let word of string.split(" ")) {
    words.push(word[0].toUpperCase().word.slice(1));
  }
  return words.join;
}

function helperString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagramChecker(string1, string2) {
  return helperString(string1) === helperString(string2);
}