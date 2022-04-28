function diagonalDifference(arr) {
  const length = arr.length;
  let diag1 = 0;
  let diag2 = 0;

  for (let i = 0; i < arr.length; i++) {
    diag1 += arr[i][i]; //primary diagonal sum
    diag2 += arr[length - 1 - i][i]; //second dimension of array to calculate secondary diagonal
  }
  return Math.abs(diag1 - diag2);
}

