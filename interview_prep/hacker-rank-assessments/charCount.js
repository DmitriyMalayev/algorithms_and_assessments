function charCount(str) {
  let result = {};
  str = str.toLowerCase().replace(/[\s.;,?%0-9]/g, "");

  for (let char of str) {
    result[char] = ++result[char] || 1;

    // if (result[char] > 0) {
    //   result[char]
    //   result[char] += 1;
    // } else {
    //   result[char] = 1;
    // }
  }

  return result;
  // return Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b));
}
// let newResult = charCount("I love leetcode");

console.log(charCount("I love leetcode"));
// console.log(Object.keys(newResult).reduce((a, b) => (newResult[a] > newResult[b] ? a : b)));
