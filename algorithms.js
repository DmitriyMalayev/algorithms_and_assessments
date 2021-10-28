function shapeArea(n) {
  let area = 1;
  for (var i = 1; i < n; i++) {
    area += 4 * i;
  }
  return area;
}
function makeArrayConsecutive2(statues) {
  statues.sort(
    (a,
    (b) => {
      return a - b;
    })
  );

  let min = statues[0];
  let max = statues[statues.length - 1];
  let count = 0;

  for (let i = min; i < max; i++) {
    if (statues.indexOf(i) === -1) {
      //index of element or -1
      count++;
    }
  }
  return count;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseInteger(n) {
  let reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed * Math.sign(n));
}

function palindromeTest(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

function maxCharacters(str) {
  const charMap = {};

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  let max = 0;
  let maxChar = "";

  for (let char in charMap) {
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
