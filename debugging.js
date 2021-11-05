// function pyramidBuilder1(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2); //midpoint index

//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let column = 0; column < 2 * n - 1; column++) {
//         debugger;
//       if (midpoint - row <= column && midpoint + row >= column) {
      
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

// pyramidBuilder1(3)



function howManyVowels(str) {
  let num = 0;
  let checker = ["a", "e", "i", "o", "u"];
  for (let letter of str) {
    if (checker.includes(letter)) {
      num += 1;
    }
  }
  return num;
}

howManyVowels("words");


