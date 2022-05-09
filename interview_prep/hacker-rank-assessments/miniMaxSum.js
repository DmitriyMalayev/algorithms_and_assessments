function miniMaxSum(arr) {
  let minSlice = arr
    .sort((a, b) => {
      return a - b;
    })
    .slice(1);
  let min = minSlice.reduce((val, newValue) => val + newValue, 0);
  let maxSort = arr.sort((a, b) => {
    return a - b;
  });
  let max = maxSort
    .reverse()
    .slice(1)
    .reduce((val, newValue) => val + newValue, 0);

  console.log(max, min);
}

miniMaxSum([7, 69, 2, 221, 8974]);

// console.log("07:05:45");




