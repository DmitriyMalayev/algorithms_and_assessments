// function shapeArea(n) {
//   let area = 1
//   for (var i = 1; i < n; i++){
//     debugger
//     area += 4*i
//   }
//   return area
// }

// function makeArrayConsecutive(statues) {
//   statues.sort((a, b) => {
//     return a - b;
//   });

//   let min = statues[0];
//   let max = statues[statues.length - 1];
//   let count = 0;

//   for (let i = min; i < max; i++) {
//     debugger;
//     if (statues.indexOf(i) === -1) {
//       count++;
//     }
//   }
//   return count;
// }

// function reverseString(str) {
//   debugger;
//   return str.split("").reverse().join();
// }
// reverseString("hello");

// function palindromeTest(str) {
//   return str.split("").every((char, index) => {
//     debugger;
//     return char === str[str.length - index - 1];
//   });
// }
// palindromeTest("hello");

// function palindromeTest2(str) {
//   new reversed = str.split("").reverse("").join()
//   return reversed === str
// }
// palindromeTest2("helloTwo")

// function palindromeTest3(str) {
//   let len = str.length
//   let start = str.substring(0, Math.floor(len / 2)).toLowerCase()
//   let end = str.substring(len - Math.floor(len / 2)).toLowerCase()

//   let flip = end.split("").reverse().join("")
//   debugger
//   return start === flip

// }

// palindromeTest3("HelloThrees")

// function maxCharacters(str) {
//   const charMap = {};
//   for (let char of str) {
//     charMap[char] ? charMap[char]++ : (charMap[char] = 1);
//   }
//   let max = 0;
//   let maxChar = "";

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

// maxCharacters("aaabbc");

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// console.log(fizzBuzz(8));

// function chunk1(array, size) {
//   let chunked = []
//   for (let element of array) {
//     debugger
//     const last = chunked[chunked.length - 1]
//     if (!last || last.length === size) {
//       chunked.push([element])
//     } else {
//       last.push(element)
//     }
//   }
//   return chunked
// }

// chunk1([1, 2, 3, 4], 2)

// function chunk2(array, size) {
//   const chunked = []
//   let index = 0
//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size))
//     index += size
//   }
// }

// function helperString(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
// }

// function anagramChecker(string1, string2) {
//   return helperString(string1) === helperString(string2);
// }

// function buildCharacterMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// buildCharacterMap("hello there");

// function anagramChecker2(str1, str2) {
//   const aCharMap = buildCharacterMap(str1)
//   const bCharMap = buildCharacterMap(str2)

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }
//   for (let char in charMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//   return true
// }

// function capitalizedWords(str) {
//   const words = [];
//   for (let word of str.split(" ")) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(" ");
// }

// function capitalizedWords2(str) {
//   let result = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

// function simpleArraySum(ar) {
//   let sum = 0;
//   for (let n of ar) {
//     sum += n;
//   }
//   return sum;
// }

// function simpleArraySum2(ar) {
//   return ar.reduce((a, b) => {
//     return a + b;
//   }, 0);
// }

// function simpleArraySum2(ar) {
//   return ar.reduce((a, b) => a + b);
// }

// function compareTriplets(a, b) {
//   let score = [0, 0];
//   for (i = 0; i < 3; i++) {
//     if (a[i] > b[i]) {
//       score[0]++;
//     } else if (a[i] < b[i]) {
//       score[1]++;
//     }
//   }
//   return score;
// }

// function stepsMaker1(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let column = 0; column < n; column++) {
//       column <= row ? (stair += "#") : (stair += " ");
//     }
//     console.log(stair);
//   }
// }

// function stepsMaker2(n, row = 0, stair = "") {
//   if (n === row) {
//     return;
//   }
//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1, "");
//   }
//   if (stair.length <= row) {
//     stair += "#";
//   } else {
//     stair += " ";
//   }
//   steps(n, row, stair);
// }

// function stepsMaker3(n, row = 0, stair = "") {
//   if (n === row) {
//     return;
//   }
//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1, "");
//   }
//   const add = stair.length <= row ? "#" : " ";
//   steps(n, row, stair + add);
// }

// function printNumber(num) {
//   if (num === 0) {
//     return;
//   }
//   console.log(num);
//   printNumber(num - 1);
// }

// function printNumber2(num, dec = 1) {
//   if (num === 0) {
//     return
//   }
//   console.log(num)
//   printNumber2(num - dec)
// }

// function pyramidBuilder1(n) {
//   midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }
// pyramidBuilder1(3);

// function pyramidBuilder2(n, row = 0, level = "") {
//   if (row === n) {
//     return;
//   }
//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramidBuilder2(n, row + 1);
//   }
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   let add;
//   if (midpoint - row <= level.length && midpoint.length >= level.length) {
//     add = "";
//   } else {
//     add = " ";
//   }
//   pyramidBuilder2(n, row, level + add);
// }
// pyramidBuilder2(3);

// function pyramid(n, row = 0, level = "") {
//   if (row === n) {
//     return;
//   }

//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add;
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = "#";
//   } else {
//     add = " ";
//   }
//   pyramid(n, row, level + add);
// }

// function howManyVowels(str) {
//   let num = 0;
//   let checker = ["a", "e", "i", "o", "u"];
//   for (let letter of str.toLowerCase()) {
//     if (checker.includes(letter)) {
//       num += 1;
//     }
//   }
//   return num;
// }

// function howManyVowels2(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

// function matrix(n) {
//   const results = [];
//   for (i = 0; i < n; i++) {
//     results.push([]);
//   }
//   let counter = 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;

//   while (startColumn <= endColumn && startRow <= endRow) {
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;

//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//   }
//   return results;
// }

// function fibSeries(n) {
//   const result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result.push(a + b);
//   }
//   return result[n];
// }

// function fibWithRecursion(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// function memoize(fn) {
//   const cache = {};
//   return function () {
//     if (cache[args]) {
//       return cache[args];
//     }
//     const result = fn.apply(this, args);
//     cache[args] = result;
//     return result;
//   };
// }

// fib = memoize(fib);

function diagonalDifference() {}

var matrix = [
  [2, 3, 4],
  [5, 3, -1],
  [9, 8, -2],
];
