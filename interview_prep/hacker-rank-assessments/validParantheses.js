var isValid = function (s) {
  let bracket = {  //object to reference 
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let heap = [];

  for (let char of s) {
    if (bracket[char]) {
      //returns corresponding value of key
      heap.push(bracket[char]);
    } else {
      if (heap.pop() !== char) {
        return false;
      }

      // pop removes the last element and returns it.
      // If it's not the character that we want, return false.
    }
  }
  return !heap.length; //empty string, valid.
};

// constant time ?
// LAST IN FIRST OUT?

console.log(isValid("(){[]}"))


