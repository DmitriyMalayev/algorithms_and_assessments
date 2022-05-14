function isAnagram(s, t) {
  let answer = s.split("").sort().join("") === t.split("").sort().join("");
  return answer;
}

function isAnagram2(s, t) {
  let obj1 = {};
  let obj2 = {};

  if (s.length !== t.length) {
    return false;
  }



  for (let char of s) {
    console.log((obj1[char] = (obj1[char] || 0) + 1));
    console.log(obj1);
  }

  // for (let char of t) {
  //   console.log((obj2[char] = (obj2[char] || 0) + 1));
  //   console.log(obj2);
  // }



  for (let char of t) {

    console.log(char)
    console.log(obj1[char])

    // console.log(obj1[char] === obj2[char])

    // if (obj1[char] !== obj2[char]) {
    //   console.log(obj2[char]);
    //   return false;
    // }
  }
  return true;
}

isAnagram("anagram", "nagaram");
console.log(isAnagram2("anagram", "nagaram"));

// for (let key in freqCount1) {
//   if (!(key ** 2 in freqCount2)) {
//     return false;
//   }
//   if (freqCount2[key ** 2] !== freqCount1[key]) {
//     return false;
//   }
// }
// return true;
