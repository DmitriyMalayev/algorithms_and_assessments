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
