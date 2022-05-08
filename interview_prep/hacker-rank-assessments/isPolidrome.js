var isPalindrome = function (x) {
  let a = parseInt(x.toString().split("").reverse().join(""));

  return a === x;
};

console.log(isPalindrome(121));
