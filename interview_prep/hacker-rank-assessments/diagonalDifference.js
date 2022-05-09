function diagonalDifference(arr) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[arr.length - 1 - i][i];
  }
  return Math.abs(sum1 - sum2);
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);



/*
arr[0]
(3) [11, 2, 4]
arr[0][0]
11
arr[arr.length -1 - 0][0]
10
arr
(3) [Array(3), Array(3), Array(3)]
0: (3) [11, 2, 4]
1: (3) [4, 5, 6]
2: (3) [10, 8, -12]
length: 3
[[Prototype]]: Array(0)
*/ 