var isAnagram = function (s, t) {
  let answer = s.split("").sort().join("") === t.split("").sort().join("");
  return answer
};

isAnagram("anagram", "nagaram");
