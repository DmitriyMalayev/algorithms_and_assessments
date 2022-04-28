let strings = ["ab", " ab", "abc"];
let queries = ["ab", "abc", "bc"];

function matchingStrings(strings, queries) {
  let memory = {};
  for (let string of strings) {
    memory[string] = (memory[string] || 0) + 1;
    // undefined                         0 + 1  key "ab" value 1
    // 1   "ab"
  }
  //returns an array with values
  return queries.map((query) => memory[query] || 0);
}

matchingStrings(strings, queries);
