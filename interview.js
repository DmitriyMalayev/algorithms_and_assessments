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

function capitalizedWords(str) {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}

function capitalizedWords2(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

function simpleArraySum(ar) {
  let sum = 0
  for (let n of ar) {
    sum += n
  }
}

function simpleArraySum2(ar) {
  return ar.reduce((a, b) => { return a + b }, 0)
}


function simpleArraySum2(ar) {
  return ar.reduce((a, b) => a + b)
}

