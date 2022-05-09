function groupAnagrams(strs) {
  let cache = {};
  for (let str of strs) {
    let sortedKey = str.split("").sort().join(""); //aet
    if (!cache[sortedKey]) {
      //If it doesn't exist in the cache
      cache[sortedKey] = [str]; //We assign it
    } else {
      cache[sortedKey].push(str); //If it does exist, we push the current str in
    }
  }
  return Object.values(cache);
}

function groupAnagrams2(strs) {
  let cache = {};
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101] // prettier-ignore

  for (let str of strs) {
    let Key = str
      .split("")
      .reduce((total, char) => total * primeNumbers[char.charCodeAt() - 97], 1); //Taking each character, convert it to a number and multiply it. Creating a key.
    if (!cache[Key]) {
      //If it doesn't exist in the cache
      cache[Key] = [str]; //We assign it
    } else {
      cache[Key].push(str); //If it does exist, we push the current str in
    }
  }
  return Object.values(cache);
}

/* 
n = total length of the array 
w = total length of each word in the array

O(NWLogW) Time Complexity
(NW) Objects with keys with words 


input = ["eat", "tea", "tan", "ate", "nat", "bat"];
output = [
  [
    ["ate", "eat", "tea"],
    ["nat", "tan"],
    ["bat"]
  ]
]
*/
