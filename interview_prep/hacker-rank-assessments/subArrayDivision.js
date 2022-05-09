function birthday(s, d, m) {
  let matches = 0;
  for (let i = 0; i < s.length; i++) {
    let subArray = s.slice(i, i + m); //slice is non destructive
    let sum = subArray.reduce((val, newValue) => val + newValue, 0);
    if (sum == d) {
      matches++;
    }
  }
  return matches;
}

birthday([2, 2, 1, 3, 2], 4, 2);
