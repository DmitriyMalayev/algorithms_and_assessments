var romanToInt = function (s) {
  const list = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let currentInt = list[s.charAt(i)]; //Look at the first roman numeral pass it through the map and get the value
    let nextInt = list[s.charAt(i + 1)];

    if (nextInt) {
      //Checks for presence of a nextInt (edge case)
      if (currentInt >= nextInt) {
        //If currentInt is greater than or equal to nextInt
        total += currentInt; //Add the current integer to the total
      } else {
        total += nextInt - currentInt; //If currentInt is not greater than or equal to nextInt we subtract and add it to total
        i++; //Since we have accounted for both values we are incrementing to check next set
      }
    } else {
      total += currentInt;
    }
  }
  return total;
};
romanToInt("III")
// var romanToInt = function (s) {
//   const map = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let res = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (i + 1 < s.length && map[s[i]] < map[s[i + 1]]) {
//       res -= map[s[i]];
//     } else {
//       res += map[s[i]];
//     }
//   }

//   return res;
// };
